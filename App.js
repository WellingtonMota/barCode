import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routers from './src/navigation/Routers';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Routers />
    );
  }
}
