import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* getEditLocation(action) {
    try {
        // Use details get to retrieve location to edit
        const editDetails = yield axios.get(`/details/${action.payload}`)
        yield put({ type: 'SET_EDIT_LOCATION', payload: editDetails.data[0] })
    } catch (err) {
        console.log(err);

    }
}

function* updateLocation(action) {
    // Submit the edited information to the server and database
    try {
        console.log(action.payload)
        yield axios.put(`/edit/${action.payload.id}`, action.payload)
        yield put({ type: 'GET_LOCATIONS', payload: action.payload.world_id })
    } catch (err) {
        console.log(err);
    }
}


function* editSaga() {
    yield takeEvery('GET_EDIT_LOCATION', getEditLocation)
    yield takeEvery('UPDATE_LOCATION', updateLocation)
}

export default editSaga;