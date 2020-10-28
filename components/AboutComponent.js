import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

function Mission(){
    return(
        <Card title="Our Mission">
            <Text style={{margin: 10}}>
                Raise grass and grain fed cattle for meat, breed thoroughbred horses for 
                racing and private sales, and chickens for eggs.
            </Text>
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
          <Mission />

      </ScrollView>
    );
  }
}

export default About;
