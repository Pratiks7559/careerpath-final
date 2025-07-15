// resumeCheckerRoutes.js

import express from 'express';
import multer from 'multer';
import { checkResume } from '../controllers/resumeCheckerController.js';

const router = express.Router();
const upload = multer(); // For memory storage

router.post('/', upload.single('resume'), checkResume);

export default router;
