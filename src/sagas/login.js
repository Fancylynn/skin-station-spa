import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {
  loginSuccessful,
  loginFailed,
  createNewUserSuccessful,
  openLogoutPopupWindow,
  returnSignUpErrorMessage
} from "../actions/loginAction";
import {browserHistory} from "react-router";


// HTTP.GET login API
function sendLoginRequest(username, password) {
  return axios.get("http://api.fancylynn.com/skinstationspa/api/users/login",
    {
      params: {username: username, password: password}}
    );
}

// HTTP.POST signup API
function sendCreateNewUserRequest(username, email, password) {
  return axios.post("http://api.fancylynn.com/skinstationspa/api/users/signup",
    {username: username, email: email, password: password});
}

// HTTP.GET user profile API
function getUserProfile(token) {
  return axios.get("http://api.fancylynn.com/skinstationspa/api/users/userprofile",
    {
      headers: {Authorization: token}}
  );
}

// Delay duration
// Give more time for finishing api request and data process
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

// Deal with login api request and get response
function* checkLogin(action) {
  if(action !== undefined) {
    try {
      const response = yield call(sendLoginRequest, action.username, action.password);
      const {data} = response;
      localStorage.setItem("token", data.token);
      const curtToken = "Bearer " + data.token;
      const profileResponse = yield call(getUserProfile, curtToken);
      yield put.resolve(loginSuccessful(profileResponse.data.username, "success"));
      yield call(delay);
      browserHistory.push("/");
    } catch (e) {
      yield put.resolve(loginFailed("fail"));
      console.error("Fail to login");
    }
  }
}

// Deal with signup api request and get response
function* checkCreateNewUser(action) {
  if(action !== undefined) {
    try {
      yield call(sendCreateNewUserRequest, action.username, action.email, action.password);
      yield put.resolve(createNewUserSuccessful("success"));
      yield call(delay);
      const response = yield call(sendLoginRequest, action.username, action.password);
      const {data} = response;
      localStorage.setItem("token", data.token);
      const curtToken = "Bearer " + data.token;
      const profileResponse = yield call(getUserProfile, curtToken);
      yield put.resolve(loginSuccessful(profileResponse.data.username, "success"));
      browserHistory.push("/");
    } catch (e) {
      const errorMessage = e.response.data;
      console.log(errorMessage);
      yield put.resolve(returnSignUpErrorMessage(errorMessage));
      console.error("Fail to create new user");
    }
  }
}

// User log out
function* userLogout(action) {
  if (action !== undefined) {
    try {
      localStorage.removeItem("token");
      yield put.resolve(openLogoutPopupWindow(false));
      // browserHistory.push("/"); // back to homepage
      // window.location.reload(); // redux store will be cleared after refresh
      window.location.assign("/");
  } catch (e) {
      console.log(e);
    }
  }
}


function* loginAPI() {
  yield takeEvery("LOGIN_SUBMITTED", checkLogin);
  yield takeEvery("CREATE_NEW_USER", checkCreateNewUser);
  yield takeEvery("LOGOUT", userLogout);
}

export default loginAPI;
