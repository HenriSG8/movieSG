import DOMPurify from 'dompurify';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

import './css/login.css';

const sanitizeEmail = (email) => DOMPurify.sanitize(email);

const Login = () => {
  

  const [state, setState] = useState({
    email: '',
    password: '',
    message: '',
  });

  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const cleanedEmail = sanitizeEmail(state.email);

    const formData = new FormData();
    formData.append('email', cleanedEmail);
    formData.append('password', state.password);

    try {
      const response = await axios.post('http://localhost:3000/user/signIn', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { access_token: token, email, id } = response.data;
      const cookieData = {
        access_token: token,
        email: email,
        id: id,
      };

      cookies.set('accessToken', JSON.stringify(cookieData), { path: '/' });
      setState({ ...state, message: 'User Logged In' });
      console.log('deu certo')
      navigate('/');
      window.location.reload();
    } catch (error) {
      setState({ ...state, message: 'Unauthorized. Please check your email or password!' });
    }
  };

  return (
    <div className={`Login_mainDiv`}>
      <div className='container' id="loginContainer">
        <div className="row justify-content-center">
          <div className="col-md-6" id="wrapper">
            <form onSubmit={handleFormSubmit}>
              <h2 id='LoginFormTitle' className="mb-5">Login</h2>
              <div className="mb-4">
                <input
                  className='login_inputField'
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={(e) => setState({ ...state, email: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <input
                  className='login_inputField'
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) => setState({ ...state, password: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary" id="submitBtn">
                Login
              </button>
            </form>
            {state.message && <p className="alert alert-info">{state.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
