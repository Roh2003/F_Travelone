import React from 'react';
import { Link } from 'react-router-dom';
// import SignUp from "./Signup";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './HomePage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      console.log(email,password)
      const response = fetch('http://localhost:3001/login',{
        method: 'POST',
        body:{
          email: email,
          password: password
        },
      })
      const data = await response.json();

    } catch (error) {
      
    }
    

  }


  
  return (
    <>
      <div style={styles.body}>
        <div className='grid grid-cols-1 sm:grid-cols-2 bg-slate-300 rounded-[50px]'>
          <div className='flex justify-center items-center flex-col bg-slate-400 m-10 ml-24 rounded-lg '>
            <h1 className='text-4xl mb-5 font-serif '>Login</h1>
            <form id="signupForm" onSubmit={handleLogin}>
              <div className='flex justify-evenly items-center mb-3'>
                <label htmlFor="email"></label>
                <i className="fa-solid fa-envelope mr-3" ></i>
                <input type="email" id="email" placeholder="xyz@gmail.com" className='p-3 px-10 rounded-md  '  onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
              </div>
              <div className='flex justify-evenly items-center'>
                <label htmlFor="email"></label>
                <i className="fa-solid fa-envelope mr-3" ></i>
                <input type="email" id="password" placeholder="password" className='p-3 px-10 rounded-md  '  onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
              </div>

              <div style={styles.rememberMe}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me" style={styles.label}>Remember me</label>
              </div>

              <div style={styles.login}>
                <p style={styles.loginText}>
                  New User..? 
                  <Link to="/sign-up">Register</Link>
                </p>
              </div>

              <div style={styles.socialLogin}>
                <div>
                  <button type="submit" style={styles.button}>
                  
                    <Link to='/home' style={styles.buttonLink}>Login</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div  className='sm:block hidden'>
            <img src="images/login.png" alt="style" style={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  
  formSection: {
    width: '400px',
    padding: '40px',
  },
  h1: {
    textAlign: 'center',
    fontSize: '40px',
  },
  inputGroup: {
    marginBottom: '20px',
    marginLeft: '30px',
  },
  input: {
    width: '80%',
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid black',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '50px',
  },
  label: {
    fontSize: '15px',
    marginLeft: '10px',
  },
  login: {
    marginTop: '10px',
    marginLeft: '50px',
  },
  loginText: {
    fontSize: '15px',
  },
  socialLogin: {
    marginTop: '50px',
    textAlign: 'center',
  },
  button: {
    height: '40px',
    width: '100px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'rgb(89, 83, 154)',
    color: 'white',
    fontSize: '15px',
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'white',
  },
  
  image: {
    width: '500px',
    height: '500px',
  },
};
