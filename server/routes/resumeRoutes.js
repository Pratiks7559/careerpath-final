import express from 'express';
import multer from 'multer';
const router = express.Router();
import Resume from '../models/Resume.js';

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create a new resume
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    console.log('Form fields:', req.body);
    console.log('Uploaded photo:', req.file);

    // Parse arrays (they are strings inside req.body because of multipart/form-data)
    const educations = req.body.educations ? JSON.parse(req.body.educations) : [];
    const experiences = req.body.experiences ? JSON.parse(req.body.experiences) : [];
    const skills = req.body.skills ? JSON.parse(req.body.skills) : [];
    const projects = req.body.projects ? JSON.parse(req.body.projects) : [];
    const certifications = req.body.certifications ? JSON.parse(req.body.certifications) : [];
    const achievements = req.body.achievements ? JSON.parse(req.body.achievements) : [];
    const socialMediaLinks = req.body.socialMediaLinks ? JSON.parse(req.body.socialMediaLinks) : [];

    // Calculate ATS score
    let atsScore = 0;
    if (req.body.name) atsScore += 10;
    if (req.body.email) atsScore += 10;
    if (req.body.phone) atsScore += 10;
    if (req.body.address) atsScore += 5;
    if (req.body.bio) atsScore += 5;
    if (educations.length > 0) atsScore += educations.length * 5;
    if (experiences.length > 0) atsScore += experiences.length * 10;
    if (skills.length > 0) atsScore += skills.length * 2;
    if (projects.length > 0) atsScore += projects.length * 5;
    if (certifications.length > 0) atsScore += certifications.length * 5;
    if (achievements.length > 0) atsScore += achievements.length * 3;
    if (socialMediaLinks.length > 0) atsScore += socialMediaLinks.length * 2;

    const resumeData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      bio: req.body.bio,
      photo: req.file ? req.file.buffer : null, // if you want to store photo buffer
      educations,
      experiences,
      skills,
      projects,
      certifications,
      achievements,
      socialMediaLinks,
      atsScore: Math.min(atsScore, 100) // cap at 100
    };

    const resume = new Resume(resumeData);
    await resume.save();
    res.status(201).json(resume);
  } catch (err) {
    console.error('Error creating resume:', err);
    res.status(400).json({ message: err.message });
  }
});

// Get all resumes
router.get('/', async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single resume
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
