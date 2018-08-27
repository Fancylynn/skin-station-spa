const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: null,
  password: "",
  loginStatus: "",
  passwordConsistent: true,
  createUserStatus: "",
  errorSignupMessage: "",
  openLogoutPopupWindowStatus: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_EMAIL":
      return {...state, email: action.email};

    case "UPDATE_PASSWORD":
      return {...state, password: action.password};

    case "LOGIN_SUCCESSFUL":
      return {...state, username: action.username, loginStatus: action.success};

    case "LOGIN_FAILED":
      return {...state, loginStatus: action.fail};

    case "RESET_LOGIN_STATUS":
      return {...state, loginStatus: ""};

    case "UPDATE_USERNAME":
      return {...state, username: action.username};

    case "CONFIRM_PASSWORD":
      if (state.password !== action.confirmPassword) {
        return {...state, passwordConsistent: false};
      }
      return {...state, passwordConsistent: true};

    case "CREATE_NEW_USER_SUCCESSFUL":
      return {...state, createUserStatus: action.createUserStatus};

    case "GET_USER_PROFILE_SUCCESS":
      return {...state, username: action.profile.username};

    case "RETURE_SIGN_UP_ERROR_MESSAGE":
      if (action.errorSignupMessage.includes("email")) {
        return {
          ...state,
          errorSignupMessage: action.errorSignupMessage,
          createUserStatus: "email_fail"
        };
      }
      if (action.errorSignupMessage.includes("username")) {
        return {
          ...state,
          errorSignupMessage: action.errorSignupMessage,
          createUserStatus: "username_fail"
        };
      }
      return {...state, errorSignupMessage: action.errorSignupMessage};

    case "OPEN_LOGOUT_POPUP_WINDOW":
      return {...state, openLogoutPopupWindowStatus: action.openLogoutWindowOrNot};

    default:
      return state;
  }
}
