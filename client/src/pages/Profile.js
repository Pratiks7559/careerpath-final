import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    highestEducation: '',
    profilePhoto: null,
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/profile', { withCredentials: true });
        setUser(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
          highestEducation: res.data.highestEducation,
          profilePhoto: null,
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    document.body.classList.add('acb');
    return () => {
      document.body.classList.remove('acb');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePhoto') {
      setFormData({ ...formData, profilePhoto: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (val) form.append(key, val);
      });

      const res = await axios.put('http://localhost:5000/api/user/update', form, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      Swal.fire('✅ Success', res.data.message || 'Profile updated successfully!', 'success');
    } catch (err) {
      console.error(err);
      Swal.fire('❌ Error', 'Failed to update profile.', 'error');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5000/api/user/change-password', passwordData, {
        withCredentials: true,
      });

      Swal.fire('✅ Success', res.data.message || 'Password changed successfully!', 'success');
      setPasswordData({ currentPassword: '', newPassword: '' });
    } catch (err) {
      console.error(err);
      Swal.fire('❌ Error', 'Failed to change password.', 'error');
    }
  };

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <h2 className='hh'>User Profile</h2>

      <div className="profile-card">
        <img
          src={`http://localhost:5000/${user.profilePhoto}`}
          alt={`${user.name}'s profile`}
          className="profile-img"
        />

        <form onSubmit={handleProfileUpdate} encType="multipart/form-data" className="update-form">
          <label>
            Profile Photo:
            <input type="file" name="profilePhoto" onChange={handleChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>
          <label>
            Education:
            <input
              type="text"
              name="highestEducation"
              value={formData.highestEducation}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className='btt'>Update Profile</button>
        </form>

        <hr />

        <form onSubmit={handlePasswordChange} className="password-form">
          <h3>Change Password</h3>
          <label>
            Current Password:
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
              required
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              required
            />
          </label>
          <button type="submit" className='btt'>Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
