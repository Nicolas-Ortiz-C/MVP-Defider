import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home_page';
import RecintosPage from '../pages/recintos_page';
import NavBar from './nav_bar';

export default function Layout() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="layout__page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recintos" element={<RecintosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}