import React from 'react';
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-xl-10 col-lg-12 col-md-9">

          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">

              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Heartly Welcome!</h1>
                    </div>
                    <form className="user">

                      <div className="form-group">
                        <input type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..." />
                      </div>

                      <div className="form-group">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label" for="customCheck">Remember
                            Me</label>
                        </div>
                      </div>
                      <Link to="/portal/dashboard" className="btn btn-primary btn-user btn-block">
                        Login
                      </Link>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">Create an Account!</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login