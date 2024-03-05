import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import UserList from './UserList';
import DesignsList from './DesignsList';
import DesignForm from './DesignForm';

function Dashboard() {
  return ( 
      <div>
        <AdminNavbar/>
        <Routes>
    
        <Route path="/userlist" element={<UserList />} />
        <Route path="/Designslist" element={<DesignsList />} />
        <Route path="/DesignForm" element={<DesignForm />} />

        </Routes>
      </div>
  );
}

export default Dashboard;



