import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getLocationDetails(action) {
    // Get the details for the chosen location
    try {
        const details = yield axios.get(`/details/${action.payload}`);
        yield put({ type: 'SET_DETAILS', payload: details.data[0] });
    } catch (err) {
        console.log(err);
    }
}

function* deleteLocation(action) {
    // Delete the location
    try {
        yield axios.delete(`/details/${action.payload.id}`)
        yield axios.get(`/locations/${action.payload.world_id}`)
    } catch (err) {
        console.log(err);
    }
}

function* detailsSaga() {
    yield takeEvery('GET_DETAILS', getLocationDetails)
    yield takeEvery('DELETE_LOCATION', deleteLocation)
}

export default detailsSaga;