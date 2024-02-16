

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UploadDocuments = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the file upload logic here
    alert('Document submitted!'); // Placeholder action
  };

  return (
    <>

      {/* Navigation Bar */}
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

      {/* Main Section containing Sidebar and Content */}
      <div className="main-section" style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>
        {/* Sidebar */}
        <div className="sidebar" style={{ backgroundColor: 'grey', height: '100%', width: '250px' }}>
          <div className="sidebar-item">Dashboard</div>
          <div className="sidebar-item">Uploads</div>
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Logout</div>
        </div>

        {/* Main Content */}
        <div className="main-content" style={{ flex: 1 }}>
          {/* Document Upload Form */}
          <div className="container mt-4">
            <h1 className="mb-3 text-center">Upload Documents</h1>
            <p className="text-center">Please upload your documents below.</p>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
              <input type="file" className="form-control mb-3" />
              <button  type="submit" className="btn btn-primary">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadDocuments;
