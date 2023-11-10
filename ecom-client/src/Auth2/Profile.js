import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const Profile = () => {
  const { user, logout } = useAuth(); // Get the user and logout function from useAuth
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log("Profile component rendering...");
    console.log("User from useAuth:", user);

    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5023/profile', {
          headers: { Authorization: `Bearer ${user.token}` }
        });

        setProfile(response.data.user);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    if (user) {
      console.log('fetching profile...');
      fetchProfile();
    }
  }, [user]);

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
  };

  if (!profile) {
    return <p> Not Fetching ......</p>;
  }

  return (
    <div>
      <h2>Welcome, {profile.username}!</h2>
      <p>Username: {profile.username}</p>
      {/* Display other user details */}
      <button onClick={handleLogout}>Logout</button> {/* Add the logout button */}
    </div>
  );
};

export default Profile;
