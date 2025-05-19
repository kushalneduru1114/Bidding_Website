import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';

const clientId = "976506540977-set2d5jaq33h0et515ja2rhjglil9h1f.apps.googleusercontent.com";
function NormalHeader() {

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS!, Current user: ", res.profileObj);  
  }
  const onFailure = (res) => {
    console.log("LOGIN FAILED");
  }

  return (
    <div>
    <div class="google">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login via BITS mail"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      
      />
    {/* </div>
    <div class="register"> */}
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link to="/user/register" class="nav-link active" aria-current="page">
          <b className="text-color">Register User</b>
        </Link>
      </li>
    </ul>
    </div>
    </div>
  );
};

export default NormalHeader;
