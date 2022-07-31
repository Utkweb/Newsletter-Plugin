import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5001/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "Wellcome!!👌",
        text: "Enter a new World!!",
      });
      navigate("/home");
      const data = await res.json();
      sessionStorage.setItem("user", JSON.stringify(data));
    } else {
      console.log("Login error ");
      Swal.fire({
        icon: "error",
        title: "Try Again!!😒",
        text: "Check your email and password!!",
      });
    }

  };

  return (
    <div>
      <br />
      <h2 className="text-center">Sign In to your account</h2>

      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div classNameName="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary btn-floating mx-1"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        id="email"
                        className="form-control form-control-lg border"
                        placeholder="Enter a valid email address"
                      />
                      <label className="form-label">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        id="password"
                        className="form-control form-control-lg border"
                        placeholder="Enter password"
                      />
                      <label className="form-label">
                        Password
                      </label>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a to='/signup' className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2022. All rights reserved.
          </div>

          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
