import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './ResumeView.css';

const ResumeView = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('resume-form-body');
    return () => {
      document.body.classList.remove('resume-form-body');
    };
  }, []);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/resumes/${id}`);
        setResume(response.data);
      } catch (error) {
        console.error('Error fetching resume:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id]);

  const generatePDF = () => {
    const input = document.getElementById('resume-view');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    html2canvas(input, {
      scale: 2,
      useCORS: true
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${resume.name || 'resume'}.pdf`);
    }).catch(error => {
      console.error('PDF generation error:', error);
    });
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!resume) return <div className="not-found">Resume not found</div>;

  return (
    <div className="resume-view-container">
      <button onClick={generatePDF} className="download-btn">Download PDF</button>

      <div className="resume-view" id="resume-view">
        {/* Header */}
        <div className="resume-header">
          {resume.photo && (
            <div className="resume-photo">
              <img src={resume.photo} alt="Profile" />
            </div>
          )}
          <div className="resume-basic-info">
            <h1>{resume.name}</h1>
            <p className='p1'>{resume.email}</p>
            <p className='p2'>{resume.phone}</p>
            {resume.address && <p className='p3'>{resume.address}</p>}
            {resume.linkedIn && <p>LinkedIn: {resume.linkedIn}</p>}
            {resume.github && <p>GitHub: {resume.github}</p>}
            {resume.portfolio && <p>Portfolio: {resume.portfolio}</p>}
          </div>
        </div>

        {/* Summary */}
        {resume.bio && (
          <div className="resume-section">
            <h2>Summary</h2>
            <p>{resume.bio}</p>
          </div>
        )}

        {/* Skills */}
        {Array.isArray(resume.skills) && resume.skills.length > 0 && (
          <div className="resume-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              {resume.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Education */}
        {Array.isArray(resume.educations) && resume.educations.length > 0 && (
          <div className="resume-section">
            <h2>Education</h2>
            {resume.educations.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.educationType}</h3>
                <p>{edu.institutionName} - Marks/Percentage: {edu.marks}</p>
                <p>
                  {new Date(edu.startDate).toLocaleDateString()} -{' '}
                  {edu.currentlyStudying
                    ? 'Present'
                    : edu.endDate
                    ? new Date(edu.endDate).toLocaleDateString()
                    : 'Present'}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {Array.isArray(resume.experience) && resume.experience.length > 0 && (
          <div className="resume-section">
            <h2>Work Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3>{exp.companyName}</h3>
                <p>{exp.position}</p>
                <p>
                  {new Date(exp.startDate).toLocaleDateString()} -{' '}
                  {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                </p>
                {Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {resume.projects && resume.projects.length > 0 && (
          <div className="resume-section">
            <h2>Projects</h2>
            {resume.projects.map((project, index) => (
              <div key={index} className="resume-project-item">
                <h3 className="resume-project-title">{project.name || 'Unnamed Project'}</h3>
                {project.description && <p className="resume-project-description">{project.description}</p>}
                {project.technologies && (
                  <p className="resume-project-tech"><strong>Technologies:</strong> {project.technologies}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {Array.isArray(resume.certifications) && resume.certifications.length > 0 && (
          <div className="resume-section">
            <h2>Certifications</h2>
            {resume.certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <h3>{cert.name}</h3>
                <p>Issued by: {cert.issuingOrganization}</p>
                <p>
                  {new Date(cert.issueDate).toLocaleDateString()}
                  {cert.expirationDate && ` - ${new Date(cert.expirationDate).toLocaleDateString()}`}
                </p>
                {cert.credentialId && <p>Credential ID: {cert.credentialId}</p>}
                {cert.credentialUrl && (
                  <p>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      Verify Credential
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {Array.isArray(resume.languages) && resume.languages.length > 0 && (
          <div className="resume-section">
            <h2>Languages</h2>
            <ul className="languages-list">
              {resume.languages.map((lang, index) => (
                <li key={index}>{lang.language} - {lang.proficiency}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Achievements */}
        {resume.achievements && resume.achievements.length > 0 && (
          <div className="resume-section">
            <h2>Achievements</h2>
            <ul className="achievements-list">
              {resume.achievements.map((achievement, index) => (
                <li key={achievement._id || index}>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  <p>{new Date(achievement.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeView;
