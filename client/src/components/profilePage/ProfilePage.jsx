import React from 'react';
import './profilePage.css'
import profileImg from './profile-img.jpg';

const ProfilePage = () => {
    return(
        <div className="profile-page">
            <div className="profile-info">
                <div className="profile-img">
                    <img src={profileImg} alt="profile" />
                </div>
                <div className="profile-details">
                    <h2>Will Smith</h2>
                    <div className="person">
                        <ul>
                            <li>Date of Dirth: 25 Sep 1968</li>
                            <li>Place: Philadelphia USA</li>
                            <li>Who is: Actor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage