import React from 'react';
import { Background2, DisplayImage } from '../assets';
import './style.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="row">
        {/* Left Column with Display Image */}
        <div className="col-sm-12 col-md-12 col-lg-5 text-center" style={{ backgroundColor: '#2d85de', maxWidth: '100%'}}>
          <img src={ DisplayImage } alt="Display" className='sign-img' />
        </div>
        
        {/* Right Column with Login Form */}
        <div className="col-sm-12 col-md-12 col-lg-7" style={{ backgroundImage: `url(${Background2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <h2 className='mt-3 text-center'>Login</h2>
          <div className="forms">
            <form>
              {/* Email Input Field */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name='email'
                  className="form-control input mb-3"
                  id="exampleInputEmail1"
                  placeholder='Enter your email'
                />
              </div>
              
              {/* Password Input Field */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name='password'
                  className="form-control input mb-3"
                  id="exampleInputPassword1"
                  placeholder='Enter your password'
                />
              </div>
            </form>
            
            <center>
            {/* Login Button with Spinner */}
            <button className='button button-blue' style={{textAlign: 'center'}}>
              <div className="spinner-border spinner-border-sm text-light spin" role='status'>
                <span className='sr-only'></span>
              </div>
              Login
            </button>
            </center>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
