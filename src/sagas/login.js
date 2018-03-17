import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {loginSuccessful, loginFailed, createNewUserSuccessful, createNewUserFail} from "../actions/loginAction";
import {browserHistory} from "react-router";


function sendLoginRequest(email, password) {
  return axios.get("http://api.fancylynn.com/skinstationspa/api/users/login",
    {
      params: {email: email, password: password}}
    );
}

function sendCreateNewUserRequest(username, email, password) {
  return axios.post("http://api.fancylynn.com/skinstationspa/api/users/signup",
    {username: username, email: email, password: password});
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

function* checkLogin(action) {
  if(action !== undefined) {
    try {
      const response = yield call(sendLoginRequest, action.email, action.password);
      const {data} = response;
      yield put.resolve(loginSuccessful(data.username, "success"));
      yield call(delay);
      browserHistory.push("/");
    } catch (e) {
      yield put.resolve(loginFailed("fail"));
      console.log(e);
      console.error("Fail to login");
    }
  }
}

function* checkCreateNewUser(action) {
  if(action !== undefined) {
    try {
      yield call(sendCreateNewUserRequest, action.username, action.email, action.password);
      yield put.resolve(createNewUserSuccessful("success"));
      yield call(delay);
      const response = yield call(sendLoginRequest, action.email, action.password);
      const {data} = response;
      yield put.resolve(loginSuccessful(data.username, "success"));
      browserHistory.push("/");
    } catch (e) {
      yield put.resolve(createNewUserSuccessful("fail"));
      console.error("Fail to create new user");
    }
  }
}

function* loginAPI() {
  yield takeEvery("LOGIN_SUBMITTED", checkLogin);
  yield takeEvery("CREATE_NEW_USER", checkCreateNewUser);
}

export default loginAPI;
