import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './LoginDemo.css';

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
        title: "Welcome!!👌",
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
    <section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style="width: 185px;" alt="logo"/>
                  <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>
                <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={userSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <label className="form-label" for="form1Example13">
                    Email address
                  </label>
                </div>
                <p>Please login to your account</p>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    value={values.password}
                    onChange={handleChange}
                    
                  />
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
                )}
                </Formik>
                {/* <form>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" />
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                      in</button>
                    <a class="text-muted" href="#!">Forgot password?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger">Create new</button>
                  </div>

                </form> */}

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
};

export default Login;
