import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Box1 extends React.Component {
  render() {
    return (
      <View >
        {this.props.data.map((data, index) => (
          <View style={styles.others}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="notifications-circle"
                style={{
                  fontSize: 60,
                  marginLeft: 5,
                  color: '#fcf3ec'
                }} />
              <View>
                <Text style={{
                  fontWeight: '600',
                  marginLeft: data.ml1,
                  marginTop: 10,
                
                }} key={data.index}>{data.text1}</Text>
                <Text style={{
                  fontSize: 9,
                  marginLeft: data.ml2,
                  fontStyle: data.f2
                }}  key={data.index}>{data.text2}</Text>
                <Text style={{
                  marginLeft: data.ml3,
                  fontSize: 10,
                  color: '#7e7e7e',
                  marginBottom: 10,
                }} key={data.index} >{data.text3}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   container: {height: 40, backgroundColor: '#cbcccb'},
  others: {
    marginTop: 15,
    margin: 15,
    borderRadius: 15,
    elevation: 4,
    backgroundColor: '#ffffff',
    marginBottom: 3
  }
});
