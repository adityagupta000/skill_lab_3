import React from 'react';

const Footer = () => (
  <footer className="footer bg-black text-white">
    <div className="container">
      <div className="row p-4">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-3">book-library</h5>
          <p>
          Welcome to Book-library, your number one source for all things books. We're dedicated to providing you the best of books, with a focus on dependability, customer service, and uniqueness.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-3">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#!" className="text-white">Privacy Policy</a></li>
            <li><a href="#!" className="text-white">Terms of Service</a></li>
            <li><a href="" className="text-white">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-3">Follow Us</h5>
          <ul className="list-unstyled social-icons">
            <li><a href="https://www.facebook.com/" className="text-white"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://github.com/" className="text-white"><i className="fab fa-github"></i></a></li>
            <li><a href="https://twitter.com/" className="text-white"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/" className="text-white"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center py-3 bg-secondary">
      <p className="mb-0">&copy; {new Date().getFullYear()} book-library</p>
    </div>
  </footer>
);

export default Footer;
