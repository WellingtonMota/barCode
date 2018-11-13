import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Main from '../Main';
import Camera from '../components/Camera';
import Results from '../components/Results';

const RootStack = createStackNavigator(
  {
    MainScreen: Main,
    CameraScreen: Camera,
    ResultsScreen: Results
  },
  {
    initialRouteName: 'MainScreen',
  }
);

export default class Routers extends React.Component {
  render() {
    return <RootStack />;
  }
}
