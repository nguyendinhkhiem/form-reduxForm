import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as _ from 'lodash/core';
import store from './app/store';
import { Provider } from 'react-redux';
import TestComponent from './app/components/TestComponent/TestComponent';

interface OptionInterface {}

export class TestModule {
  constructor(el, options?: OptionInterface) {
    ReactDOM.render(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
      el
    );
  }
}
