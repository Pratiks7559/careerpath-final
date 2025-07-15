import Resume from '../models/Resume.js';
import { uploadPhoto } from './uploadController.js';
import fs from 'fs';
import path from 'path';

// Create Resume
export const createResume = async (req, res) => {
    try {
      uploadPhoto(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ success: false, message: err.message });
        }
  
        const { personalInfo = {}, education = '[]', experience = '[]', skills = '[]', projects = '[]', socialLinks = '[]', userId } = req.body;
  
        // Basic validation
        if (!personalInfo.name || !personalInfo.email || !personalInfo.phone || !personalInfo.address || !userId) {
          return res.status(400).json({ 
            success: false, 
            message: 'Name, email, phone, address, and userId are required.' 
          });
        }
  
        const resumeData = {
          personalInfo: {
            name: personalInfo.name,
            email: personalInfo.email,
            phone: personalInfo.phone,
            address: personalInfo.address,
            bio: personalInfo.bio || '',
          },
          education: JSON.parse(education),
          experience: JSON.parse(experience),
          skills: JSON.parse(skills),
          projects: JSON.parse(projects),
          socialLinks: JSON.parse(socialLinks),
          userId, // include userId
        };
  
        if (req.file) {
          resumeData.photoPath = req.file.path;
        }
  
        const resume = await Resume.create(resumeData);
  
        res.status(201).json({
          success: true,
          data: resume,
          atsScore: resume.atsScore
        });
      });
    } catch (error) {
      console.error('Error creating resume:', error.message);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  

// Get All Resumes
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: resumes });
  } catch (error) {
    console.error('Error fetching resumes:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Get Single Resume
export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ success: false, message: 'Resume not found' });
    }

    let photoBase64 = null;
    if (resume.photoPath) {
      try {
        const imagePath = path.join(process.cwd(), resume.photoPath);
        const imageBuffer = fs.readFileSync(imagePath);
        photoBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
      } catch (err) {
        console.error('Error loading photo:', err.message);
      }
    }

    const resumeData = resume.toObject();
    if (photoBase64) {
      resumeData.personalInfo.photo = photoBase64;
    }

    res.status(200).json({
      success: true,
      data: resumeData,
      atsScore: resume.atsScore
    });
  } catch (error) {
    console.error('Error fetching resume:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Update Resume
export const updateResume = async (req, res) => {
  try {
    uploadPhoto(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }

      const { personalInfo = {}, education = '[]', experience = '[]', skills = '[]', projects = '[]', socialLinks = '[]' } = req.body;

      const updateData = {
        personalInfo: {
          name: personalInfo.name || '',
          email: personalInfo.email || '',
          phone: personalInfo.phone || '',
          address: personalInfo.address || '',
          bio: personalInfo.bio || '',
        },
        education: JSON.parse(education),
        experience: JSON.parse(experience),
        skills: JSON.parse(skills),
        projects: JSON.parse(projects),
        socialLinks: JSON.parse(socialLinks),
      };

      if (req.file) {
        const oldResume = await Resume.findById(req.params.id);
        if (oldResume && oldResume.photoPath) {
          try {
            fs.unlinkSync(path.join(process.cwd(), oldResume.photoPath));
          } catch (err) {
            console.error('Error deleting old photo:', err.message);
          }
        }
        updateData.photoPath = req.file.path;
      }

      const resume = await Resume.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });

      if (!resume) {
        return res.status(404).json({ success: false, message: 'Resume not found' });
      }

      res.status(200).json({
        success: true,
        data: resume,
        atsScore: resume.atsScore
      });
    });
  } catch (error) {
    console.error('Error updating resume:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Delete Resume
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndDelete(req.params.id);

    if (!resume) {
      return res.status(404).json({ success: false, message: 'Resume not found' });
    }

    if (resume.photoPath) {
      try {
        fs.unlinkSync(path.join(process.cwd(), resume.photoPath));
      } catch (err) {
        console.error('Error deleting photo:', err.message);
      }
    }

    res.status(200).json({ success: true, message: 'Resume deleted' });
  } catch (error) {
    console.error('Error deleting resume:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Calculate ATS Score
export const calculateAtsScore = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({ success: false, message: 'Resume not found' });
    }

    res.status(200).json({
      success: true,
      atsScore: resume.atsScore,
      optimizationTips: getOptimizationTips(resume)
    });
  } catch (error) {
    console.error('Error calculating ATS score:', error.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// Helper Function
function getOptimizationTips(resume) {
  const tips = [];

  if (!resume.personalInfo?.name || !resume.personalInfo?.email || !resume.personalInfo?.phone || !resume.personalInfo?.address) {
    tips.push('Fill out all personal information fields.');
  }

  if (!resume.education || resume.education.length === 0) {
    tips.push('Add at least one education entry.');
  }

  if (!resume.skills || resume.skills.length < 5) {
    tips.push('Include at least 5 relevant skills.');
  }

  if (!resume.experience || resume.experience.length === 0) {
    tips.push('Consider adding work experience.');
  } else {
    const hasActionVerbs = resume.experience.some(exp =>
      exp.description && /(led|managed|developed|created|improved|increased)/i.test(exp.description)
    );
    if (!hasActionVerbs) {
      tips.push('Use action verbs in experience descriptions.');
    }
  }

  if (!resume.projects || resume.projects.length === 0) {
    tips.push('Adding projects can strengthen your resume.');
  }

  return tips;
}
