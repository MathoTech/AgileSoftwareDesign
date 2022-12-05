import './Home.css';
import NavigationBar from '../components/navigationBar';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';

import { NotificationContainer, NotificationManager } from 'react-notifications';

export function StudentLogout() {
    localStorage.removeItem('studentLoginStatus')
    window.location.href = '/login';
    return (
        <div></div>
    );
}

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <button type="submit" onClick={StudentLogout} >Log out</button>
        </div>
      )
}

export default Dashboard;
