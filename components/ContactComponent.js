import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

function RenderContact(){
    return (
        <Card title="Contact Information" wrapperStyle={{margin: 20}}>
            <View style={Styles.infoCard}>
                <Image
                    source={require('../assets/images/stjo_logo.jpg')}
                    style={{width: 200, height: 250}}
                />
                <Text>StJo Farm</Text>
                <Text>Versailles, KY 40383-9328</Text>
                <Text style={Styles.lineBreak}>U.S.A.</Text>
                <Text style={{fontWeight: "bold"}}>Mailing:</Text>
                <Text>StJo Farm</Text>
                <Text>P.O. BOX 35</Text>
                <Text>Keene, KY 40339-0035</Text>
            </View>
        </Card>
    );
}

class Contact extends Component{
  static navigationOptions = {
    title: 'Contact Us'
  }
  
  render(){
    return(
      <RenderContact />
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
        paddingLeft: 20
    }
});

export default Contact;
