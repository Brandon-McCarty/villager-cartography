import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// get all worlds for current user
function* getWorlds () {
    try {
        const worlds = yield axios.get('/worlds');
        console.log(worlds.data);
        yield put({type: 'SET_WORLDS', payload: worlds.data});
    } catch (err) {
        console.log(err);
    }
}

// Post a new world
function* addNewWorld (action) {
    try {
        yield axios.post('/worlds', action.payload);
        yield put({type: 'GET_WORLDS'});
    } catch (err) {
        console.log(err);
    }
}

// Delete the world and all information tied to it
function* deleteWorld (action) {
    try {
        yield axios.delete(`/worlds/${action.payload.id}`, {data: action.payload});
        yield put({type: 'GET_WORLDS'});
    } catch (err) {
        console.log(err);
    }
}

// Join an existing world
function* joinWorld (action) {
    try {
        yield axios.post(`/worlds/join`, action.payload);
        yield put ({type: 'GET_WORLDS'});
    } catch (err) {
        console.log(err);
    }
}


// All sagas for /worlds route
function* worldsSaga () {
    yield takeEvery('GET_WORLDS', getWorlds);
    yield takeEvery('ADD_WORLD', addNewWorld);
    yield takeEvery('DELETE_WORLD', deleteWorld);
    yield takeEvery('JOIN_WORLD', joinWorld)
}

export default worldsSaga;