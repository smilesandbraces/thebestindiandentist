import React from 'react';

function InternationalPatients() {
  const plans = [
    { name: 'Basic', price: '$800', details: 'Includes consultation, basic cleaning, and X-rays.' },
    { name: 'Standard', price: '$1500', details: 'Basic + orthodontic assessment and aligner plan.' },
    { name: 'Premium', price: '$3000', details: 'All-inclusive: implants, orthodontics, and follow-up.' }
  ];

  return (
    <div className="container py-5">
      <h2>International Patients Portal</h2>
      <p>Affordable global plans to bring your smile to India.</p>
      <div className="row">
        {plans.map(plan => (
          <div key={plan.name} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">{plan.name} Plan</h5>
                <h6 className="card-subtitle mb-2 text-muted">{plan.price}</h6>
                <p className="card-text">{plan.details}</p>
                <a href="/contact" className="btn btn-primary">Enquire Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InternationalPatients;