const initialState = {
  username: "",
  email: "",
  password: "",
  loginStatus: ""
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

    default:
      return state;
  }
}
