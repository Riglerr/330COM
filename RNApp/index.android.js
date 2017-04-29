import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';


import CustomNavigator from './src/containers/CustomNavigator'
import Drawer from './src/components/Drawer'
import SplashView from './src/views/SplashView'

const baseRoutes = [
  {
    title: 'SplashView',
    index: 0,
    component: SplashView
  },
  {
    title: 'DrawerView',
    index: 1,
    component: Drawer,
    initial: true
  }
]

export default class RNApp extends Component {
  render() {
    return <CustomNavigator routes={baseRoutes} />
  }
}
AppRegistry.registerComponent('RNApp', () => RNApp);
