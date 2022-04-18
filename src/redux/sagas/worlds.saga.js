import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* getWorlds () {
    try {
        const worlds = yield axios.get('/worlds');
        console.log(worlds.data);
    } catch (err) {
        console.log(err);
    }
}

function* worldsSaga () {
    yield takeEvery('GET_WORLDS', getWorlds)
}

export default worldsSaga;