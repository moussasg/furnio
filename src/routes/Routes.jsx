// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Infopage from '../pages/Infopage/index';
import Loginpage from '../pages/loginpage';

export default function MyRoutes() { // Renommez la fonction à l'intérieur du fichier
  return (
    <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path="/Infopage" element={<Infopage />} />
    </Routes>
  );
};
