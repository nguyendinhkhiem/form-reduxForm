import * as React from 'react';
import  DemoForm  from './DemoForm';

export default class TestComponent extends React.Component {

  componentDidMount() {}

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return <DemoForm/>;
  }
}
