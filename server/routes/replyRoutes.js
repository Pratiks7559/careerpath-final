import express from 'express';
import {
  createReply,
  updateReply,
  deleteReply,
  toggleLikeReply,
  addReactionToReply
} from '../controllers/replyController.js';

const router = express.Router();

router.post('/', createReply);
router.put('/:id', updateReply);
router.delete('/:id', deleteReply);
router.post('/like', toggleLikeReply);
router.post('/reaction', addReactionToReply);

export default router;