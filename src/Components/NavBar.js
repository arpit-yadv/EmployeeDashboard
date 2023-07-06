import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary p-2 border rounded font-weight-bold" style={{fontSize: 18, fontWeight: 500}}>
      <a className="navbar-brand" href="/EmployeeDashboard/#/">
        <span style={{fontSize: 20}}>Segwise.ai</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link font-weight-bold"  href="/EmployeeDashboard/#/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold"  href="/EmployeeDashboard/#/salaryinsights">
              Salary Insights
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link "  href="/EmployeeDashboard/#/locationinsights">
              <span className="font-weight-bold" >Employee on Maps</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link"  href="/EmployeeDashboard/#/search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> Search
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;