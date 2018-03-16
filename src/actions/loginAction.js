export const updateEmail = (email) => {
  return {type: "UPDATE_EMAIL", email};
};

export const updatePassword = (password) => {
  return {type: "UPDATE_PASSWORD", password};
};

export const updateUsername = (username) => {
  return {type: "UPDATE_USERNAME", username};
};

export const doLogin = (email, password) => {
  return {type: "LOGIN_SUBMITTED", email, password};
};

export const loginSuccessful = (username, success) => {
  return {type: "LOGIN_SUCCESSFUL", username, success};
};

export const loginFailed = (fail) => {
  return {type: "LOGIN_FAILED", fail};
};

export const resetLoginStatus = () => {
  return {type: "RESET_LOGIN_STATUS"};
};

export const confirmPassword = (confirmPassword) => {
  return {type: "CONFIRM_PASSWORD", confirmPassword};
};

export const createNewUser = (username, email, password) => {
  return {type: "CREATE_NEW_USER", username, email, password};
};

export const createNewUserSuccessful = (createUserStatus) => {
  return {type: "CREATE_NEW_USER_SUCCESSFUL", createUserStatus};
};

export const createNewUserFail = () => {
  return {type: "CREATE_NEW_USER_FAIL"};
};
