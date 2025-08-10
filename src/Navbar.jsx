import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="navbar-title">My Website</h2>
        <ul className="navbar-links">
          <li><a href="#" className="navbar-link">Home</a></li>
          <li><a href="#" className="navbar-link">About</a></li>
          <li><a href="#" className="navbar-link">Contact</a></li>
        </ul>
      </nav>

      <style>{`
        .navbar {
          padding: 10px;
          background-color: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-title {
          margin: 0;
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 15px;
          margin: 0;
          padding: 0;
        }

        .navbar-link {
          color: white;
          text-decoration: none;
        }

        .navbar-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
