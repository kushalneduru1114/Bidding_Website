import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      console.log("result", result);
      result.json().then((res) => {
        console.log(res);

        if (res.responseCode === 0) {
          console.log("Got the success response");

          toast.success(res.responseMessage, {
          //  position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
           // pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate("/user/login", { state: res.user });
          }, 3000); // Redirect after 3 seconds
        } else {
          console.log("Didn't got success response");
          toast.error("Only BITS email ID is allowed", {
          //  position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
           // pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // setTimeout(() => {
          //   window.location.reload(true);
          // }, 1000); // Redirect after 3 seconds
        }
      });
    });
  };

  return (
    <div>
      <div class="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          class="card form-card border-color text-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 class="card-title">Register User</h5>
          </div>
          <div class="card-body">
            <form onSubmit={saveUser}>
              <div class="mb-3 text-color">
                <label for="role" class="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                >
                  <option value="0">Select Role</option>
                  <option value="Admin"> Seller </option>
                  <option value="Customer"> Buyer </option>
                  
                </select>
              </div>

              <div class="mb-3 text-color">
                <label for="title" class="form-label">
                  <b> First Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleUserInput}
                  value={user.firstName}
                />
              </div>
              <div class="mb-3 text-color">
                <label for="description" class="form-label">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleUserInput}
                  value={user.lastName}
                />
              </div>

              <div className="mb-3 text-color">
                <b>
                  <label className="form-label">BITS Email</label>
                </b>
                <input
                  type="email"
                  class="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={user.emailId}
                />
              </div>

              <div class="mb-3 mt-1">
                <label for="quantity" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={user.password}
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">
                  <b>Mobile No</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  onChange={handleUserInput}
                  value={user.phoneNo}
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">
                  <b>Hostel Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  name="city"
                  onChange={handleUserInput}
                  value={user.city}
                />
              </div>

              <input
                type="submit"
                class="btn bg-color custom-bg-text"
                value="Register User"
              />

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
