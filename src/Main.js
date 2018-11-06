import React, { Component } from 'react';
import {
  Container
} from 'native-base';
import Camera from './components/Camera';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Camera />
      </Container>
    );
  }
}
