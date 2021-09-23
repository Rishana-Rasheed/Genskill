import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
{/*import { RENDER } from "ci-info";*/ }


import Notification from "./Src/Screen/Notification.js";
import Profile from "./Src/Screen/Profile.js";
import HomeScreen from "./Src/Screen/HomeScreen.js";
import Events from './Src/Screen/Events.js';
import Upcoming from './Src/Screen/Upcoming.js';
import Thismonth from './Src/Screen/Thismonth.js'


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';

const bottomTab = createBottomTabNavigator();
const stackTab = createStackNavigator();
const topTab = createMaterialTopTabNavigator();


function TopTabNavigation({ Navigation }) {
  return (
    <topTab.Navigator screenOptions={{tabBarStyle: { backgroundColor: '#532c49', }}}>
      <topTab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{tabBarActiveTintColor:'white', }} />
      <topTab.Screen
        name="This Month"
        component={Thismonth}
        options={{tabBarActiveTintColor:'white'}} />
    </topTab.Navigator>
  );
}


function TabNavigation({ navigation }) {
  return (
    <bottomTab.Navigator>

      <bottomTab.Screen
        options={{
          headerShown: false, tabBarActiveTintColor: '#ef8947', tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home-outline" size={30} color={'#ef8947'} />)
        }}
        name="Home"
        component={HomeScreen} />

      <bottomTab.Screen
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#ef8947',
          tabBarIcon: ({ focused, color, size }) =>
            <Ionicons name="notifications-outline" size={30} color={'#ef8947'} />
        }}
        name="Notification"
        component={Notification} />

      <bottomTab.Screen
        options={{headerShown: false,
          title: 'Available Events', headerTitleAlign: 'center', headerTintColor: 'white', tabBarActiveTintColor: '#ef8947',
          headerStyle: {
            backgroundColor: '#532c49'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="calendar-outline" size={30} color={'#ef8947'} />)
        }}
        name="Events"
        component={TopTabNavigation} />

    </bottomTab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <stackTab.Navigator initialRouteName="Home">
        <stackTab.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={TabNavigation} />

        <stackTab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Profile} />

      </stackTab.Navigator>

    </NavigationContainer>

  );
}
