import React, { useState } from 'react';
import { Button, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Icon, View, Item, Input } from 'native-base'
import { StyleSheet, Image, } from 'react-native'
import Indianapolis from '../../assets/indianapolis.png'
import Record from '../../assets/record.png';
import Cars from '../../assets/Dashboard/laws.png'
import Login from '../../Components/LoginScreen'
import Signup from '../../Components/Signup'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import Hammer from '../../assets/Dashboard/Interaction/hammer.png'
import IndianaBar from '../../Components/IndianaBar'
export default function Interactions({ navigation, setndianaFlag, indianaFlag }) {
    return (
        <View style={styles.topContainer}>
                <TouchableOpacity onPress={() => setndianaFlag(!indianaFlag)}>
                    <View style={styles.setIndiana}>
                        <Image style={styles.Indianapolis} source={Hammer} />
                        <Text style={styles.setText}>Indianapolis, IN</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.setRecord}>
                <Image style={styles.recordIcon} source={Record} />
                </TouchableOpacity>
            </View>
    );
}
const styles = StyleSheet.create({
    
    Indianapolis: {
        width: 150,
    },
    recordIcon:{
        width:50,
        height:30,
        resizeMode:'contain'
    },
    setRecord:{
        width:70,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'black'
    },
    setIndiana: {
        width: 110,
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 100,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
    },
    Indianapolis: {
        width: 20,
        marginRight: 5,
        resizeMode: 'contain'
    },

    setText: {
        fontSize: 11
    },
    topContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin:10
    },
    setCars: {
        position: 'absolute',
        right: 0,
        bottom: 0

    },
    itemBody: {
        width: '100%',
        padding: 15,
        // height: '20%',
    },
});

