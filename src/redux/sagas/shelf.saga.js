import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


function* fetchShelf(action) {
    try {
        const shelfItems = yield axios.get('/api/shelf');
        yield put({ type: 'SET_SHELF', payload: shelfItems.data})
    } catch (error) {
        console.log('unable to retrieve shelf items:', error);
    }
}

function* shelfSaga() {
   yield takeLatest('FETCH_SHELF', fetchShelf);
}

export default shelfSaga;
