import Notification from '../models/Notification.js';

/**
 * @desc    Get all notifications for a user
 * @route   GET /api/notifications/:userId
 * @access  Private
 */
export const getNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({ recipient: userId })
      .populate('sender', 'name profilePhoto')
      .sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Failed to fetch notifications', error: error.message });
  }
};

/**
 * @desc    Mark all notifications as read for a user
 * @route   PUT /api/notifications/read/:userId
 * @access  Private
 */
export const markNotificationsAsRead = async (req, res) => {
  const { userId } = req.params;

  try {
    await Notification.updateMany(
      { recipient: userId, read: false },
      { $set: { read: true } }
    );

    res.status(200).json({ message: 'All notifications marked as read' });
  } catch (error) {
    console.error('Error marking notifications as read:', error);
    res.status(500).json({ message: 'Failed to mark notifications as read', error: error.message });
  }
};

/**
 * @desc    Delete a specific notification by ID
 * @route   DELETE /api/notifications/:id
 * @access  Private
 */
export const deleteNotification = async (req, res) => {
  const { id } = req.params;

  try {
    await Notification.findByIdAndDelete(id);
    res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({ message: 'Failed to delete notification', error: error.message });
  }
};
