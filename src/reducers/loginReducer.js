const initialState = {
  username: "",
  email: "",
  password: "",
  loginStatus: "",
  passwordConsistent: "",
  createUserStatus: ""
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

    case "CREATE_NEW_USER_FAIL":
      return {...state, createUserStatus: action.createUserStatus};

    default:
      return state;
  }
}
