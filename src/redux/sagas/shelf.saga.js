import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addShelf(action){
    try {
        yield call(axios.post, '/api/shelf', action.payload);
        // enter put here that gets shelf displayed - yield put({type:'GET_SHELF'})
    } catch (err){ 
        console.log('Error adding new shelf item', err);
    }
}

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
   yield takeLatest('ADD_ITEM', addShelf);
}

export default shelfSaga;