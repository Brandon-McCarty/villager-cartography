import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getEditLocation(action) {
    try {
        const editDetails = yield axios.get(`/details/${action.payload}`)
        yield put({ type: 'SET_EDIT_LOCATION', payload: editDetails.data[0] })
    } catch (err) {
        console.log(err);
        
    }
}


function* editSaga() {
    yield takeEvery('GET_EDIT_LOCATION', getEditLocation)
}

export default editSaga;