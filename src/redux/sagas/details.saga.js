import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getLocationDetails (action) {
    try {
        const details = yield axios.get(`/details/${action.payload}`);
        yield put ({type: 'SET_DETAILS', payload: details.data[0]});
    } catch (err) {
        console.log(err);       
    }
}



function* detailsSaga () {
    yield takeEvery('GET_DETAILS', getLocationDetails)
}

export default detailsSaga;