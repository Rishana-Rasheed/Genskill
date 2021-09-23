import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Box1 from '../Components/Box1.js';
import Box2 from '../Components/Box2.js';
import Box3 from '../Components/Box3.js';
import Box4 from '../Components/Box4.js';
import Box5 from '../Components/Box5.js';



const views1 = [
{text1: 'New KTU Notifications',
    ml1: 6,
    
text2: 'You have 1 KTU Notifications', 
    ml2: 6,
    
text3: 'August 19, 2021',
    ml3: 6,
    
}];

const views2 = [
{text4: 'New KTU Notifications',
ml1: 6,
text5: 'You have 5 KTU Notifications',
ml2: 6,
text6: 'August 14, 2021',
ml3: 6,
}];

const views3 = [
{text7: 'New KTU Notifications',
ml1: 6,
text8: 'You have 4 KTU Notifications',
ml2: 6,
text9: 'August 13, 2021',
ml3: 6}];

const views4 = [{text10: 'Alert',
ml1: 6,
text11: 'The app will be down for maintenance from 11 p.m to 1 a.m\nSorry for any inconvenience caused',
ml2: 6,
text12: 'August 7, 2021',
ml3: 6}];

const views5 = [{text13: 'New KTU Notifications',
ml1: 6,
text14: 'You have 3 KTU Notifications',
ml2: 6,
text15: 'August 3 2021',
ml3: 6}];



export default class Notification extends React.Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor="#3d2137" barStyle="dark-content" />

                <SafeAreaView>
                    <ScrollView>

                        <View style={{ backgroundColor: '#f1eee7', height: Dimensions.get('window').height, }}>
                            <View style={{ flex: 1 }}>

                                <View style={Styles.top}>


                                    <Text style={{ marginBottom: 14, fontSize: 20,  color: 'white', marginTop: 12, marginLeft: 105}}>Notifications</Text>
                                    <TouchableOpacity >
                                    <Ionicons name="refresh-outline" style={{ color: 'white', fontSize: 22, marginTop: 14,marginLeft: 45}}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <Ionicons name="settings-outline" style={{ color: 'white', fontSize: 22, marginTop: 14, marginLeft: 20}}/>
                                    </TouchableOpacity>
                                    <View>

                                    </View>



                                </View>

                                <View style={Styles.data}>

                <Text style={{ fontSize: 12, marginLeft: 15, marginTop: 25, color: '#7e7e7e' }}>You have<Text style={{ color: '#ef8947' }}> 6 uread</Text> notifications</Text>
                                    <TouchableOpacity style={Styles.button1}>

                                        <Text style={{ color: '#ef8947', fontSize: 12, marginTop: 5, }}>Mark all as read</Text>

                                    </TouchableOpacity>

                                </View>

                                <Text style={{ color: '#ef8947', fontSize: 20, marginTop: 5, fontWeight: '600', marginLeft: 15 }}>Today</Text>



                                <View style={Styles.todata}>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Ionicons name="notifications-circle" style={{ fontSize: 60, marginLeft: 5, color: '#fcf3ec' }} />
                                        <View>
                                            <Text style={{ fontWeight: '600', marginLeft: 6, marginTop: 10 }}>New KTU Notifications</Text>
                                            <Text style={{ fontSize: 9, marginLeft: 6, }}>You have 2 KTU Notifications</Text>
                                            <Text style={{ marginLeft: 6, fontSize: 10, color: '#7e7e7e', marginBottom: 10 }}>9 hours ago</Text>
                                        </View>
                                    </View>

                                </View>

                                <Text style={{
                                    marginBottom: 15,
                                    color: '#ef8947',
                                    fontSize: 20,
                                    marginTop: 1,
                                    fontWeight: '600',
                                    marginLeft: 15
                                }}>Others</Text>

                                <View>
                                    <Box1 data={views1} />
                                </View>

                                <View>
                                    <Box2 data={views2} />
                                </View>

                                <View>
                                    <Box3 data={views3} />
                                </View>

                                <View>
                                    <Box4 data={views4} />
                                </View>

                                <View >
                                    <Box5 data={views5} />
                                </View> 





                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}



const Styles = StyleSheet.create({
    container: {

        backgroundColor: '#f1eee7',
    },
    top: {

        backgroundColor: '#532c49',
        flexDirection: 'row',
       justifyContent: 'center'
    },
    data: {
        flexDirection: 'row'
    },
    button1: {
        marginLeft: 58,
        marginTop: 20,
        height: 30,
        width: 110,
        alignItems: 'center',
        borderRadius: 7,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ef8947'
    },
    todata: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        elevation: 4,
        margin: 15,
    },
})