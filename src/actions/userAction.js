export const tryGetUserProfile = (token) => {
  return {type: "TRY_GET_USER_PROFILE", token};
};

export const getUserProfileSuccess = (profile) => {
  return {type: "GET_USER_PROFILE_SUCCESS", profile};
};
