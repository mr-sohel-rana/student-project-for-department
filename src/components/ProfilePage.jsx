import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const book = location.state?.book;

  if (!book) return <div>No profile data available</div>;

  const { name, img, roll, address, chamber, institution, bio, batch } = book;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">{name}'s Profile</h2>
        
        {/* Displaying the image */}
        <div className="flex justify-center mb-4">
          <img src={img} alt={`${name}'s profile`} className="w-32 h-32 object-cover rounded-full border-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Details</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Roll:</strong> {roll}</p>
          <p><strong>Batch:</strong> {batch}</p>
          <p><strong>Institution:</strong> {institution}</p>
          <p><strong>Chamber District:</strong> {chamber}</p>
          <p><strong>Bio:</strong> {bio}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
