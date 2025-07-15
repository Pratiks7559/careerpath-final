// src/components/SessionTimeout.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './timeout.css';

const SessionTimeout = ({ timeout = 20 * 60 * 1000 }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(timeout);
  const [alertShown, setAlertShown] = useState(false); // prevent multiple alerts

  useEffect(() => {
    const sessionStart = Date.now();
    localStorage.setItem('sessionStart', sessionStart);

    const endTime = sessionStart + timeout;

    const updateTimer = () => {
      const now = Date.now();
      const remaining = endTime - now;

      if (remaining <= 0) {
        localStorage.clear();

        Swal.fire({
          icon: 'warning',
          title: 'Session Expired',
          text: 'You have been logged out due to 20 minutes of inactivity.',
          confirmButtonText: 'Login Again',
          allowOutsideClick: false,
        }).then(() => {
          navigate('/login');
        });
      } else {
        setTimeLeft(remaining);

        if (remaining <= 60000 && !alertShown) {
          Swal.fire({
            icon: 'info',
            title: 'Session Ending Soon',
            text: 'Your session will expire in less than a minute!',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          setAlertShown(true);
        }
      }
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [navigate, timeout, alertShown]);

  const formatTime = (ms) => {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="session-timer">
      ⏳ Auto logout in <strong>{formatTime(timeLeft)}</strong>
    </div>
  );
};

export default SessionTimeout;
