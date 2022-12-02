import './Home.css';
import NavigationBar from '../components/navigationBar';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-notifications/lib/notifications.css';

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




const Home = () => {


  return (
    <div className="Home">
        Redirectio to home
        {NotificationManager.success('Login success')}
    </div>
  );
}

export default Home;
