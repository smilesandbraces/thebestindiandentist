import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1>Expert Orthodontic & Dental Care</h1>
        <p>Over 15 years of excellence by Dr Vikramjeet Singh</p>
        <Link to="/contact" className="btn btn-primary">Book Appointment</Link>
      </div>
      <div className="row">
        <div className="col-md-4"><h4>Braces & Aligners</h4></div>
        <div className="col-md-4"><h4>Dental Implants</h4></div>
        <div className="col-md-4"><h4>Root Canal</h4></div>
      </div>
    </div>
  );
}

export default Home;