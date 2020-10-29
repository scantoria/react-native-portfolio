import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

function Mission(){
    return(
        <Card title="Our Mission">
            <Text style={{margin: 10}}>
                Raise grass and grain fed cattle for meat and breed thoroughbred horses for 
                racing and private sales.
            </Text>
        </Card>
    );
}

function RenderAbout(){
    return (
        <Card wrapperStyle={{margin: 20}}>
            <View style={Styles.infoCard}>
                <Image
                    source={require('../assets/images/stjo_logo.jpg')}
                    style={{width: 270, height: 300}}
                />
                
            </View>
        </Card>
    );
}

class About extends Component{
  static navigationOptions = {
    title: 'About Us'
  }
  
  render(){
    return(
      <ScrollView>
          <RenderAbout />
          <Mission />

      </ScrollView>
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

export default About;
