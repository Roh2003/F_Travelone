import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.status === 201) {
        // Navigate to login page after successful registration
        alert(data.message);
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during registration');
    }
  }
  return (
      <div style={styles.body}>
        <div style={styles.container}>
          <div style={styles.formSection}>
            <h1 style={styles.h1}>Sign Up</h1>
            <p style={styles.paragraph}>Secure Your Communications with Us</p>
            <form id="signupForm" onSubmit={handleSignUp}>
              <div style={styles.inputGroup}>
                <label htmlFor="name"></label>
                <i className="fa-solid fa-user" style={styles.icon}></i>
                <input
                  type="text"
                  id="name"
                  placeholder="username"
                  required
                  style={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="email"></label>
                <i className="fa-solid fa-envelope" style={styles.icon}></i>
                <input
                  type="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  required
                  style={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="password"></label>
                <i className="fa-solid fa-key" style={styles.icon}></i>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  maxLength="8"
                  required
                  style={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ul style={styles.passwordRequirements}>
                  <li>At least 8 characters</li>
                  <li>At least one number (0-9) or a symbol</li>
                  <li>Lowercase (a-z) and uppercase (A-Z)</li>
                </ul>
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="confirmPassword"></label>
                <i className="fa-solid fa-unlock-keyhole" style={styles.icon}></i>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Re-Type Password"
                  maxLength="8"
                  required
                  style={styles.input}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div style={styles.login}>
                <p style={styles.loginText}>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
              <div style={styles.socialLogin}>
                <div style={styles.button1}>
                  <button type="submit" style={styles.button}>
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div style={styles.imageSection}>
            <img src="images/style.png" alt="style" style={styles.image} />
          </div>
        </div>
      </div>
    );
  }
    
    


export default SignUp;



const styles = {
  body: {
    fontFamily: 'sans-serif',
    margin: '0',
    padding: '0',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '30px',
    boxShadow: '5px 5px 10px 5px rgba(0, 0, 0, 0.1)',
  },
  formSection: {
    width: '400px',
    padding: '40px',
  },
  h1: {
    fontSize: '30px',
    fontFamily: 'arial',
    textAlign: 'center',
    marginBottom: '20px',
  },
  paragraph: {
    marginLeft: '50px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  icon: {
    marginRight: '10px',
  },
  input: {
    width: '80%',
    padding: '10px',
    border: 'none',
    borderBottom: '1px solid black',
    borderRadius: '',
  },
  passwordRequirements: {
    listStyleType: 'none',
    fontSize: '12px',
    marginLeft: '14px',
    marginTop: '5px',
  },
  login: {
    fontSize: '13px',
  },
  socialLogin: {},
  button1: {},
  button: {
    height: '40px',
    width: '100px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'rgb(89, 83, 154)',
    marginLeft: '130px',
    marginTop: '50px',
    color: 'white',
    fontSize: '15px',
  },
  buttonHover: {
    backgroundColor: 'rgb(44, 34, 179)',
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '350px',
    height: '600px',
    borderRadius: '30px',
  },
};

// Correct exports
// export default  App1;
