import React , {useState} from 'react'
import Ui from "./ui"
import axios from "axios"
import Style from "./index.module.css"
import { useAuth } from './autcontext';
import { Link, useNavigate } from 'react-router-dom';
export default function Rightcomponenet() {
    const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try { // send request to server
          const response = await axios.post('http://localhost:3002/Home', { email, password })
          console.log(response)
          if (response.data.success === true) {
            const token = response.data.token; // 'jwt' le clé de stockage
            localStorage.setItem('jwt',token); // Save the token in localStorage
            setUserToken(token); // with usAuth
            navigate('/Infopage');
            console.log('successfull inscription !')
          }
        }
          catch(error) {
              console.error('Erreur lors de la requête:', error.response?.data);
              console.log('inscription Error !')
            }
          }
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
        <div className={Style.inp}>
            <div className={Style.same}>Name</div>
            <Ui/>
        </div>
        <br/>
        <div className={Style.inp}>
        <div className={Style.same}>Email</div>
            <Ui type="email" name="email" value={email} onChange={handleChange}/>
        </div>
        <br/>
        <div className={Style.inp}>
        <div className={Style.same}>Password</div>
            <Ui type="password" name="password" value={password} onChange={handleChange}/>
        </div>
    <div className={Style.twobutton}>
        <button type="submit" className={Style.buttcreate}><p>Create Account</p></button>
        <button  className={Style.buttsignup}><p>Sign up with Google</p></button>
        </div>
        </form>
        </div> 
    </div>
    <div className={Style.haveaccount}>
        <div className={Style.lastAlready}>Already have an account?</div>
        <div className={Style.lastsignin}><Link to="/Signin">Sign in</Link></div>
    </div>
    </div>
    </>
  )
}
