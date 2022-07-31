import React from 'react'
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from 'yup';


const Signup = () => {
  const userForm = {
    username: "",
    email: "",
    contact: "",
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
  };



  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  });

  return (
    <div className="container cont">
      <div className="card c1">
        <div className="">
          <div className="row">
            <div className="col-md">
              <div className="signup-bg"></div>
            </div>
            <div className="col-md">
              <div className="my-card-body">
                <Formik 
                initialValues={userForm} onSubmit={userSubmit} validationSchema={SignupSchema}>
                  {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <form onSubmit={handleSubmit}>



                      <h3 className='text-center l1'>SignUp</h3>
                      <h6 className='text-muted text-center'>Welcome!</h6>


                      <TextField
                        label="Username"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                        helperText={touched.username? errors.username:''}
                        error={Boolean(errors.username && touched.username)}
                      />
                      <TextField
                        label="Email"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        helperText={touched.email? errors.email:''}
                        error={Boolean(errors.email && touched.email)}
                      />
                      <TextField
                        label="Contact"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="contact"
                        onChange={handleChange}
                        value={values.contact}
                      />
                      <TextField
                        label="Password"
                        variant="outlined"
                        className="w-100 mb-4"
                        id="password"
                        type='password'
                        onChange={handleChange}
                        value={values.password}
                        helperText={touched.password? errors.password:''}
                        error={Boolean(errors.password && touched.password)}
                      />


                      <Button type="Submit" variant="contained" className=" mt-4 w-100">Submit</Button>

                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup;