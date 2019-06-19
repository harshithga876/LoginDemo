import {
    call,
    takeEvery,
} from 'redux-saga/effects';
import {Alert} from "react-native";
import {DUMMY} from "./constant";
import {dummy} from "./dummyAction";

interface ISignInAction {
    type: string;
    payload: {
        email: string,
        password: string,
    };
}

export function* signInJob(signInAction: ISignInAction): any {
    const response: any = yield call(dummy);
}

export function* watchDummyActions(): any {
    yield takeEvery(DUMMY, signInJob);
}
