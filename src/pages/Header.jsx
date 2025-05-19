import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.jpg";
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg custom-bg text-color">
        <div class="container-fluid text-color">
          <img
            src={logo}
            width="70"
            height="auto"
            class="d-inline-block align-top"
            alt=""
          />
          <Link to="/home" class="navbar-brand">
            <i>
              <b className="text-color">Whisper Bids</b>
            </i>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="header-button">About Us</b>
                </Link>
              </li>

              
            </ul>

            <div>
             <SearchBox />
           </div>

            <RoleNav />
          </div>

          


        </div>
      </nav>
    </div>
  );
};

export default Header;
