import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getLocationDetails () {
    
}

function* detailsSaga () {
    yield takeEvery('GET_DETAILS', getLocationDetails)
}

export default detailsSaga;