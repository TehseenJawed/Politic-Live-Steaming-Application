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
                {/* <Item style={styles.setInput}>
                    <Icon active name='search' />
                    <Input placeholder='Search' />
                </Item> */}
                <View style={styles.setForm}>


                    {/* <ScrollView style={styles.itemBody}> */}
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Recordings</Text>
                    <View style={styles.items}>
                        <Text style={styles.listText}>
                            Pull Over 1
                            </Text>
                    </View>



                    {/* </ScrollView> */}

                </View>
            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        zIndex:0,
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
    carImage: {
        // width:'80%'
    },
    listText: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: 15,
        fontWeight: 'bold',
        color: '#59308B'
    },
    recordIcon1: {
        marginTop: -10,
        width: '70%',
        resizeMode: 'stretch',
        height: '80%'

    },
    recordIcon2: {
        marginTop: -30,
        width: '40%',
        resizeMode: 'stretch',
        height: '80%'

    },
    topContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    setCars: {
        position: 'absolute',
        right: 0,
        bottom: 0

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
    },
    items: {
        margin: 8,
        padding: 10,
        width: '90%',
        height: '90%',
        backgroundColor: '#ECE4C6',
        borderRadius: 10,
        flexDirection: 'row',
        flexDirection: 'column',
        borderWidth: 1,
    },
    itemBody: {
        width: '100%',
        // height:'90%',
        padding: 10,
    },
    setInput: {
        backgroundColor: 'white',
        borderWidth: 2,
        width: '80%',
        paddingLeft: 5,
        borderRadius: 15,
        marginBottom: 15,
        height: '9%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.21,
        shadowRadius: 12.16,

        elevation: 20,

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
    sectionTitle: {
        fontSize: 7.2,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

