import { Button, TextField } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
    <div className="container cont">
      <div className="card">
        <div className="">
          <div className="row">
            <div className="col-md">
              <div className="signup-bg"></div>
            </div>
            <div className="col-md">
              <div className="my-card-body">
                <form>
                  <h3 className='text-center l1'>Login</h3>
                  <h6 className='text-muted text-center'>Welcome! Login to get amazing discounts and offers only for you</h6>

                  
                  <div className="form-floating mt-5">
                    
                    <input className="form-control" placeholder="Full Name" />
                    <label>Full Name</label>
                  </div>

                  <div className="form-floating mt-4">
                    <input className="form-control" placeholder="UserName" />
                    <label>Username</label>
                  </div>

                  <div className="form-floating mt-4">
                    {/* <TextField variant="outlined"className='w-100 mt-4' label="Password" type="password"></TextField> */}
                    <input className="form-control" placeholder="Password" />
                    <label>Password</label>
                  </div>
                  <div className='form-floating mt-2'>
                    <input type="checkbox" /> Remember Me
                    
                    

                  </div>

                  <button className="btn btn-outline-primary mt-3 btn1">Submit</button>
                  <Button className='w-100 mt-3' variant='contained' color='error'>
                    Submit
                  </Button>
                  
                </form>
                <div className='mt-4'>
                  <NavLink to="#"className='text-muted n1'> New User? </NavLink> 
                  <a href="Signup"className='s1'> Sign Up</a>
                  
                    
                  </div>
                  <div className='mt-2'>
                  <a href="#"className=' text-muted f1'> Forgot Password?</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Login;