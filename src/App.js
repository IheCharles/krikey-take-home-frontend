import "./App.css";
import React, { useState, useEffect } from "react";
import krikeyLogo from "./krikey_logo.png";
import chevronDownIcon from "./ChevronDownIcon.svg";
import ArrowLeftIcon from "./ArrowLeftIcon.svg";
import coolcat from "./coolcat.png";
import { initializeApp } from "firebase/app";
function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDbaKNViVQCeALIU9yZlGTD3YT5wkqVWd8",
    authDomain: "krikey-take-home.firebaseapp.com",
    projectId: "krikey-take-home",
    storageBucket: "krikey-take-home.appspot.com",
    messagingSenderId: "891521789496",
    appId: "1:891521789496:web:ebf3a6087df41e085500cd",
  };
  const app = initializeApp(firebaseConfig);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch(
          "https://kirkey-take-home-4122bf1496ba.herokuapp.com/"
        );
        if (!response.ok) throw new Error("Data could not be fetched!");
        const data = await response.json();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <>
      <nav className="navigation-bar">
        <div className="nav-content">
          <img src={krikeyLogo} alt="Krikey Logo" className="navbar-logo" />
          <div className="nav-links">
            <div className="nav-item">
              How to Animate{" "}
              <img
                src={chevronDownIcon}
                alt="Expand"
                className="chevron-down"
              />
            </div>
            <div className="nav-item">
              Business{" "}
              <img
                src={chevronDownIcon}
                alt="Expand"
                className="chevron-down"
              />
            </div>
            <div className="nav-item">
              Education{" "}
              <img
                src={chevronDownIcon}
                alt="Expand"
                className="chevron-down"
              />
            </div>
            <div className="nav-item">
              Social Media{" "}
              <img
                src={chevronDownIcon}
                alt="Expand"
                className="chevron-down"
              />
            </div>
            <div className="nav-item">Pricing</div>
            <div className="nav-item">About Us</div>
          </div>
          <button className="get-started">Get Started</button>
        </div>
      </nav>

      <div class="members-container">
        <div class="members-header">
          <img src={ArrowLeftIcon} alt="Expand" className="back-arrow" />

          <h2 className="card-title">You have {authors.length} Team Members</h2>
        </div>
        <ul className="members-list">
          {authors.map((author, index) => (
            <li key={index} className="member">
              <img
                src={coolcat}
                alt="A cool cat"
                className="member-avatar"
              ></img>
              <div className="member-info">
                <h3>{author.author_name}</h3>
                <p>Total Revenue: ${author.total_revenue}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
