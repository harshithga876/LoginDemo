import rootSaga from './redux_saga';
import reducer from './reducers';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Login from './MainScreen';

const Store = () => {
  /* ------------- redux Configuration ------------- */
  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));
  const createAppropriateStore = createStore;

  const store = createAppropriateStore(reducer, compose(...enhancers));

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  return store;
};

export default class App extends Component {
  public render() {
    return (
        <Provider store={Store()}>
            <Login />
        </Provider>
    );
  }
}
