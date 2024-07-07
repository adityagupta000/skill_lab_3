import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="container mt-5">
      <div className="container p-3 my-5 d-flex flex-column border border-dark rounded" style={{ maxWidth: '700px' }}>
        <ul className="nav nav-pills mb-3 justify-content-center">
          <li className="nav-item">
            <h3>Login</h3>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="text-center mb-3">
            </div>
            <form>
              <div className="form-group">
                <input className="form-control mb-3" type="email" placeholder="Email address" id="email" />
              </div>
              <div className="form-group">
                <input className="form-control mb-3" type="password" placeholder="Password" id="password" />
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#!" className="mb-4">Forgot password?</a>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-danger mb-3">Sign in</button>
              </div>
            </form>
            <p className="text-center">Not a member? <a href="/register">Register</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
