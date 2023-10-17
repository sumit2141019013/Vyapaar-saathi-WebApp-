import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
        setLoading(true);
        setError(null);
        
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo.token) {
          setError('Token not found');
          setLoading(false);
          return;
        }
      
        const randomQueryParam = `?_=${Math.random()}`; // Unique query parameter to prevent caching
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
      
        try {
          const response = await axios.get(`/api/user/showProfile${randomQueryParam}`, config);
          setUserData(response.data); 
        } catch (error) {
          if (error.response) {
            
            setError(error.response.data.message); 
          } else if (error.request) {
            setError('No response from the server');
          } else {
            setError('Error processing the request');
          }
        } finally {
          setLoading(false);
        }
      };
    fetchUserData();
  }, []); 

  return (
    <>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div className="profile_sideleft">
        <div className='user_img'>
          <img  src={userData.pic} alt="server_fault" className="update_img" />
          </div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Work: {userData.work}</p>
          <p>Full Address: {userData.address}</p>
          <p>Pincode: {userData.pincode}</p>

        </div>
      )}
    
    </>
  );
};

export default UserProfile;
