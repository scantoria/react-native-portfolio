import React, { Component } from 'react';
import Home from './HomeComponent';
import SafeAreaView from 'react-native-safe-area-view';
import { View, Platform, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems, Draweritems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

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

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={StyleSheet.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.drawerHeader}>
          <View style={{flex: 1}}>
            <Image
              source={require('../assets/images/StJo_logo.jpg')}
              style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>StJo Farm</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#FFA500',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60
  },
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
  }
});

export default Main;
