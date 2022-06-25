import React, { useState, useEffect, useContext } from 'react';
import { Button, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { StyleSheet, Image, } from 'react-native'
import { withDecay } from 'react-native-reanimated';
import SOS from '../../assets/SOS.png'
import Indianapolis from '../../assets/indianapolis.png'
import Record from '../../assets/record.png'
import Avatar from '../../assets/avatar.png'
import InteractionGuide from '../../assets/Dashboard/interaction.png'
import VideoExample from '../../assets/videoExample.png'
import Law from '../../assets/Dashboard/law2.png'
import videoExample from '../../assets/Dashboard/videoExample.png'
import LawColor from '../../assets/Dashboard/law2Color.png'
import Hammer from '../../assets/Dashboard/Interaction/hammer.png'
import Setting from '../../assets/setting.png'
import MeetSenator from '../../assets/meetSenator.png'
import Politick from '../../assets/politick.png'
import Profile from '../../assets/profile.png'
import Cars from '../../assets/cars.png'
import Login from '../../Components/LoginScreen'
import Signup from '../../Components/Signup'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import BubbleImage from '../../assets/BubbleImages/home.png'
import Side from '../../assets/Dashboard/side.png'
import LoginContext from '../../Context/LoginContext';
import Notify from '../../assets/Dashboard/notification.png'
import { showMessage, hideMessage } from "react-native-flash-message";

import { useFocusEffect } from '@react-navigation/native';
function Interactions({ navigation, route }) {

    const SetScreen = useContext(LoginContext)
    const [loginFlag, setLoginFlag] = useState(false)
    const [signupFlag, setSignupFlag] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)
    const [law, setLaw] = useState(true)

    function topMessage(message) {

        showMessage({
            message: message,
            description: "Politicme",
            type: "default",
            backgroundColor: "#E07E7E",
            color: "white",
            icon:"success"
        });
    }
    useEffect(() => {
        setLaw(true)
    }, [])
    useFocusEffect(() => {

        SetScreen.setScreen(route.name)
    })
    return (
        <View style={styles.body}>
            <ImageBackground style={styles.image} source={require('../../assets/background.png')}>

                <View style={styles.topHeader}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
                        {SetScreen.data !== " " ?
                            (
                                <View>

                                </View>
                            ) :

                            <TouchableOpacity onPress={() => setLoginFlag(!loginFlag)}>
                                <Image style={styles.setTopItem} source={Profile} />
                            </TouchableOpacity>
                        }

                        <TouchableOpacity onPress={() => navigation.navigate("SideMenu")}>
                            <Image style={styles.sideMenu} source={Side} />
                        </TouchableOpacity>
                    </View>
                </View>
                {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                {loginFlag ? <Login setSignup={setSignupFlag} flag={setLoginFlag} /> : null}
                {signupFlag ? <Signup setLogin={setLoginFlag} flag={setSignupFlag} /> : null}

                {/* <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} /> */}

                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => setndianaFlag(!indianaFlag)}>
                        <View style={styles.setIndiana}>
                            <Image style={styles.Indianapolis} source={Hammer} />
                            <Text style={styles.setText}>Indianapolis, IN</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => topMessage("We are developing this feature")}>
                        <View style={styles.setRecord}>
                            <Image style={styles.recordIcon} source={Record} />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Avatar Image  Position Absolute*/}
                <View style={styles.setAvatar}>
                    <Image style={styles.avatar} source={Avatar} />
                    <Image style={styles.bubbleImage} source={BubbleImage} />
                    <Image style={styles.notifyIcon} source={Notify} />
                </View>

                <View style={styles.setInteraction}>
                    <TouchableOpacity style={styles.setTouchable} onPress={() => navigation.navigate('Interactions')}>
                        <Image style={styles.recordIcon1} source={InteractionGuide} />
                    </TouchableOpacity>

                </View>

                <View style={styles.setButtons}>
                    <TouchableOpacity activeOpacity={.7} style={styles.setTouchable1} onPress={() => { navigation.navigate('Laws'); }}>
                        {law ?
                            <Image style={styles.recordIcon2} source={Law} />
                            :
                            <Image style={styles.recordIcon2} source={LawColor} />}

                        <Text style={styles.HeadingText}>Laws</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setTouchable1} onPress={() => navigation.navigate('VideoExample')}>
                        <Image style={styles.recordIcon3} source={videoExample} />
                        <View style={{ marginTop: -10 }}>
                            <Text style={styles.HeadingText2}>Video</Text>
                            <Text style={styles.HeadingText2}>Example</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },

    image: {
        zIndex: -100000000,
        width: '100%',
        height: '100%'
    },
    setIndiana: {
        width: 110,
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    setText: {
        fontSize: 11
    },
    SOS: {
        width: 60,
        height: 60,
    },
    sideMenu: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginLeft: 10
    },
    Indianapolis: {
        width: 20,
        marginRight: 5,
        resizeMode: 'contain'
    },
    Indonesia: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    notifyIcon: {
        width: 50,
        height: 150,
        resizeMode: 'contain',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 2.51,

        elevation: 15,

    },
    recordIcon: {
        width: 70,
        height: 100,
        resizeMode: 'contain'
    },
    bubbleImage: {
        width: 130,
        height: 100,
        resizeMode: 'contain',
        zIndex: 1,
        top: 40,
        left: -50
    },
    carImage: {
        marginTop: -10,
        marginLeft: 130,
    },
    recordIcon1: {
        // marginTop: -10,
        width: 220,
        height: 130,
        resizeMode: 'contain',
        shadowColor: "black",
    },
    HeadingText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginTop:-15
    },
    HeadingText2: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '60%',
        marginTop: -5
    },
    recordIcon2: {
        width: 60,
        height: 80,
        resizeMode: 'contain'
    },
    recordIcon3: {
        width: 90,
        height: 80,
        resizeMode: 'contain'
    },
    topContainer: {

        margin: 15,
        justifyContent: 'space-between',
        // alignItems: 'top',
        flexDirection: 'row',

    },
    setTopItem: {
        width: 40,
        height: 40,
        marginLeft: 10
    },
    setTouchable: {
        backgroundColor: 'white',
        width: '95%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    setTouchable1: {
        margin: '2%',
        width: '45%',
        position: 'relative',
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    topHeader: {
        padding: 10,
        zIndex: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#1C255F',
        height: '8%',
    },

    setRecord: {
        width: 110,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 12,
        zIndex: 1
    },
    avatar: {
        width: 130,
        height: 200,
        resizeMode: 'contain',
        zIndex: 1
    },
    setAvatar: {
        zIndex: 1,
        position: 'absolute',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        top: '22%',
        left: '7%',
        position: 'absolute'
    },
    setInteraction: {
        marginTop: '28%',
        justifyContent: 'center',
        flexDirection: 'row',
        zIndex: 0,

    },
    setButtons: {
        width: '100%',
        height: '22%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '-15%',
        zIndex: 0
    },
    setCars: {
        position: 'absolute',
        bottom: 1,
    },
});
export default Interactions
