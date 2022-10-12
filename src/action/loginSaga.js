// * 最终目的：通过redux的store.dispatch去修改状态
import {put, call, takeEvery} from 'redux-saga/effects'
import LoginService from "../service/LoginService";
import { LOGIN_FAILURE, LOGIN_SUCCESS, REQUEST, LOGIN_SAGA } from "./const";

// 调用异步 call fork
// put 修改状态，背后就是dispatch
// 做监听 take


// worker saga

function* loginHandle(action) {
  yield put({type: REQUEST})
  try {
    let res1 = yield call(LoginService.login, action.payload)
    let res2 = yield call(LoginService.getMoreUserInfo, res1)
    yield put({type: LOGIN_SUCCESS, payload: res2})
  } catch (err){
    yield put({type: LOGIN_FAILURE, payload: err}) 
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle)
}

export default loginSaga