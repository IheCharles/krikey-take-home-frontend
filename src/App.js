import "./App.css";
import krikeyLogo from "./krikey_logo.png";
import chevronDownIcon from "./ChevronDownIcon.svg";
function App() {
  return (
    <>
      <nav className="navigation-bar">
        <img src={krikeyLogo} alt="Krikey Logo" className="navbar-logo" />
        <div className="nav-links">
          <div className="nav-item">
            How to Animate{" "}
            <img src={chevronDownIcon} alt="Expand" className="chevron-down" />
          </div>
          <div className="nav-item">
            Business{" "}
            <img src={chevronDownIcon} alt="Expand" className="chevron-down" />
          </div>
          <div className="nav-item">
            Education{" "}
            <img src={chevronDownIcon} alt="Expand" className="chevron-down" />
          </div>
          <div className="nav-item">
            Social Media{" "}
            <img src={chevronDownIcon} alt="Expand" className="chevron-down" />
          </div>
          <div className="nav-item">Pricing</div>
          <div className="nav-item">About Us</div>
        </div>
        <button className="nav-cta">Get Started</button>
      </nav>

      <div class="team-members-container">
        <div class="team-members-header">
          <span class="back-arrow">&larr;</span>
          <h2>You have 12 Team Members</h2>
        </div>
        <ul class="team-members-list">
          <li class="team-member">
            <img
              src="avatar.png"
              alt="Jenny Appleseed"
              class="member-avatar"
            ></img>
            <div class="member-info">
              <h3>Jenny Appleseed</h3>
              <p>jenny.appleseed@example.com</p>
            </div>
            <button class="remove-member-button">&times;</button>
          </li>
          <li class="team-member">
            <img
              src="avatar.png"
              alt="Jenny Appleseed"
              class="member-avatar"
            ></img>
            <div class="member-info">
              <h3>Jenny Appleseed</h3>
              <p>jenny.appleseed@example.com</p>
            </div>
            <button class="remove-member-button">&times;</button>
          </li>
          <li class="team-member">
            <img
              src="avatar.png"
              alt="Jenny Appleseed"
              class="member-avatar"
            ></img>
            <div class="member-info">
              <h3>Jenny Appleseed</h3>
              <p>jenny.appleseed@example.com</p>
            </div>
            <button class="remove-member-button">&times;</button>
          </li>
          <li class="team-member">
            <img
              src="avatar.png"
              alt="Jenny Appleseed"
              class="member-avatar"
            ></img>
            <div class="member-info">
              <h3>Jenny Appleseed</h3>
              <p>jenny.appleseed@example.com</p>
            </div>
            <button class="remove-member-button">&times;</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
