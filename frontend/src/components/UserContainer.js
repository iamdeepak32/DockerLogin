import React from 'react';

const UserContainer = ({ user }) => {
    return (
        <div className="user-container border p-4 m-2 rounded shadow">
            <h3>User Information</h3>
            <p><strong>Unique ID:</strong> {user.id}</p>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Address:</strong> {user.address}</p>
        </div>
    );
};

export default UserContainer;