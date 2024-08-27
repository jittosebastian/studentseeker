import './Edit.css';
import React, { useState } from 'react';

const Studygroups = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search study groups..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div>
        <button
          className="create-button"
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '70px',
          }}
          onClick={handleButtonClick}
        >
          Create Group
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <p>Create New Group</p>
            <input
              type="text"
              placeholder="Title"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Subject"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Description"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Members Limit"
              className="popup-input"
            />
            <input
              type="text"
              placeholder="Password"
              className="popup-input"
            />
            <button
              onClick={() => {
                // Add code to create a new group
                handlePopupClose();
              }}
              className="popup-button"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studygroups;