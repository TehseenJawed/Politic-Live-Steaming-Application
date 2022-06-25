import React, { useState, useContext } from 'react';
import { Button, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Icon, View, Form } from 'native-base'
import { StyleSheet, Image, } from 'react-native'
import Indianapolis from '../../assets/indianapolis.png'
import Record from '../../assets/record.png';
import Cars from '../../assets/cars.png'
import Login from '../../Components/LoginScreen'
import Signup from '../../Components/Signup'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import Hammer from '../../assets/Dashboard/Interaction/hammer.png'
import IndianaBar from '../../Components/IndianaBar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginContext from '../../Context/LoginContext';
import { useFocusEffect } from '@react-navigation/native';
export default function Interactions({ navigation, route }) {
    const SetScreen = useContext(LoginContext)
    const [loginFlag, setLoginFlag] = useState(false)
    const [signupFlag, setSignupFlag] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)

    useFocusEffect(() => {
        SetScreen.setScreen(route.name)
    })

    return (
        <ImageBackground style={styles.body} source={require('../../assets/background.png')}>


            { indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
            {loginFlag ? <Login setSignup={setSignupFlag} flag={setLoginFlag} /> : null}
            {signupFlag ? <Signup flag={setSignupFlag} /> : null}

            <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
            <View style={styles.formBody}>
                <View style={styles.setForm}>


                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Law Widget</Text>


                </View>
            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        zIndex: 0,
        position: 'relative',
        width: '100%',
        backgroundColor: '#D1726D',
        justifyContent: 'center'
    },
    setIndiana: {
        width: 130,
        height: 35,
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 100000000000
    },
    Indianapolis: {
        width: 20,
        marginRight: 5,
        resizeMode: 'contain'
    },

    setText: {
        fontSize: 11
    },
    formBody: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
    },
    setForm: {
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        padding: '2%',
        width: '85%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
});

