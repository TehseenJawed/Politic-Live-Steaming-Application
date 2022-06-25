import React, { useState } from 'react';
import { Button, TouchableOpacity, Text, ScrollView, ImageBackground } from 'react-native';
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
export default function Interactions({ navigation }) {
    const [loginFlag, setLoginFlag] = useState(false)
    const [signupFlag, setSignupFlag] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)
    return (
        <View style={styles.body}>

            <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>
                {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                {loginFlag ? <Login setSignup={setSignupFlag} flag={setLoginFlag} /> : null}
                {signupFlag ? <Signup flag={setSignupFlag} /> : null}
                <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                <View style={styles.formBody}>
                    <Item style={styles.setInput}>
                        <Icon active style={{ color: 'gray' }} name='search' />
                        <Input placeholder='Search' />
                    </Item>
                    <View style={styles.setForm}>


                        <ScrollView style={styles.itemBody}>
                            <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Laws</Text>
                            <View style={styles.items}>
                                <Text style={styles.listText}>
                                    Fleeing or Alluding statute
                            </Text>
                                <Text style={styles.listText}>
                                    Headlight Color
                            </Text>
                                <Text style={styles.listText}>
                                    Traffic Cameras
                            </Text>
                                <Text style={styles.listText}>
                                    Objects on Rear View Mirror
                            </Text>
                                <Text style={styles.listText}>
                                    Seatbelt + Passenger
                            </Text>
                                <Text style={styles.listText}>
                                    Marijuana
                            </Text>
                                <Text style={styles.listText}>
                                    Open Liqour
                            </Text>
                                <Text style={styles.listText}>
                                    Blood Alcohol
                            </Text>
                                <Text style={styles.listText}>
                                    Tinted Windows
                            </Text>
                                <Text style={styles.listText}>
                                    Cell Phone + Distraction
                            </Text>
                                <Text style={styles.listText}>
                                    I.D. Upon Demand
                            </Text>
                            </View>



                        </ScrollView>

                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        position: 'relative',
        width: '100%',
        justifyContent: 'center'
    },
    formBody: {
        width: '100%',
        // height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    Indianapolis: {
        width: 150,
    },
    image: {
        flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
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
    listText: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: 15,
        fontWeight: 'bold'
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
        backgroundColor: '#ECE4C6',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    itemBody: {
        width: '100%',
        padding: 15,
        // height: '20%',
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
        height: 500,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        padding: '2%',
        width: '80%',
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

