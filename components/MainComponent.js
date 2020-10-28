import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import SafeAreaView from 'react-native-safe-area-view';
import { View, Platform, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
          backgroundColor: '#FFA500'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: 'blue'
      },
      headerLeft: <Icon
        name='home'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
          backgroundColor: '#FFA500'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: 'blue'
      },
      headerLeft: <Icon
        name='info-circle'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
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
              source={require('../assets/images/stjo_logo.jpg')}
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
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    About: { 
      screen: AboutNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#FFC04D',
    contentComponent: CustomDrawerContentComponent
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
    backgroundColor: '#fff',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: '#ffa500',
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
    color: 'blue',
    fontSize: 24
  }
});

export default Main;
