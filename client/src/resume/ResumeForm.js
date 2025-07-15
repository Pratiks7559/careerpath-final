import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './res.css';

const ResumeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bio: '',
    photo: null,
    educations: [],
    experiences: [],
    skills: [],
    projects: [],
    socialMediaLinks: [],
    certifications: [],
    achievements: []
  });

  const [currentEducation, setCurrentEducation] = useState({
    educationType: '',
    institutionName: '',
    startDate: '',
    endDate: '',
    marks: '',
    currentlyStudying: false
  });

  const [currentExperience, setCurrentExperience] = useState({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
    currentlyWorking: false
  });

  const [currentProject, setCurrentProject] = useState({
    name: '',
    description: '',
    technologies: ''
  });

  const [currentSocialMedia, setCurrentSocialMedia] = useState({
    platform: '',
    url: ''
  });

  const [currentCertification, setCurrentCertification] = useState({
    name: '',
    issuingOrganization: '',
    issueDate: '',
    credentialUrl: ''
  });

  const [currentAchievement, setCurrentAchievement] = useState({
    title: '',
    description: '',
    date: ''
  });

  const [skillInput, setSkillInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePhone = (phone) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(phone);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target || {};
    if (!name) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFileChange = (e) => {
    const file = e?.target?.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };


  const handleEducationChange = (e) => {
    const { name, value, type, checked } = e.target || {};
    if (!name) return;

    setCurrentEducation(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addEducation = () => {
    if (!currentEducation?.educationType || !currentEducation?.institutionName || !currentEducation?.startDate) {
      setError('Please fill all required education fields');
      return;
    }

    setFormData(prev => ({
      ...prev,
      educations: [...(prev.educations || []), currentEducation]
    }));

    setCurrentEducation({
      educationType: '',
      institutionName: '',
      startDate: '',
      endDate: '',
      marks: '',
      currentlyStudying: false
    });
  };

  const removeEducation = (index) => {
    if (index < 0 || index >= formData.educations?.length) return;
    
    setFormData(prev => ({
      ...prev,
      educations: prev.educations.filter((_, i) => i !== index)
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentExperience({
      ...currentExperience,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const addExperience = () => {
    if (!currentExperience.companyName || !currentExperience.position || !currentExperience.startDate) {
      alert('Please fill all required experience fields');
      return;
    }
    setFormData({
      ...formData,
      experiences: [...formData.experiences, currentExperience]
    });
    setCurrentExperience({
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      currentlyWorking: false
    });
  };

  const removeExperience = (index) => {
    const newExperiences = [...formData.experiences];
    newExperiences.splice(index, 1);
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const addProject = () => {
    if (!currentProject.name) {
      alert('Project name is required');
      return;
    }
    setFormData({
      ...formData,
      projects: [...formData.projects, currentProject]
    });
    setCurrentProject({
      name: '',
      description: '',
      technologies: ''
    });
  };

  const removeProject = (index) => {
    const newProjects = [...formData.projects];
    newProjects.splice(index, 1);
    setFormData({ ...formData, projects: newProjects });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setCurrentSocialMedia({ ...currentSocialMedia, [name]: value });
  };

  const addSocialMedia = () => {
    if (!currentSocialMedia.platform || !currentSocialMedia.url) {
      alert('Platform and URL are required');
      return;
    }
    setFormData({
      ...formData,
      socialMediaLinks: [...formData.socialMediaLinks, currentSocialMedia]
    });
    setCurrentSocialMedia({
      platform: '',
      url: ''
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...formData.socialMediaLinks];
    newSocialMedia.splice(index, 1);
    setFormData({ ...formData, socialMediaLinks: newSocialMedia });
  };

  const handleCertificationChange = (e) => {
    const { name, value } = e.target;
    setCurrentCertification({ ...currentCertification, [name]: value });
  };

  const addCertification = () => {
    if (!currentCertification.name) {
      alert('Certification name is required');
      return;
    }
    setFormData({
      ...formData,
      certifications: [...formData.certifications, currentCertification]
    });
    setCurrentCertification({
      name: '',
      issuingOrganization: '',
      issueDate: '',
      credentialUrl: ''
    });
  };

  const removeCertification = (index) => {
    const newCertifications = [...formData.certifications];
    newCertifications.splice(index, 1);
    setFormData({ ...formData, certifications: newCertifications });
  };

  const handleAchievementChange = (e) => {
    const { name, value } = e.target;
    setCurrentAchievement({ ...currentAchievement, [name]: value });
  };

  const addAchievement = () => {
    if (!currentAchievement.title) {
      alert('Achievement title is required');
      return;
    }
    setFormData({
      ...formData,
      achievements: [...formData.achievements, currentAchievement]
    });
    setCurrentAchievement({
      title: '',
      description: '',
      date: ''
    });
  };

  const removeAchievement = (index) => {
    const newAchievements = [...formData.achievements];
    newAchievements.splice(index, 1);
    setFormData({ ...formData, achievements: newAchievements });
  };

  const addSkill = () => {
    if (skillInput.trim()) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1);
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Name, Email, and Phone are required fields');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid phone number (10-15 digits)');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      
      // Safely append all data with checks
      if (formData.name) formDataToSend.append('name', formData.name);
      if (formData.email) formDataToSend.append('email', formData.email);
      if (formData.phone) formDataToSend.append('phone', formData.phone);
      if (formData.address) formDataToSend.append('address', formData.address);
      if (formData.bio) formDataToSend.append('bio', formData.bio);
      if (formData.photo) formDataToSend.append('photo', formData.photo);

      // Safely append arrays
      if (formData.educations?.length > 0) {
        formDataToSend.append('educations', JSON.stringify(formData.educations));
      }
      if (formData.experiences.length > 0) {
        formDataToSend.append('experiences', JSON.stringify(formData.experiences));
      }
      if (formData.skills.length > 0) {
        formDataToSend.append('skills', JSON.stringify(formData.skills));
      }
      if (formData.projects.length > 0) {
        formDataToSend.append('projects', JSON.stringify(formData.projects));
      }
      if (formData.socialMediaLinks.length > 0) {
        formDataToSend.append('socialMediaLinks', JSON.stringify(formData.socialMediaLinks));
      }
      if (formData.certifications.length > 0) {
        formDataToSend.append('certifications', JSON.stringify(formData.certifications));
      }
      if (formData.achievements.length > 0) {
        formDataToSend.append('achievements', JSON.stringify(formData.achievements));
      }

      const response = await axios.post('http://localhost:5000/api/resumes', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response?.data?._id) {
        navigate(`/resumes/${response.data._id}`);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError(error.response?.data?.message || error.message || 'Failed to create resume');
    } finally {
      setIsSubmitting(false);
    }

  };
  const renderEducations = () => {
    if (!formData.educations?.length) return null;

    return formData.educations.map((edu, index) => (
      <div key={index} className="resume-form-item">
        <h5 className="resume-form-item-title">
          {(edu?.educationType || 'Education')} - {edu?.institutionName || 'Unknown Institution'}
        </h5>
        <p className="resume-form-item-date">
          {edu?.startDate || 'Unknown'} to {edu?.currentlyStudying ? 'Present' : (edu?.endDate || 'Unknown')}
        </p>
        {edu?.marks && <p className="resume-form-item-marks">Marks: {edu.marks}</p>}
        <button 
          type="button" 
          className="resume-form-remove-btn"
          onClick={() => removeEducation(index)}
        >
          Remove
        </button>
      </div>
    ));
  };
  return (
    <div className="resume-form-container">
      <h2 className="resume-form-title">Create Your Resume</h2>
      {error && (
        <div className="resume-form-error">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="resume-form">
        {/* Basic Information */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Basic Information</h3>
          </div>
          <div className="resume-form-section-body">
          <div className="resume-form-field">
              {/* <label className="resume-form-label">Photo (Optional)</label> */}
              <input 
                type="file" 
                className="resume-form-input" 
                onChange={handleFileChange} 
                accept="image/*"
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Name*</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="name" 
                value={formData.name || ''} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Email*</label>
              <input 
                type="email" 
                className="resume-form-input" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Phone*</label>
              <input 
                type="tel" 
                className="resume-form-input" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Address (Optional)</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Bio (Optional)</label>
              <textarea 
                className="resume-form-textarea" 
                name="bio" 
                value={formData.bio} 
                onChange={handleInputChange} 
                rows="3"
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Education</h3>
          </div>
          <div className="resume-form-section-body">
          {renderEducations()}
            <div className="resume-form-field">
              <label className="resume-form-label">Education Type*</label>
              <select 
                className="resume-form-select" 
                name="educationType" 
                value={currentEducation.educationType || ''} 
                onChange={handleEducationChange}
               
              >
                <option value="">Select</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Institution Name*</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="institutionName" 
                value={currentEducation.institutionName} 
                onChange={handleEducationChange} 
                 
              />
            </div>
            <div className="resume-form-row">
              <div className="resume-form-col">
                <label className="resume-form-label">Start Date*</label>
                <input 
                  type="date" 
                  className="resume-form-input" 
                  name="startDate" 
                  value={currentEducation.startDate} 
                  onChange={handleEducationChange} 
                  
                />
              </div>
              <div className="resume-form-col">
                <label className="resume-form-label">End Date</label>
                <input 
                  type="date" 
                  className="resume-form-input" 
                  name="endDate" 
                  value={currentEducation.endDate} 
                  onChange={handleEducationChange} 
                  disabled={currentEducation.currentlyStudying}
                />
              </div>
            </div>
            <div className="resume-form-checkbox">
              <input 
                type="checkbox" 
                className="resume-form-checkbox-input" 
                name="currentlyStudying" 
                checked={currentEducation.currentlyStudying} 
                onChange={handleEducationChange} 
              />
              <label className="resume-form-checkbox-label">Currently Studying</label>
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Marks/Percentage</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="marks" 
                value={currentEducation.marks} 
                onChange={handleEducationChange} 
              />
            </div>
            <button 
              type="button" 
              className="resume-form-add-btn"
              onClick={addEducation}
            >
              Add Education
            </button>
          </div>
        </div>

        {/* Experience */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Experience (Optional)</h3>
          </div>
          <div className="resume-form-section-body">
            {formData.experiences.map((exp, index) => (
              <div key={index} className="resume-form-item">
                <h5 className="resume-form-item-title">{exp.position} at {exp.companyName}</h5>
                <p className="resume-form-item-date">{exp.startDate} to {exp.currentlyWorking ? 'Present' : exp.endDate}</p>
                <button 
                  type="button" 
                  className="resume-form-remove-btn"
                  onClick={() => removeExperience(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="resume-form-field">
              <label className="resume-form-label">Company Name</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="companyName" 
                value={currentExperience.companyName} 
                onChange={handleExperienceChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Position</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="position" 
                value={currentExperience.position} 
                onChange={handleExperienceChange} 
              />
            </div>
            <div className="resume-form-row">
              <div className="resume-form-col">
                <label className="resume-form-label">Start Date</label>
                <input 
                  type="date" 
                  className="resume-form-input" 
                  name="startDate" 
                  value={currentExperience.startDate} 
                  onChange={handleExperienceChange} 
                />
              </div>
              <div className="resume-form-col">
                <label className="resume-form-label">End Date</label>
                <input 
                  type="date" 
                  className="resume-form-input" 
                  name="endDate" 
                  value={currentExperience.endDate} 
                  onChange={handleExperienceChange} 
                  disabled={currentExperience.currentlyWorking}
                />
              </div>
            </div>
            <div className="resume-form-checkbox">
              <input 
                type="checkbox" 
                className="resume-form-checkbox-input" 
                name="currentlyWorking" 
                checked={currentExperience.currentlyWorking} 
                onChange={handleExperienceChange} 
              />
              <label className="resume-form-checkbox-label">Currently Working Here</label>
            </div>
            <button 
              type="button" 
              className="resume-form-add-btn"
              onClick={addExperience}
            >
              Add Experience
            </button>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Skills</h3>
          </div>
          <div className="resume-form-section-body">
            <div className="resume-form-field">
              <div className="resume-form-skills-container">
                {formData.skills.map((skill, index) => (
                  <span key={index} className="resume-form-skill-tag">
                    {skill}
                    <button 
                      type="button" 
                      className="resume-form-skill-remove"
                      onClick={() => removeSkill(index)}
                      aria-label="Remove"
                    />
                  </span>
                ))}
              </div>
              <div className="resume-form-skill-input-group">
                <input 
                  type="text" 
                  className="resume-form-input" 
                  value={skillInput} 
                  onChange={(e) => setSkillInput(e.target.value)} 
                  placeholder="Add a skill" 
                />
                <button 
                  type="button" 
                  className="resume-form-skill-add-btn"
                  onClick={addSkill}
                >
                  Add Skill
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Projects (Optional)</h3>
          </div>
          <div className="resume-form-section-body">
            {formData.projects.map((project, index) => (
              <div key={index} className="resume-form-item">
                <h5 className="resume-form-item-title">{project.name}</h5>
                <p className="resume-form-item-desc">{project.description}</p>
                <p className="resume-form-item-tech">Technologies: {project.technologies}</p>
                <button 
                  type="button" 
                  className="resume-form-remove-btn"
                  onClick={() => removeProject(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="resume-form-field">
              <label className="resume-form-label">Project Name</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="name" 
                value={currentProject.name} 
                onChange={handleProjectChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Description</label>
              <textarea 
                className="resume-form-textarea" 
                name="description" 
                value={currentProject.description} 
                onChange={handleProjectChange} 
                rows="2"
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Technologies Used</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="technologies" 
                value={currentProject.technologies} 
                onChange={handleProjectChange} 
              />
            </div>
            <button 
              type="button" 
              className="resume-form-add-btn"
              onClick={addProject}
            >
              Add Project
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Social Media Links (Optional)</h3>
          </div>
          <div className="resume-form-section-body">
            {formData.socialMediaLinks.map((link, index) => (
              <div key={index} className="resume-form-item">
                <h5 className="resume-form-item-title">{link.platform}</h5>
                <p className="resume-form-item-url">{link.url}</p>
                <button 
                  type="button" 
                  className="resume-form-remove-btn"
                  onClick={() => removeSocialMedia(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="resume-form-field">
              <label className="resume-form-label">Platform</label>
              <select 
                className="resume-form-select" 
                name="platform" 
                value={currentSocialMedia.platform} 
                onChange={handleSocialMediaChange}
              >
                <option value="">Select</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="GitHub">GitHub</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">URL</label>
              <input 
                type="url" 
                className="resume-form-input" 
                name="url" 
                value={currentSocialMedia.url} 
                onChange={handleSocialMediaChange} 
              />
            </div>
            <button 
              type="button" 
              className="resume-form-add-btn"
              onClick={addSocialMedia}
            >
              Add Social Media Link
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Certifications (Optional)</h3>
          </div>
          <div className="resume-form-section-body">
            {formData.certifications.map((cert, index) => (
              <div key={index} className="resume-form-item">
                <h5 className="resume-form-item-title">{cert.name}</h5>
                <p className="resume-form-item-org">Issued by: {cert.issuingOrganization}</p>
                <p className="resume-form-item-date">Date: {cert.issueDate}</p>
                <p className="resume-form-item-url">URL: {cert.credentialUrl}</p>
                <button 
                  type="button" 
                  className="resume-form-remove-btn"
                  onClick={() => removeCertification(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="resume-form-field">
              <label className="resume-form-label">Certification Name</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="name" 
                value={currentCertification.name} 
                onChange={handleCertificationChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Issuing Organization</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="issuingOrganization" 
                value={currentCertification.issuingOrganization} 
                onChange={handleCertificationChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Issue Date</label>
              <input 
                type="date" 
                className="resume-form-input" 
                name="issueDate" 
                value={currentCertification.issueDate} 
                onChange={handleCertificationChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Credential URL</label>
              <input 
                type="url" 
                className="resume-form-input" 
                name="credentialUrl" 
                value={currentCertification.credentialUrl} 
                onChange={handleCertificationChange} 
              />
            </div>
            <button 
              type="button" 
              className="resume-form-add-btn"
              onClick={addCertification}
            >
              Add Certification
            </button>
          </div>
        </div>

        {/* Achievements */}
        <div className="resume-form-section">
          <div className="resume-form-section-header">
            <h3>Achievements (Optional)</h3>
          </div>
          <div className="resume-form-section-body">
            {formData.achievements.map((ach, index) => (
              <div key={index} className="resume-form-item">
                <h5 className="resume-form-item-title">{ach.title}</h5>
                <p className="resume-form-item-desc">{ach.description}</p>
                <p className="resume-form-item-date">Date: {ach.date}</p>
                <button 
                  type="button" 
                  className="resume-form-remove-btn"
                  onClick={() => removeAchievement(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="resume-form-field">
              <label className="resume-form-label">Title</label>
              <input 
                type="text" 
                className="resume-form-input" 
                name="title" 
                value={currentAchievement.title} 
                onChange={handleAchievementChange} 
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Description</label>
              <textarea 
                className="resume-form-textarea" 
                name="description" 
                value={currentAchievement.description} 
                onChange={handleAchievementChange} 
                rows="2"
              />
            </div>
            <div className="resume-form-field">
              <label className="resume-form-label">Date</label>
              <input 
                type="date" 
                className="resume-form-input" 
                name="date" 
                value={currentAchievement.date} 
                onChange={handleAchievementChange} 
              />
            </div>
            <button 
              type="button" 
              className="resume-form-add-btn"
              onClick={addAchievement}
            >
              Add Achievement
            </button>
          </div>
        </div>

        <div className="resume-form-submit-container">
          <button type="submit" className="resume-form-submit-btn"
          disabled={isSubmitting}
          >
            {isSubmitting ? 'Generating...' : 'Generate Resume'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm; 