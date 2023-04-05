import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import loginbg from "../style/images/loginbg.jpg";

export default function LoginScreen() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const loginUserReducer = useSelector((state) => state.loginUserReducer);
  const { loading, success, error } = loginUserReducer;

  function login(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  }

  useEffect(() => {
    if (localStorage.getItem("currentuser")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="Form my-5 pt-5 mx-5">
      <div className="container">
        <div className="row  loginrow no-gutters">
          <div className="col-lg-6">
            <img src={loginbg} className="img-fluid login-img" />
          </div>
          <div className="col-lg-6 mt-5">
            <h1 className="py-3 mt-5">Log In</h1>
            <h4>Sign in to your account</h4>
            <form onSubmit={login}>
              <div className="form-row justify-content-center">
                <div className="col-lg-7">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control my-4 p-4"
                    required
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="form-row justify-content-center">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="****"
                    className="form-control my-4 p-4"
                    required
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              {error && (
                <div className="form-row">
                  <div className="col-lg-7">
                    <Error error="Invalid Credentials"></Error>
                  </div>
                </div>
              )}

              {loading && <Loader></Loader>}

              <div className="form-row justify-content-center">
                <div className="col-lg-7">
                  <button type="submit" className="btn1 mt-3 mb-5">
                    Login
                  </button>
                </div>
              </div>
              <a href="#">Forgot password</a>
              <p>
                Don't have an account? <a href="/register">Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="row justify-content-center">
    //     <div className="col-md-4 card p-5" style={{ marginTop: "100px" }}>
    //       <div className="div">
    //         <h2>Login</h2>
    //         {error && <Error error="Invalid credentials" />}
    //         {loading && <Loader />}
    //         <form onSubmit={login}>
    //           <div className="form-group">
    //             <input
    //               type="email"
    //               className="form-control"
    //               required
    //               value={email}
    //               onChange={(e) => {
    //                 setemail(e.target.value);
    //               }}
    //               placeholder="Email"
    //             />
    //             <input
    //               type="text"
    //               className="form-control"
    //               required
    //               value={password}
    //               onChange={(e) => {
    //                 setpassword(e.target.value);
    //               }}
    //               placeholder="Password"
    //             />

    //             <div className="text-end">
    //               <button type="submit" className="btn mt-3">
    //                 Login
    //               </button>
    //             </div>
    //           </div>
    //         </form>
    //         <a href="register">CLick here to Register</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
