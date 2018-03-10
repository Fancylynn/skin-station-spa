import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";
import {loginSuccessful} from "../actions/loginAction";


function sendRequest(email, password) {
  return axios.get("http://api.fancylynn.com/skinstationspa/api/users/login",
    {
      params: {email: email, password: password}}
    );
}

function* checkLogin(action) {
  console.log(action);
  if(action !== undefined) {
    try {
      const response = yield call(sendRequest, action.email, action.password);
      yield put.response(loginSuccessful(response.username));
    } catch (e) {
      console.error("Fail to login");
    }
  }
}

function* loginAPI() {
  yield takeEvery("LOGIN_SUBMITTED", checkLogin);
}

export default loginAPI;
