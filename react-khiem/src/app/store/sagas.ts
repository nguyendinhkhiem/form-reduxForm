import { fork } from 'redux-saga/effects';

const RootSaga = [].map(item => fork(item));

export default function* sagas() {
  yield [...RootSaga];
}
