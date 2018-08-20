// For updating email, password, username and stored in the redux store
export const updateEmail = (email) => {
  return {type: "UPDATE_EMAIL", email};
};

export const updatePassword = (password) => {
  return {type: "UPDATE_PASSWORD", password};
};

export const updateUsername = (username) => {
  return {type: "UPDATE_USERNAME", username};
};

// For trigger login api from the view
export const doLogin = (username, password) => {
  return {type: "LOGIN_SUBMITTED", username, password};
};

// Check login api reponse
export const loginSuccessful = (username, success) => {
  return {type: "LOGIN_SUCCESSFUL", username, success};
};

export const loginFailed = (fail) => {
  return {type: "LOGIN_FAILED", fail};
};

// Triggered by reset button, clear information
export const resetLoginStatus = () => {
  return {type: "RESET_LOGIN_STATUS"};
};

// Checking password consistancy in new user creation
export const confirmPassword = (confirmPassword) => {
  return {type: "CONFIRM_PASSWORD", confirmPassword};
};


// Triggered by signup button from the view
export const createNewUser = (username, email, password) => {
  return {type: "CREATE_NEW_USER", username, email, password};
};

// Check new user creation status
export const createNewUserSuccessful = (createUserStatus) => {
  return {type: "CREATE_NEW_USER_SUCCESSFUL", createUserStatus};
};

// Check Signup error message
// Whether for the existed username or password
// No need for login => this may result in easier hanking information
export const returnSignUpErrorMessage = (errorSignupMessage) => {
  return {type: "RETURE_SIGN_UP_ERROR_MESSAGE", errorSignupMessage};
};
