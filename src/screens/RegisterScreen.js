import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Succes";

export default function RegisterScreen() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [cpassword, setcpassword] = useState("");
  const dispatch = useDispatch();
  const registerNewUserReducer = useSelector(
    (state) => state.registerNewUserReducer
  );
  const { error, loading, success } = registerNewUserReducer;
  function register(e) {
    e.preventDefault();
    if (password === cpassword) {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(registerNewUser(user));
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card p-5" style={{ marginTop: "100px" }}>
          <div className="div">
            <h2>Register</h2>
            {error && <Error error="User registered with given email" />}
            {loading && <Loader />}
            {success && <Success msg="User created successfully" />}
            <form onSubmit={register}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  placeholder="Name.."
                />
                <input
                  type="text"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="form-control"
                  required
                  value={cpassword}
                  onChange={(e) => {
                    setcpassword(e.target.value);
                  }}
                  placeholder="Confirm Password"
                />
                <div className="text-end">
                  <button type="submit" className="btn mt-3">
                    Register
                  </button>
                </div>
              </div>
            </form>
            <a href="login">CLick here to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
