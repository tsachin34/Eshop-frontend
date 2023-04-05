export const registerNewUserReducer = (state = {}, action) => {
  switch (action.type) {
    case " REGISTER_NEW_USER":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case "USER_REGISTER_FAILED":
      return {
        ...state,
        success: false,
        loading: false,
        error: "User Already Registered",
      };
    default:
      return state;
  }
};

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case " LOGIN_USER":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        success: false,
        loading: false,
        error: "Something went wrong",
      };
    case "USER_LOGOUT":
      return {
        ...state,
      };
    default:
      return state;
  }
};
