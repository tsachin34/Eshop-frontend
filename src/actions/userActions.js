import axios from "axios";

export const registerNewUser = (user) => (dispatch) => {
  dispatch({ type: "REGISTER_NEW_USER" });

  axios
    .post("/api/users/register", user)
    .then((res) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "USER_REGISTER_FAILED", payload: err });
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: "LOGIN_USER" });

  axios
    .post("/api/users/login", user)
    .then((res) => {
      dispatch({ type: "LOGIN_SUCCESS" });
      console.log(JSON.stringify(res.data));
      localStorage.setItem("currentuser", JSON.stringify(res.data));
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "LOGIN_FAILED", payload: err });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentuser");
  localStorage.removeItem("cartItems");

  dispatch({ type: "USER_LOGOUT" });
  window.location.href = "/login";
};
