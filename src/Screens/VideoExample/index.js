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
import IndianaBar from '../../Components/IndianaBar'

export default function Interactions({ navigation }) {
    const [loginFlag, setLoginFlag] = useState(false)
    const [signupFlag, setSignupFlag] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)
    return (
        <View style={styles.body}>


            { indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
            {loginFlag ? <Login setSignup={setSignupFlag} flag={setLoginFlag} /> : null}
            {signupFlag ? <Signup flag={setSignupFlag} /> : null}
            
            <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
            <View style={styles.setRecording}>
            </View>
            <View style={styles.formBody}>
                <Item style={styles.setInput}>
                    <Icon active name='search' />
                    <Input placeholder='Search' />
                </Item>
                <View style={styles.setForm}>


                    <ScrollView style={styles.itemBody}>
                        <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginBottom:10 }}>Video Example</Text>
                        <View style={styles.items}>
                            <Text style={styles.listText}>
                            Officer Costs the city $75,000 over Racial Profiling  by Remaining Calm and NOT Resisting
                            </Text>
                            
                            <Text style={styles.listText}>
                            Citizen wins $41,000 Lawsuit using 1st and 4th Amendment
                            </Text>
                            
                            <Text style={styles.listText}>
                            $200,000 Lawsuit over Seat Belt Ticket using 4th and 5th Amendments
                            </Text>
                            
                            <Text style={styles.listText}>
                            Officers sued for $151,000 over detention of a realtor by Remaining Calm and NOT Resisting
                            </Text>
                            
                            <Text style={styles.listText}>
                            Officers sued for Warrantless Search using 4th Amendment
                            </Text>
                            
                            <Text style={styles.listText}>
                            $400,000 settlement over escalated traffic violation by Remaining Calm and NOT Resisting”
                            </Text>
                            
                        </View>



                    </ScrollView>

                </View>
            </View>
{/* 
            <View style={styles.setCars}>
                <Image style={styles.carImage} source={Cars} />
            </View> */}

        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        position: 'relative',
        width: '100%',
        backgroundColor: '#D1726D',
        justifyContent: 'center'
    },
    formBody: {
        width: '100%',
        // height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:-1
    },
    Indianapolis: {
        width: 150,
    },
    carImage: {
        // width:'80%'
    },
    listText: {
        fontSize: 13,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 15,
        fontWeight: 'bold',
        color:'#0151BE',
        textDecorationLine:'underline'
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
        right:0,
        bottom:0

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
    },
    items: {
        margin: 2,
        padding: 2,
        width: '97%',
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

