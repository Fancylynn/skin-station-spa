export const updateEmail = (email) => {
  return {type: "UPDATE_EMAIL", email};
};

export const updatePassword = (password) => {
  return {type: "UPDATE_PASSWORD", password};
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
