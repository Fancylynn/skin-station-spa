export const updateEmail = (email) => {
  return {type: "UPDATE_EMAIL", email};
};

export const updatePassword = (password) => {
  return {type: "UPDATE_PASSWORD", password};
};

export const doLogin = (email, password) => {
  return {type: "LOGIN_SUBMITTED", email, password};
};

export const loginSuccessful = (username) => {
  return {type: "LOGIN_SUCCESSFUL", username};
};

export const loginFailed = () => {
  return {type: "LOGIN_FAILED"};
};
