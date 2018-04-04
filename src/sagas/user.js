import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {getUserProfileSuccess} from "../actions/userAction";

function userProfile(token) {
  return axios.get("http://api.fancylynn.com/skinstationspa/api/users/userprofile",
    {
      headers: {Authorization: token}}
  );
}

function* getUserInfo(action) {
  if(action !== undefined) {
    try {
      const curtToken = "Bearer " + action.token;
      const response = yield call(userProfile, curtToken);
      const {data} = response;
      yield put.resolve(getUserProfileSuccess(data));
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}

function* userAPI() {
  yield takeEvery("TRY_GET_USER_PROFILE", getUserInfo);
}

export default userAPI;
