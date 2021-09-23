import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
    return (

        <SafeAreaView>
            <StatusBar backgroundColor="#3d2137" barStyle="dark-content" />
            <View style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#f1eee7' }}>

                <ScrollView>
                    <View style={styles.top}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Ionicons name="arrow-back-outline" style={{ fontSize: 20, marginLeft: 20, color: 'white', marginTop: 12 }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, marginLeft: 110, color: 'white', marginTop: 12, marginBottom: 12 }}>Profile</Text>
                        </View>

                    </View>

                    <View style={styles.head}>

                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="person-circle" style={{ fontSize: 80, color: '#fadbc7', marginLeft: 18, marginTop: 5 }} />

                            <View style={styles.data}>
                                <Text style={{ fontSize: 22 }}>Rishana</Text>
                                <Text style={{ marginTop: 5, fontSize: 15, color: '#7e7e7e' }}>College of Applied Science</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 18 }}>
                                    <Text style={{ marginTop: 5, color: '#ef8947', fontSize: 17 }}>Edit Profile</Text>
                                    <Ionicons name="pencil" style={{ fontSize: 15, color: '#e68b50', marginTop: 7, marginLeft: 4 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image source={require("../../assets/IMG_20210830_145431.jpg")} style={{ margin: 15, height: 200, borderRadius: 20, width: '90%' }} />

                    <View style={styles.novice}>
                        <Text style={{ fontSize: 22, marginTop: 20, marginLeft: 15 }}>Genskill Level: Novice</Text>
                        <Image source={require("../../assets/Screenshot_2021_0830_151612.png")} style={{ height: 20, width: 200, marginTop: 5, marginBottom: 10, marginLeft: 15 }} />
                    </View>

                    <View style={{ flex: 1, backgroundColor: '#fdf2ec', marginLeft: 15, marginRight: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require("../../assets/Screenshot_2021_0830_154155.png")} style={{ height: 95, width: 95, marginBottom: 10 }} />
                            <View style={{ marginTop: 28, }}>
                                <Text style={{ marginLeft: -15, color: '#4f3048', fontSize: 18, fontWeight: 'bold' }}>0</Text>
                                <Text style={{ marginTop: 3, marginLeft: -15, color: '#aa867a', fontSize: 16 }}>Lifetime Points</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={{
                                    marginLeft: 42,
                                    marginTop: 28,
                                    height: 35,
                                    width: 80,
                                    alignItems: 'center',
                                    borderRadius: 7,
                                    borderLeftWidth: 1,
                                    borderRightWidth: 1,
                                    borderBottomWidth: 1,
                                    borderTopWidth: 1,
                                    borderColor: '#ef8947',
                                    backgroundColor: 'white'
                                }}>
                                    <Text style={{ color: '#ef8947', fontSize: 14, marginTop: 5 }}>History</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1, backgroundColor: 'white', marginLeft: 15, marginRight: 15, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                        <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 16, color: '#381d36' }}>Suggestions to improve Score:</Text>
                        <ScrollView horizontal={true}>
                            <View style={{ flex: 1, margin: 15, borderRadius: 20, backgroundColor: 'white', elevation: 4, }}>
                                <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 22, fontWeight: '600', marginRight: 25 }}>Complete Courses</Text>
                                <Text style={{ marginLeft: 10, marginRight: 50, marginTop: 5, fontSize: 16, fontStyle: 'italic', fontWeight: '100' }}>Upskill yourself and become</Text>
                                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '100', fontStyle: 'italic', marginTop: 3, marginBottom: 14 }}>Interview Ready.</Text>
                                <TouchableOpacity style={{
                                    marginLeft: 20,
                                    marginTop: -5,
                                    height: 32,
                                    width: 130,
                                    alignItems: 'center',
                                    borderRadius: 7,
                                    borderLeftWidth: 1,
                                    borderRightWidth: 1,
                                    borderBottomWidth: 1,
                                    borderTopWidth: 1,
                                    borderColor: '#ef8947',
                                    marginBottom: 20,
                                    backgroundColor: '#fffcf5'
                                }}>
                                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5, color: '#e4965f' }}>Go to Courses</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{ flex: 1, margin: 15, borderRadius: 20, backgroundColor: 'white', elevation: 4, }}>
                                <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 22, fontWeight: '600' }}>Complete Quizzes</Text>
                                <Text style={{ marginLeft: 10, marginRight: 25, marginTop: 5, fontSize: 16, fontStyle: 'italic', fontWeight: '100' }}>Get ready to Crack Interviews and</Text>
                                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '100', fontStyle: 'italic', marginTop: 3, marginBottom: 14 }}>Get Placed.</Text>
                                <TouchableOpacity style={{
                                    marginLeft: 20,
                                    marginTop: -5,
                                    height: 32,
                                    width: 130,
                                    alignItems: 'center',
                                    borderRadius: 7,
                                    borderLeftWidth: 1,
                                    borderRightWidth: 1,
                                    borderBottomWidth: 1,
                                    borderTopWidth: 1,
                                    borderColor: '#ef8947',
                                    marginBottom: 20,
                                    backgroundColor: '#fffcf5'
                                }}>
                                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5, color: '#e4965f' }}>Go to Quizzes</Text>
                                </TouchableOpacity>

                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ flex: 1, margin: 15, backgroundColor: 'white', borderRadius: 10 }}>
                        <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 22, fontWeight: '600' }}>Badges</Text>
                        <TouchableOpacity style={{
                            marginLeft: 20,
                            marginTop: 20,
                            height: 32,
                            width: 290,
                            alignItems: 'center',
                            borderRadius: 7,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: '#ef8947',
                            marginBottom: 30,
                            backgroundColor: '#fffcf5'
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5, color: '#e4965f' }}>View All</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1, margin: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 50 }}>
                        <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 22, fontWeight: '600' }}>Resume</Text>
                        <Text style={{ marginLeft: 25, marginTop: 10, fontSize: 16, color: '#7a7a7a' }}>You have not created a Resume yet.</Text>
                        <Text style={{ marginLeft: 25, marginTop: 3, fontSize: 16, color: '#7a7a7a' }}>Let's create now</Text>
                        <TouchableOpacity style={{
                            marginLeft: 20,
                            marginTop: 20,
                            height: 32,
                            width: 290,
                            alignItems: 'center',
                            borderRadius: 7,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderBottomWidth: 1,
                            borderTopWidth: 1,
                            borderColor: '#ef8947',
                            marginBottom: 30,
                            backgroundColor: '#fffcf5'
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5, color: '#e4965f' }}>Create Resume</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    /* container : {
         flex : 1,
         backgroundColor : '#f1eee7'
     },*/
    top: {
        flex: 0.08,
        backgroundColor: '#532c49',
    },
    head: {
        flex: 0.16,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 3
    },
    data: {
        marginTop: 10,
        marginLeft: 20
    },
    novice: {
        flex: 0.5,
        backgroundColor: '#ffffff',
        marginLeft: 15,
        marginRight: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 3
    }
});


