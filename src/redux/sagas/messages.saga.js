import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getMessages (action) {
    try {
        const messages = yield axios.get(`/messages/${action.payload}`)
        yield put({type: 'SET_MESSAGES', payload: messages.data})
    } catch (err) {
        console.log(err);
    }
}






function* messageSaga () {
    yield takeEvery('GET_MESSAGES', getMessages)
}

export default messageSaga;