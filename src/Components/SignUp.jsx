import React from 'react';
import { BackGround, DisplayImage2 } from '../assets';
import './style.css';

const SignUp = () => {
  return (
    <React.Fragment>
      <div className="row">
        {/* Left Column with Display Image */}
        <div className="col-sm-12 col-md-12 col-lg-5 text-center" style={{ backgroundColor: '#2d85de', height: '100vh', maxWidth: '100%'}}>
          <img src={ DisplayImage2 } alt="Display" className='sign-img mt-5' />
        </div>
        
        {/* Right Column with Login Form */}
        <div className="col-sm-12 col-md-12 col-lg-7" style={{ backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2 className='mt-3 text-center'>Register</h2>
          <div className="forms">
            <form>
              {/* Email Input Field */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="name"
                  name='name'
                  className="form-control input mb-3"
                  id="exampleInputName1"
                  placeholder='Enter name'
                />
              </div>
              
              {/* Password Input Field */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  name='email'
                  className="form-control input mb-3"
                  id="exampleInputEmail1"
                  placeholder='Enter email'
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
                  placeholder='Enter password'
                />
              </div>{/* Password Input Field */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  type="password"
                  name='password'
                  className="form-control input mb-3"
                  id="exampleInputPassword2"
                  placeholder='Confirm password'
                />
              </div>
            </form>
            
            <center>
            {/* Login Button with Spinner */}
            <button className='button button-blue' style={{textAlign: 'center'}}>
              <div className="spinner-border spinner-border-sm text-light spin" role='status'>
                <span className='sr-only'></span>
              </div>
              Create account
            </button>
            </center>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
