import React, { useState } from 'react';
import Logogoogle from "../../../assets/Vectorgoogle.png";
import axios from "axios";
import Style from "./index.module.css";
import { useAuth } from './autcontext';
import { Link, useNavigate } from 'react-router-dom';
import BasicTextFields from '../Ui/input';
import Circular from '../Ui/spin';

export default function Rightcomponenet() {
  const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
  const navigate = useNavigate();
  const [urname, setUrname] = useState('');
  const [spin , setspin] = useState("Create Account")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message , setmessage] = useState('') // message vide
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'urname') setUrname(value);
  };
  const handleSubmit = async (event) => {
    setspin(<Circular/>)
    event.preventDefault();
    try {
      const response = await axios.post('http://3.28.122.81:8000/Home', { email, password, urname });
      console.log(response);
      if (response.data.success === true) {
        const token = response.data.token;
        localStorage.setItem('jwt', token);
        setUserToken(token);
        navigate('/Infopage');
        setmessage('successful inscription !')
        console.log('successful inscription!');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error.response?.data);
      setmessage('inscription Error!')
      console.log('inscription Error !');
    }
  };

  return (
    <>
      <div className={Style.right}>
        <div className={Style.title}>
          <div className={Style.createtitle}>
          <p>{message}</p>
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
                  <button type="submit" className={Style.buttcreate}><p>{spin}</p></button>
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
