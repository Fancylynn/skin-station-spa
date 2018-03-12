import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {loginSuccessful, loginFailed} from "../actions/loginAction";
import {browserHistory} from "react-router";


function sendRequest(email, password) {
  return axios.get("http://api.fancylynn.com/skinstationspa/api/users/login",
    {
      params: {email: email, password: password}}
    );
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
      const response = yield call(sendRequest, action.email, action.password);
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

function* loginAPI() {
  yield takeEvery("LOGIN_SUBMITTED", checkLogin);
}

export default loginAPI;
