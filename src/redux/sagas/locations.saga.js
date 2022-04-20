import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// get all locations for selected world
function* getLocations (action) {
    try {
        const locations = yield axios.get(`/locations/${action.payload}`);
        console.log('locations are', locations.data);
        yield put({type: 'SET_LOCATIONS', payload: locations.data})
    } catch (err) {
        console.log(err);
    }
}

// Post a new location
function* addNewLocation (action) {
    try {
        yield axios.post('/locations', action.payload)
        yield put({type: 'GET_LOCATIONS', payload: action.payload.world_id})
    } catch (err) {
        console.log(err);
    }
}

function* deleteLocation (action) {
    try {
        yield axios.delete(`/locations/${action.payload.id}`)
        yield axios.get(`/locations/${action.payload.world_id}`)
    } catch (err) {
        console.log(err);
    }
}

// All sagas for /locations route
function* locationsSaga () {
    yield takeEvery('GET_LOCATIONS', getLocations);
    yield takeEvery('ADD_LOCATION', addNewLocation);
    yield takeEvery('DELETE_LOCATION', deleteLocation)
}

export default locationsSaga;