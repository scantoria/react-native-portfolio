import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from './HomeComponent';

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: '#FFA500'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: '#fff'
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator }

  },
  {
    drawerBackgroundColor: '#FFC04D'
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component{
  render(){
    return(
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
      }}>
        <AppNavigator />
      </View>
    );
  }
}

export default Main;
