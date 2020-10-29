import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

function RenderItem(){
  return (
      <Card title="Welcome to StJo Farm" wrapperStyle={{margin: 10}}>
          <View style={Styles.infoCard}>
              <Image
                  source={require('../assets/images/home.jpg')}
                  style={{width: 290, height: 150}}
              />
              <Text>Versailles, KY 40383-9328</Text>
          </View>
      </Card>
  );
}

class Home extends Component{
  static navigationOptions = {
    title: 'Home'
  }

  render(){
    return(
      <View>
        <RenderItem />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  lineBreak: {
      marginBottom: 20
  },
  cardWrapper: {
      margin: 20
  },
  infoCard: {
      paddingLeft: 10
  }
});

export default Home;
