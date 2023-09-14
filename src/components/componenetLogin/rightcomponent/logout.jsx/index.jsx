import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import classes from "./index.module.css"
const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      localStorage.removeItem('jwt');
      console.log('success logout')
      // Rediriger vers la page de connexion ou toute autre page appropriée après la déconnexion
      navigate('/Home'); // Remplacez '/login' par l'URL de la page de connexion
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };  
  return (
    <div>
      <button className={classes.buttlogout} onClick={handleLogout}><p>Logout</p></button>
    </div>
  );
};
export default Logout;
