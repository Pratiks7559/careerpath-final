// resumeCheckerController.js

import pdfParse from 'pdf-parse';

export const checkResume = async (req, res) => {
  try {
    const pdfBuffer = req.file.buffer;
    const pdfData = await pdfParse(pdfBuffer);

    const text = pdfData.text.toLowerCase();

    const importantKeywords = ['react', 'javascript', 'python', 'leadership', 'teamwork', 'communication'];
    const importantSections = ['education', 'experience', 'skills', 'projects', 'certifications'];

    let missingKeywords = importantKeywords.filter(keyword => !text.includes(keyword));
    let formatIssues = importantSections.filter(section => !text.includes(section));

    let score = 100;
    if (missingKeywords.length > 0) score -= missingKeywords.length * 5;
    if (formatIssues.length > 0) score -= formatIssues.length * 3;

    if (score < 0) score = 0;

    res.json({
      textPreview: text.slice(0, 300),
      missingKeywords,
      formatIssues,
      suggestions: "Try adding missing skills and improve resume structure!",
      score
    });
  } catch (error) {
    console.error('Error checking resume', error.message || error);
    res.status(500).json({ error: 'Failed to check resume' });
  }
};
