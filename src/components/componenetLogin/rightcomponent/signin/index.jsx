import React , {useState} from 'react'
import axios from "axios"
import Style from "./index.module.css"
import { useAuth } from '../autcontext';
import { useNavigate } from 'react-router-dom';
import Leftcompoent from '../../leftcomponent/Leftcompoent';
import BasicTextFields from '../../Ui/input';
import Circular from '../../Ui/spin';
export default function Signin() {
    const { setUserToken } = useAuth(); // Destructure setUserToken from AuthContext
    const navigate = useNavigate()
    const [spin , setspin] = useState("Sign In")
    const [message , setmessage] = useState('') // message vide
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
      };
    const handleSubmit = async (event) => {
      setspin(<Circular/>)
        event.preventDefault();
        try { // send request to server
          const response = await axios.post('https://dev.doxycode.com/Signin', { email, password })
          if (response.data.success === true) {
            const token = response.data.token; // 'jwt' le clé de stockage
            localStorage.setItem('jwt',token); // Save the token in localStorage
            setUserToken(token); // with usAuth
            navigate('/Infopage');
            setmessage('successfull Signin!')
            console.log(response.data)
            console.log('successfull Signin !')
          }
        }
          catch(error) {
            setmessage('Signin Error!')
              console.error('Erreur lors de la requête:', error.response?.data);
              console.log('inscription Error !')
            }
          }
  return (
    <>
    <Leftcompoent/>
    <div className={Style.right}> 
    <div className={Style.title}>
    <p>{message}</p>
        <div className={Style.createtitle}>
           <div className={Style.createac}>Connect With Your account</div>
       <div className={Style.letsget}>Let’s get started with your 30 days free trial</div>
        </div>
    </div>
    <div className={Style.register}>
        <div>
        <form onSubmit={handleSubmit}>

        <br/>
        <div className={Style.inp}>
        <div className={Style.same}>
            Email
            </div>
            <BasicTextFields name="email" value={email} onChange={handleChange} />
        </div>
        <br/>
        <div className={Style.inp}>
        <div className={Style.same}>Password</div>
        <BasicTextFields type='password' name="password" value={password} onChange={handleChange} />
        </div>
        <br/>
        <div className={Style.twobutton}>
        <button type="submit" className={Style.buttcreate}><p>{spin}</p></button>
        </div>
        </form>
        </div> 
    </div>
    </div>
    </>
  )
}
