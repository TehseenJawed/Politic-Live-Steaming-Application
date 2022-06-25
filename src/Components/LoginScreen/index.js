import React, { useContext, useState } from 'react';
import { View, Text, Container, Item, Icon, Input } from 'native-base';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Image } from 'react-native'
import axios from 'axios';
import LoginContext from '../../Context/LoginContext';
import ProfilePic from '../../assets/politick.png'
import Facebook from '../../assets/facebook.png'
import { AsyncStorage } from 'react-native';
import Eye from '../../assets/eye.png'
import Hide from '../../assets/hide.png'
import Config from '../../../config'
import { showMessage, hideMessage } from "react-native-flash-message";
function Dashboard({ children, flag, setSignup }) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const UpdateLoginContext = useContext(LoginContext)
    const [hide, setHide] = useState(true)
    const [loader, setLoader] = useState(false)
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
    function Login() {
        setLoader(!loader)
        const newObj = {
            email: username,
            password
        }
        axios.post(`${Config.BACKEND_API}/api/auth/login`, newObj)
            .then((response) => {
                console.log(response)
                setLoader(false)
                AsyncStorage.setItem('userCredentials', response.data);
                topMessage("You have logged in successfully")
                UpdateLoginContext.setData(response.data)
                flag(false)
            })
            .catch((err) => {
                topMessage(err.response.data.message)
                setLoader(false)
            })
    }
    console.log(loader)
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.body}>
                <TouchableOpacity style={{width:'130%', height:'130%', marginTop:0, zIndex:0, position:'absolute'}} onPress={() => flag(false)}></TouchableOpacity>

            <Container style={styles.subBody} >
                <Text style={styles.headText}>SIGN IN</Text>
                <TouchableOpacity>
                    <View style={styles.logo}>
                        <Image style={{ width: 170, resizeMode: 'contain' }} source={ProfilePic} />
                    </View>
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.text}>Email or Phone</Text>
                </View>
                <View style={styles.setItems}>
                    <Item style={styles.field}>
                        <Input value={username} onChangeText={(e) => setUserName(e)} style={styles.fieldText} />
                    </Item>
                </View>
                <View style={styles.header}>
                    <Text style={styles.text}>Password</Text>
                </View>
                <View style={styles.setItems}>
                    <Item style={styles.field}>
                        <Input value={password} secureTextEntry={hide} onChangeText={(e) => setPassword(e)} style={styles.fieldText} />
                        <TouchableOpacity style={{ width: '7%', height: '20%' }} onPress={() => setHide(!hide)}>

                            {hide ? <Image style={styles.eye} source={Eye} onPress={() => setHide(false)} /> : null}
                            {hide ? null : <Image style={styles.hideEye} source={Hide} onPress={() => setHide(false)} />}
                        </TouchableOpacity>
                    </Item>
                </View>
                <Text style={styles.forgot}>Forgot Password?</Text>
                {loader ? 
                (
                    <ActivityIndicator size="large" color="#60A5A5" />
                )
            :
            (
                <TouchableOpacity onPress={Login} style={styles.button2}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
            )}
                
                <Text style={styles.seperator}>Or</Text>
                <TouchableOpacity style={styles.button3}>
                    <Image style={{ width: '7%', height: '35%', marginRight: '3%' }} source={Facebook} />
                    <Text style={styles.buttonText2}>Sign in with facebook</Text>
                </TouchableOpacity>
                <View style={styles.bottomText}>
                    <Text style={styles.headText2}>Do not have Account?<Text style={styles.subheadText} onPress={() => { setSignup(true); flag(false); }}>Sign up</Text></Text>
                    {/* <Text style={styles.headText2} onPress={() => { setSignup(true); flag(false); }}>Sign up !</Text> */}
                </View>
            </Container>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10000,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: '5%',
    },
    subheadText: {
        color: '#60A5A5',
        fontWeight: '700'
    },
    seperator: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 15

    },
    forgot:{
        width:'100%',
        textAlign:'right',
        color:'#f2f2f2',
        marginTop:10
    },
    setItems: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
    },
    header: {
        width: '95%',
        marginTop: 20
    },
    eye: {
        width: 20,
        height: 13,
        resizeMode: 'stretch',
        position: 'absolute'

    },
    hideEye: {
        width: 20,
        height: 18,
        resizeMode: 'stretch',
        position: 'absolute'

    },
    headText: {
        color: 'black',
        fontWeight: '700',
        width: '100%'
    },
    headText2: {
        width: '100%',
        textAlign: 'center',
        fontSize:13
        // marginTop: 20
    },
    textWidth: {
        width: '90%',
        // marginTop: '5%'
    },
    bottomText: {
        width: '90%',
        marginTop: '2%'
    },
    text: {
        fontSize: 13,
        color: '#60A5A5',
        // marginTop: '%',
        marginBottom: '1%'
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonText2: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold'
    },
    subBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '98%',
        borderRadius: 10,
        padding: '7%',
        paddingTop: '15%',
        paddingBottom: '15%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    logo: {
        width: 200,
        height: 150,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 0,
        width: '95%',
        justifyContent: 'center',
    },
    button2: {
        width: '75%',
        height: '8%',
        marginTop: '10%',
        borderRadius: 25,
        backgroundColor: '#60A5A5',
        justifyContent: 'center'
    },
    button3: {
        width: '75%',
        height: '8%',
        borderRadius: 25,
        backgroundColor: '#1877f2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldText: {
        fontSize: 13,
        color: 'black',
        backgroundColor: 'white'
    },
    items: {
        margin: 8,
        padding: 10,
        width: '90%',
        backgroundColor: 'rgba(255,255,255, 0.9)',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemBody: {
        width: '100%',
        padding: 15,
        height: '20%'
    },
    setInput: {
        backgroundColor: 'rgba(255,255,255, 0.5)',
        width: '100%',
        paddingLeft: 5,
        borderRadius: 15,
        marginBottom: 15,
        height: '9%'

    },
    setForm: {
        height: 500,
        backgroundColor: '#F7D0C2',
        borderRadius: 15,
        borderWidth: 1,
        padding: '2%',
        width: '80%',
        alignItems: 'center'
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
export default Dashboard
