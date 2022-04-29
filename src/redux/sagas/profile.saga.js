import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getUserMadeWorlds() {
    try {
        const worlds = yield axios.get('/profile')
        yield put({ type: 'SET_USER_WORLDS', payload: worlds.data })
    } catch (err) {
        console.log(err);
    }
};



function* profileSaga() {
    yield takeEvery('GET_USER_WORLDS', getUserMadeWorlds)
};

export default profileSaga;