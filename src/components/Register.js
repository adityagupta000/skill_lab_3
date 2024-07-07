import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  return (
    <div className="container ">
      <div className="container p-5 my-5 d-flex flex-column border border-dark rounded" style={{ maxWidth: '900px' }}>
        <ul className="nav nav-pills mb-3 justify-content-center">
          <li className="nav-item">
            <h3> Register to book-library</h3>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <form>
              <div className="form-group p-2">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" placeholder="Name" />
              </div>

              <div className="form-group p-2">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="email" id="email" placeholder=" Email" />
              </div>

              <div className="form-group p-2">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" placeholder="Password" />
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsAgreement" />
                <label className="form-check-label" htmlFor="termsAgreement">
                  I have read and agree to the terms
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary" style={{ width: '200px' }}>Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
