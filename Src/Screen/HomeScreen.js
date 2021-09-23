import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, StatusBar} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Profile } from './Profile.js'


const HomeScreen = ({ navigation }) => {
  return (

    <SafeAreaView>
      <StatusBar backgroundColor="#3d2137" barStyle="dark-content" />
      <View style={{ backgroundColor: '#f1eee7', height: Dimensions.get('window').height, }}>

        <View style={{ flex: 1 }}>
          <ScrollView>

            <View style={styles.top}>
              <TouchableOpacity>
              <Ionicons name="reorder-three-outline" style={{ fontSize: 30, color: 'white', margin: 10 }} />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginBottom: 14, height: 32, width: 32, borderRadius: 5, marginLeft: 270, marginTop: 12, backgroundColor: 'white' }}
                onPress={() => navigation.navigate("Profile")}
      /*onPress = {() => Alert.alert("Touchable button")}*/>
                <Ionicons name="person-outline" style={{ fontSize: 16, color: '#ef8947', margin: 6, marginLeft: 8 }} />
              </TouchableOpacity>

            </View>


            <View style={styles.welcome}>

              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ marginTop: 15, marginLeft: 12, fontWeight: "bold", color: "black", fontSize: 25 }}> Hi Rishana,</Text>
                  <Text style={{ marginTop: 5, marginLeft: 12, fontWeight: "bold", color: "black", fontSize: 25 }}> Welcome to Genskill</Text>
                  <Image source={require("../../assets/Screenshot_2021_0829_144955.png")}
                    style={{ height: 70, width: 200, marginLeft: 15, marginTop: 5, marginBottom: 70 }} />
                </View>

                <View>
                  <Image source={require("../../assets/home2.jpg")}
                    style={{ width: 120, alignContent: 'flex-end', marginTop: 25, marginLeft: 10, height: 175, }} />
                </View>

              </View>




            </View>

            <View style={styles.referral}>
              <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginLeft: 12, marginTop: 15, fontSize: 21, fontWeight: "normal" }}>Complete Referral Now!</Text>
              <TouchableOpacity>
              <Ionicons name="close-outline" style={{marginTop: 15, fontSize: 30, color: '#f28744', marginLeft: 40}}/>
              </TouchableOpacity>
              </View>
              <Text style={{ marginTop: 10, marginLeft: 12, fontSize: 16, color: '#584f58' }}>Complete your <Text style={{ color: '#ef8947' }}>personal information</Text> and </Text>
              <Text style={{ marginLeft: 12, fontSize: 16, color: '#584f58' }}>get 2 premium quiz for free</Text>

              <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                <TouchableOpacity style={styles.button1}
                  onPress={() => navigation.navigate("Profile")}>

                  <Text style={{ color: 'white', marginTop: 8, fontSize: 15, fontWeight: '200' }}>Goto Profile</Text>

                </TouchableOpacity>
                <View>
                  <Text style={{ paddingLeft: 105, paddingTop: 20, fontSize: 12, color: '#7e7e7e', }}>27% complete</Text>
                  <View style={{ height: 3, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, width: 20, backgroundColor: '#522c49', marginLeft: 105 }}>
                    <View style={{ height: 3, width: 55, borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: '#f6b88f', marginLeft: 20 }}></View>
                  </View>
                </View>
              </View>

            </View>



            <View style={{ flex: 0.18, backgroundColor: '#ffffff', elevation: 4, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginRight: 15, marginLeft: 30, marginTop: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require("../../assets/Screenshot_2021_0829_150831.png")} style={{ marginTop: 15, marginLeft: -27, height: 58, width: 58 }} />
                <View>
                  <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 15, fontWeight: '600' }}>Get 12 months unlimited access to all</Text>
                  <Text style={{ marginTop: 3, marginLeft: 10, fontSize: 15, fontWeight: '600' }}>content on Genskill app </Text>
                </View>

              </View>
              <View style={{ backgroundColor: '#fcf1ef', width: 100, marginTop: -6, marginLeft: 40, marginBottom: 20, height: 18 }}>

                <Text style={{ color: '#ce9674', fontSize: 11, textAlign: 'center' }}>ADVERTISEMENT</Text>

              </View>

            </View>
            <View style={styles.adbox}>
              <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, color: 'white' }}>Gen<Text style={{ color: '#ef8947' }}>skill</Text></Text>
              <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#ef8947' }}>GET<Text style={{ color: 'white' }}> 12</Text> MONTH'S UNLIMITED ACCESS TO</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#ef8947' }}>ALL CONTENT ON GENSKILL APP</Text>
              <Text style={{ marginTop: 5, fontSize: 11, fontStyle: 'italic', fontWeight: '600', textAlign: 'center', color: 'white' }}>Subscribe now to the PREMIUM Plan and get access to</Text>
              <Text style={{ fontSize: 11, fontStyle: 'italic', fontWeight: '600', textAlign: 'center', color: 'white' }}>all Training Courses, Interview Prep Quizzes and</Text>
              <Text style={{ fontSize: 11, fontStyle: 'italic', fontWeight: '600', textAlign: 'center', color: 'white' }}>Placement Assistance</Text>
              <View style={{ height: 28, width: 265, borderRadius: 5, backgroundColor: '#b1634c', marginTop: 10, marginLeft: 25, marginBottom: 30 }}>
                <Text style={{ fontSize: 11, color: 'white', textAlign: 'center', marginTop: 6, fontWeight: '800' }}>FLAT 50% OFF FOR FIRST FEW -  ONLY RS. 999 /-</Text>
              </View>
            </View>

            <View style={{ marginBottom: 100, flex: 0.8, backgroundColor: '#ffffff', elevation: 4, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, marginRight: 15, marginLeft: 30 }}>

              <Text style={{ marginTop: 20, marginLeft: 35, fontSize: 15, fontWeight: '600' }}>Subscribe now to the PREMIUM Plan and</Text>
              <Text style={{ marginTop: 3, marginLeft: 35, fontSize: 15, fontWeight: '600' }}>get access to all Training</Text>
              <Text style={{ marginTop: 3, marginLeft: 35, fontSize: 15, fontWeight: '600' }}>Interview Prep Quizzes and</Text>
              <Text style={{ marginTop: 3, marginLeft: 35, fontSize: 15, fontWeight: '600' }}>Placement Assistance</Text>
              <TouchableOpacity style={{ borderRadius: 10, marginLeft: 35, marginTop: 5, height: 40, width: 150, backgroundColor: '#ef8947', marginBottom: 10 }}>
                <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', marginTop: 8 }}>View Content <Ionicons name="chevron-forward-outline"
                  style={{ fontSize: 15, fontWeight: '200' }} /></Text>

              </TouchableOpacity>


            </View>

          </ScrollView>

        </View>

        {/*<View style={styles.bottom}>
<View style={styles.icons}>
<Ionicons name="home-outline" style={{fontSize : 30 , color : '#ef8947', marginLeft : 50}}/>

<Ionicons name="notifications-outline" style={{fontSize : 30 , color : '#ef8947', marginLeft : 90}}/>

<Ionicons name="calendar-outline" style={{fontSize : 30 , color : '#ef8947', marginLeft : 95}}/>

</View>
<View style={{flexDirection : 'row'}}>
<Text style={{fontSize : 10 , color : '#ef8947', marginLeft : 54}}>Home</Text>
<Text style={{fontSize : 10 , color : '#ef8947', marginLeft : 76}}>Notifications</Text>
<Text style={{fontSize : 10 , color : '#ef8947', marginLeft : 82}}>Events</Text>
</View>

        </View>*/}


      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  /*container : {
  flex : 1,
  backgroundColor : '#f1eee7',
  },*/
  top: {
    flex: 0.14,
    backgroundColor: '#532c49',
    flexDirection: 'row'
  },
  welcome: {
    flex: 0.42,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4
  },
  referral: {
    flex: 0.28,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 15,
    elevation: 4
  },
  button1: {
    backgroundColor: '#ef8947',
    marginLeft: 12,
    marginTop: 10,
    height: 38,
    width: 120,
    alignItems: 'center',
    borderRadius: 10
  },
  content: {
    flex: 0.18,
    backgroundColor: '#ffffff',
    elevation: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 15,
    marginLeft: 30,
    marginTop: 10
  },
  ad: {
    backgroundColor: '#fcf1ef',
    width: 100,
    marginTop: 5,
    marginLeft: 65,
    height: 18
  },
  adbox: {
    flex: 0.5,
    backgroundColor: '#532c49',
    marginRight: 15,
    marginLeft: 30,
  },
  bottom: {
    flex: 0.075,
    backgroundColor: 'white',
  },
  icons: {
    flexDirection: 'row',
  }
});

export default HomeScreen;