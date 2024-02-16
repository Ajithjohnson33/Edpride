

import React from 'react';


const AddSchoolInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('School information submitted!'); // Placeholder action
  };

  return (
    // Adjust the container-fluid to fill at least the height of the viewport

<div className="container-fluid p-0" style={{ minHeight: '100vh' }}> 
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#800080' }}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{ color: 'white' }}><b>Edpride</b></a>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#" style={{ color: 'white' }}><b>Features</b></a>
          <a className="nav-link" href="/Templates" style={{ color: 'white' }}><b>Templates</b></a>
          <a className="nav-link" href="#" style={{ color: 'white' }}><b>Packages</b></a>
          <a className="nav-link" href="/register" style={{ color: 'white' }}><b>Register</b></a>
          <button className="btn btn-outline-dark ms-2" style={{ color: 'white', borderColor: 'white' }}>LOGIN</button>
        </div>
      </div>
    </div>
  </nav>

      <div className="row m-0" style={{ minHeight: '100vh' }}> {/* Remove default margins and ensure the row covers the viewport height */}
        {/* Sidebar with 100% height of the row */}
        <div className="col-md-3 p-0" style={{ backgroundColor: '#007bff', color: 'white' }}> {/* Remove padding */}
          <div className="p-4">
            <h5>Lorem Ipsun</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="col-md-9 p-4"> {/* Add padding here instead of on the sidebar */}
          <h1>Add School Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="schoolName" className="form-label">School Name</label>
              <input type="text" className="form-control" id="schoolName" name="schoolName" required />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" name="phone" required />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchoolInfo;

