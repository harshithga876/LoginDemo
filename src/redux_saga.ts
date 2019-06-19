import {all} from 'redux-saga/effects';
import {watchDummyActions} from './dummy_saga';

export default function* rootSaga(): any {
    yield all([
        watchDummyActions(),
    ]);
}
