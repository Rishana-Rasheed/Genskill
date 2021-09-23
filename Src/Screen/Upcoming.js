import React from "react";
import { Component } from 'react';
import { Text, Image, View, SafeAreaView, StatusBar, StyleSheet, Dimensions } from "react-native";

const Upcoming = ({ navigation }) => {
    return (
       <View style={styles.Container}>
            <StatusBar backgroundColor="#3d2137" barStyle="dark-content" />          
            <Image source={require("../../assets/Screenshot_2021_0908_062056.png")}
                    style={{  position: 'absolute', width: '80%', height: '60%', marginLeft: 40, marginTop: 50, marginBottom: 70 }} />
        </View>
       
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fffbf5',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    
});

export default Upcoming;