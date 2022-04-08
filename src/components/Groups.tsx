import React, { useState, useContext } from 'react';
import NotyfContext from '../context/NotyfContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import SingleGroup from './SingleGroup';

// TODO: dodawanie i wyciaganie przez graphqla, rollowanie, potwierdzanie usuniecia, otwarcie grupy

const Groups: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Groups;
