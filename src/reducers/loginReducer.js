const initialState = {
  username: "",
  email: "",
  password: ""
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case "UPDATE_EMAIL":
      return {...state, email: action.email};

    case "UPDATE_PASSWORD":
      return {...state, password: action.password};

    case "LOGIN_SUCCESSFUL":
      return {...state, username: action.username};

    default:
      return state;
  }
}
