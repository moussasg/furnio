import React, { useState } from 'react';
import Ui from "./ui";
import Logogoogle from "../../../assets/Vectorgoogle.png";
import axios from "axios";
import Style from "./index.module.css";
import { useAuth } from './autcontext';
import { Link, useNavigate } from 'react-router-dom';
import BasicTextFields from './ui';

export default function Rightcomponenet() {
  const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
  const navigate = useNavigate();
  const [urname, setUrname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'urname') setUrname(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/Home', { email, password, urname });
      console.log(response);
      if (response.data.success === true) {
        const token = response.data.token;
        localStorage.setItem('jwt', token);
        setUserToken(token);
        navigate('/Infopage');
        console.log('successful inscription!');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error.response?.data);
      console.log('inscription Error !');
    }
  };

  return (
    <>
      <div className={Style.right}>
        <div className={Style.title}>
          <div className={Style.createtitle}>
            <div className={Style.createac}>Create an account</div>
            <div className={Style.letsget}>Let’s get started with your 30 days free trial</div>
          </div>
        </div>
        <div className={Style.register}>
          <div>
            <form onSubmit={handleSubmit}>
              <br />
              <div className={Style.inp}>
                <div className={Style.same}>Name</div>
                <BasicTextFields name="urname" value={urname} onChange={handleChange} />
              </div>
              <br />
              <div className={Style.inp}>
                <div className={Style.same}>Email</div>
                <BasicTextFields name="email" value={email} onChange={handleChange} />
              </div>
              <br />
              <div className={Style.inp}>
                <div className={Style.same}>Password</div>
                <BasicTextFields type='password' name="password" value={password} onChange={handleChange} />
              </div>
              <br />
              <br />
                <div className={Style.twobutton}>
                  <button type="submit" className={Style.buttcreate}><p>Create Account</p></button>
                  <button className={Style.buttsignup}><div className={Style.logotext}><img src={Logogoogle} alt="Google Logo" /><div>Sign up with Google</div></div></button>
                </div>
            </form>
            <br/>
          </div>
          <div className={Style.haveaccount}>
            <div className={Style.lastAlready}>Already have an account?</div>
            <div className={Style.lastsignin}><Link to="/Signin">Sign in</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}
