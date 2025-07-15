import express from 'express';
import {
  getNotifications,
  markNotificationsAsRead,
  deleteNotification
} from '../controllers/notificationController.js';

const router = express.Router();

router.get('/:userId', getNotifications);
router.put('/read/:userId', markNotificationsAsRead);
router.delete('/:id', deleteNotification);

export default router;