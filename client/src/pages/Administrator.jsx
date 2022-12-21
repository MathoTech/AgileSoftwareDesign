import './Administrator.css';
import NavigationBar from '../components/navigationBar';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';
import Users from './users.json';

import { NotificationContainer, NotificationManager } from 'react-notifications';

class Notifications extends React.Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'accept':
                    NotificationManager.success('Info message');
                    break;
                case 'refuse':
                    NotificationManager.error('Success message');
                    break;
            }
        };
    };
};




const Administrator = () => {


    return (
        <div className="admin-container">
            <NavigationBar />
            <h1>STUDENTS LIST:</h1>
            <hr/>
            <div className="user-container">
                {Users.map(user => (
                    <div className="user-card">
                        <div className="left-side">
                            <img src="/icons/user.png" className="user-icon" />
                        </div>
                        <div className="rightside">
                            <div className="user-name">
                                {user.name}
                                </div>
                                <button type="submit" className="role-button">Check submitions</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Administrator;
