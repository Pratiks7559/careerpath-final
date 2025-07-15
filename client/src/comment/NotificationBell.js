import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './NotificationBell.css';

const NotificationBell = ({ currentUser }) => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchNotifications = useCallback(async () => {
    if (!currentUser || !currentUser._id) return;

    try {
      const response = await axios.get(`/api/notifications/${currentUser._id}`);


      const data = response.data || [];
      setNotifications(data);
      setUnreadCount(data.filter(n => !n.read).length);
    } catch (error) {
      console.error('Error fetching notifications:', error.message || error);
    }
  }, [currentUser]);

  const markAllAsRead = useCallback(async () => {
    if (!currentUser || !currentUser._id) return;

    try {
      await axios.put(`/api/notifications/read/${currentUser._id}`);
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking notifications as read:', error.message || error);
    }
  }, [currentUser]);

  const handleBellClick = () => {
    setShowNotifications(prev => !prev);
    if (!showNotifications && unreadCount > 0) {
      markAllAsRead();
    }
  };

  const handleDeleteNotification = async (id) => {
    try {
      await axios.delete(`/api/notifications/${id}`);
      setNotifications(prev => prev.filter(n => n._id !== id));
    } catch (error) {
      console.error('Error deleting notification:', error.message || error);
    }
  };

  const getNotificationMessage = (notification) => {
    if (!notification || !notification.type) return 'Notification';
  
    const senderName = notification.sender?.name || 'Someone';
  
    switch (notification.type) {
      case 'reply':
        return `${senderName} replied to your ${notification.commentId ? 'comment' : 'reply'}`;
      case 'reaction':
        return `${senderName} reacted to your ${notification.commentId ? 'comment' : 'reply'}`;
      default:
        return 'You have a new notification';
    }
  };
  
  useEffect(() => {
    if (currentUser && currentUser._id) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [currentUser, fetchNotifications]);

  return (
    <div className="notification-bell-wrapper">
      <div 
        className={`notification-bell-icon ${unreadCount > 0 ? 'has-unread' : ''}`}
        onClick={handleBellClick}
      >
        🔔
        {unreadCount > 0 && <span className="notification-bell-count">{unreadCount}</span>}
      </div>

      {showNotifications && (
        <div className="notification-panel">
          <div className="notification-panel-header">
            <h4>Notifications</h4>
            <button 
              className="notification-clear-btn"
              onClick={() => {
                setNotifications([]);
                setUnreadCount(0);
              }}
            >
              Clear All
            </button>
          </div>

          {notifications.length === 0 ? (
            <div className="notification-empty-message">No notifications yet.</div>
          ) : (
            <div className="notification-list">
              {notifications.map((n) => (
                <div 
                  key={n._id} 
                  className={`notification-item ${!n.read ? 'notification-unread' : ''}`}
                  onClick={() => setShowNotifications(false)}
                >
                  <img 
  className="notification-avatar-image"
  src={n.sender?.profilePhoto || '/default-avatar.png'}
  alt={n.sender?.name || 'User'} 
/>

                  <div className="notification-details">
                    <div className="notification-message">{getNotificationMessage(n)}</div>
                    <div className="notification-timestamp">
                      {new Date(n.createdAt).toLocaleString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                        day: 'numeric',
                        month: 'short'
                      })}
                    </div>
                  </div>
                  <button 
                    className="notification-delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteNotification(n._id);
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import './NotificationBell.css';

// const NotificationBell = ({ currentUser }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(0);

//   const fetchNotifications = useCallback(async () => {
//     if (!currentUser || !currentUser._id) return;

//     try {
//       const response = await axios.get(`/api/notifications/${currentUser._id}`);
//       const data = response.data || [];
//       setNotifications(data);
//       setUnreadCount(data.filter(n => !n.read).length);
//     } catch (error) {
//       console.error('Error fetching notifications:', error.message || error);
//     }
//   }, [currentUser]);

//   const markAllAsRead = useCallback(async () => {
//     if (!currentUser || !currentUser._id) return;

//     try {
//       await axios.put(`/api/notifications/read/${currentUser._id}`);
//       setNotifications(prev => prev.map(n => ({ ...n, read: true })));
//       setUnreadCount(0);
//     } catch (error) {
//       console.error('Error marking notifications as read:', error.message || error);
//     }
//   }, [currentUser]);

//   const handleBellClick = () => {
//     setShowNotifications(prev => !prev);
//     if (!showNotifications && unreadCount > 0) {
//       markAllAsRead();
//     }
//   };

//   const handleDeleteNotification = async (id) => {
//     try {
//       await axios.delete(`/api/notifications/${id}`);
//       setNotifications(prev => prev.filter(n => n._id !== id));
//       setUnreadCount(prevCount => prevCount - 1);
//     } catch (error) {
//       console.error('Error deleting notification:', error.message || error);
//     }
//   };

//   const getNotificationMessage = (notification) => {
//     if (!notification || !notification.type) return 'Notification';
  
//     const senderName = notification.sender?.name || 'Someone';
  
//     switch (notification.type) {
//       case 'like_comment':
//         return `${senderName} liked your comment`;
//       case 'reply':
//         return `${senderName} replied to your ${notification.commentId ? 'comment' : 'reply'}`;
//       case 'reaction':
//         return `${senderName} reacted to your ${notification.commentId ? 'comment' : 'reply'}`;
//       default:
//         return 'You have a new notification';
//     }
//   };

//   useEffect(() => {
//     if (currentUser && currentUser._id) {
//       fetchNotifications();
//       const interval = setInterval(fetchNotifications, 30000); // Fetch notifications every 30 seconds
//       return () => clearInterval(interval);
//     }
//   }, [currentUser, fetchNotifications]);

//   // Handle Like Comment action
//   const handleLikeComment = async (commentId) => {
//     if (!currentUser || !currentUser._id) return;
  
//     try {
//       // Step 1: Like the comment by sending a POST request to backend
//       await axios.post(`/api/likes/${commentId}`, { userId: currentUser._id });
  
//       // Step 2: Create a notification for the like (send a POST request to backend)
//       const notificationResponse = await axios.post(`/api/notifications`, {
//         userId: currentUser._id,
//         type: 'like_comment',
//         commentId,
//         sender: { name: currentUser.name, profilePhoto: currentUser.profilePhoto },
//       });
  
//       // Step 3: Fetch updated notifications to show the new one
//       fetchNotifications();
//     } catch (error) {
//       console.error('Error liking comment or creating notification:', error.message || error);
//     }
//   };
  

//   return (
//     <div className="notification-bell-wrapper">
//       <div 
//         className={`notification-bell-icon ${unreadCount > 0 ? 'has-unread' : ''}`}
//         onClick={handleBellClick}
//       >
//         🔔
//         {unreadCount > 0 && <span className="notification-bell-count">{unreadCount}</span>}
//       </div>

//       {showNotifications && (
//         <div className="notification-panel">
//           <div className="notification-panel-header">
//             <h4>Notifications</h4>
//             <button 
//               className="notification-clear-btn"
//               onClick={() => {
//                 setNotifications([]);  // Clear notifications
//                 setUnreadCount(0);      // Reset unread count
//               }}
//             >
//               Clear All
//             </button>
//           </div>

//           {notifications.length === 0 ? (
//             <div className="notification-empty-message">No notifications yet.</div>
//           ) : (
//             <div className="notification-list">
//               {notifications.map((n) => (
//                 <div 
//                   key={n._id} 
//                   className={`notification-item ${!n.read ? 'notification-unread' : ''}`}
//                   onClick={() => setShowNotifications(false)}
//                 >
//                   <img 
//                     className="notification-avatar-image"
//                     src={n.sender?.profilePhoto || '/default-avatar.png'}
//                     alt={n.sender?.name || 'User'} 
//                   />

//                   <div className="notification-details">
//                     <div className="notification-message">{getNotificationMessage(n)}</div>
//                     <div className="notification-timestamp">
//                       {new Date(n.createdAt).toLocaleString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: true,
//                         day: 'numeric',
//                         month: 'short'
//                       })}
//                     </div>
//                   </div>
//                   <button 
//                     className="notification-delete-btn"
//                     onClick={(e) => {
//                       e.stopPropagation();  // Prevent panel from closing when deleting
//                       handleDeleteNotification(n._id);
//                     }}
//                   >
//                     ×
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationBell;
