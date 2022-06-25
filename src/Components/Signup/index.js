
import React, { useState, useContext } from 'react';
import { View, Text, Container, Item, Icon, Input } from 'native-base';
import { StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert, Image, ActivityIndicator } from 'react-native';
import axios from 'axios'
import Config from '../../../config'
import { launchImageLibrary } from 'react-native-image-picker';
import ProfilePic from '../../assets/avatar-black.png'
import Facebook from '../../assets/facebook.png'
import Eye from '../../assets/eye.png'
import Hide from '../../assets/hide.png';
import Camera from '../../assets/camera.png'
import { showMessage, hideMessage } from "react-native-flash-message";
import LoginContext from '../../Context/LoginContext';
function Dashboard({ children, flag, setLogin }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [repass, setRePass] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState(' ')
    const [hide, setHide] = useState(true)
    const [rehide, setReHide] = useState(true)
    const [loader, setLoader] = useState(false)
    const UpdateLoginContext = useContext(LoginContext)
    function topMessage(message) {

        showMessage({
            message: message,
            description: "Politicme",
            type: "default",
            backgroundColor: "#E07E7E",
            color: "white",
            icon: "success"
        });
    }
    function Signup() {
        setLoader(!loader)
        if (pass !== repass) {
            setLoader(false)
            topMessage("Your both passwords are not the same")
        }
        else if (email === "" && pass === "" && username === "") {
            setLoader(false)
            topMessage("You have to complete this form to proceed")

        }
        else {
            // let filename = image[0].uri.split("/").pop();
            // let match = /\.(\w+)$/.exec(filename);
            // let fileType = match ? `image/${match[1]}` : `image`;


            if (email.indexOf('@') >= 0) {
                // console.log('This is an email')
                let formData = new FormData();
                // Image File
                let newFile = {
                    uri: image.uri,
                    type: image.type,
                    name: image.fileName,
                };

                image === ' ' ? formData.append("pfp", '') : formData.append("pfp", newFile)

                formData.append("name", username);
                formData.append("email", email);
                formData.append("password", pass);

                axios.post(`${Config.BACKEND_API}/api/user`, formData, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(async (response) => {
                        setLoader(false)
                        UpdateLoginContext.setData(response.data)
                        topMessage("You have Signedup successfully")
                        flag(false)
                    })
                    .catch(async (err) => {
                        setLoader(false)
                        topMessage(err.response.data.message)
                    })
            }
            else if (isNaN(email) === false) {
                // console.log('This is a phone number')
                let formData = new FormData();
                // Image File
                let newFile = {
                    uri: image.uri,
                    type: image.type,
                    name: image.fileName,
                };
                image === ' ' ? formData.append("pfp", '') : formData.append("pfp", newFile)
                formData.append("name", username);
                formData.append("phoneNumber", email);
                formData.append("password", pass);
                axios.post(`${Config.BACKEND_API}/api/user`, formData, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then((response) => {
                        setLoader(false)
                        UpdateLoginContext.setData(response.data)
                        topMessage("You have Signedup successfully")
                        flag(false)
                    })
                    .catch((err) => {
                        setLoader(false)
                        topMessage(err.response.data.message)
                    })
            }
            else {
                setLoader(false)
                topMessage('Kindly use valid information during Signup')

            }
        }
    }

    let options = {
        title: 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    function PickImage() {
        launchImageLibrary(options,
            (response) => {

                if (response.didCancel) {
                    topMessage('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    topMessage('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: response.uri };
                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    setImage(response.assets[0])
                }
            })
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.body}>
            <TouchableOpacity style={{ width: '130%', height: '130%', marginTop: 0, zIndex: 0, position: 'absolute' }} onPress={() => flag(false)}></TouchableOpacity>
            <Container style={styles.subBody} >
                <Text style={styles.headText}>SIGN UP</Text>
                {image == ' ' ?
                    (
                        <TouchableOpacity style={{ position: 'relative' }} onPress={PickImage}>
                            <View style={styles.camera}>
                                <Image style={{ width: 10, height: 10 }} source={Camera} />

                            </View>
                            <View style={styles.logo}>
                                <Image style={{ width: 35, height: 40, resizeMode: 'stretch' }} source={ProfilePic} />
                            </View>
                        </TouchableOpacity>
                    )

                    :
                    (
                        <TouchableOpacity style={{ position: 'relative' }} onPress={PickImage}>
                            <View style={styles.camera}>
                                <Image style={{ width: 10, height: 10 }} source={Camera} />

                            </View>
                            <View style={styles.logo1}>
                            <Image style={{width:100, resizeMode:'contain'}} source={image} />
                                
                            </View>
                        </TouchableOpacity>
                    )
                }

                <View style={styles.textWidth}>
                    <Text style={styles.text}>Name</Text>
                </View>
                <View style={styles.setItems}>
                    <Item style={{ borderBottomWidth: 0 }}>
                        <Input value={username} onChangeText={e => setUsername(e)} style={styles.fieldText} />
                    </Item>
                </View>
                <View style={styles.textWidth}>
                    <Text style={styles.text}>Email or Phone</Text>
                </View>
                <View style={styles.setItems}>
                    <Item style={{ borderBottomWidth: 0 }}>
                        <Input value={email} onChangeText={e => setEmail(e)} style={styles.fieldText} />
                    </Item>
                </View>
                <View style={styles.textWidth}>
                    <Text style={styles.text}>Password</Text>
                </View>
                <View style={styles.setItems}>
                    <Item style={styles.setPassword}>
                        <Input secureTextEntry={hide} value={pass} onChangeText={e => setPass(e)} style={styles.fieldText} />
                        <TouchableOpacity style={{ width: '7%', height: '20%' }} onPress={() => setHide(!hide)}>

                            {hide ? <Image style={styles.eye} source={Eye} /> : null}
                            {hide ? null : <Image style={styles.hideEye} source={Hide} />}
                        </TouchableOpacity>
                        {/* <Image style={styles.eye} source={Hide} /> */}
                    </Item>
                </View>
                <View style={styles.textWidth}>
                    <Text style={styles.text}>Re-Type Password</Text>
                </View>
                <View style={styles.setItems}>
                    <Item style={{ borderBottomWidth: 0 }}>
                        <Input secureTextEntry={rehide} style={styles.fieldText} value={repass} onChangeText={e => setRePass(e)} />
                        <TouchableOpacity style={{ width: '11%', height: '20%' }} onPress={() => setReHide(!rehide)}>

                            {rehide ? <Image style={styles.eye} source={Eye} /> : null}
                            {rehide ? null : <Image style={styles.hideEye} source={Hide} />}
                        </TouchableOpacity>
                    </Item>
                </View>
                {loader ?
                    (
                        <ActivityIndicator size="large" color="#60A5A5" />
                    )
                    :
                    (
                        <TouchableOpacity onPress={Signup} style={styles.button2}>
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                    )}

                <Text style={styles.seperator}>Or</Text>
                <TouchableOpacity style={styles.button3}>
                    <Image style={{ width: '7%', height: '35%', marginRight: '3%' }} source={Facebook} />
                    <Text style={styles.buttonText2}>Sign up with facebook</Text>
                </TouchableOpacity>
                <View style={styles.bottomText}>
                    <Text style={styles.headText2}>Already have an account?<Text style={styles.subheadText} onPress={() => { setLogin(true); flag(false); }}>Sign in !</Text></Text>
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
        zIndex: 100,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: '5%',

    },
    subheadText: {
        color: '#60A5A5',
        fontWeight: '700'
    },
    eye: {
        width: 20,
        height: 13,
        resizeMode: 'stretch',
        position: 'absolute'

    },
    seperator: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 15

    },
    hideEye: {
        width: 20,
        height: 18,
        resizeMode: 'stretch',
        position: 'absolute'

    },
    camera: {
        padding: 7,
        backgroundColor: 'pink',
        borderRadius: 30,
        position: 'absolute',
        zIndex: 100000,
        right: -5,
        top: -10,
        borderWidth: 1,
        borderColor: 'white',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    setItems: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5
    },
    setInputText: {
        width: '100%',
        height: '5%',
        margin: '2%'
    },
    setPassword: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 0,
        width: '95%',
        justifyContent: 'center',
    },
    headText: {
        color: '#60A5A5',
        fontWeight: '700',
        width: '100%'
    },
    headText2: {
        width: '100%',
        textAlign: 'center',
        // marginTop:20,
        fontSize: 13
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
        marginTop: 5,
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
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        padding: '5%',
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
        width: 100,
        height: 100,
        borderRadius: 25,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo1: {
        width: 100,
        height: 100,
        borderRadius: 25,
        overflow:'hidden',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
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
        backgroundColor: 'white',
        shadowColor: "white",
        padding: '2%',

    },
    items: {
        margin: 8,
        padding: 10,
        width: '90%',
        backgroundColor: 'rgba(255,255,255, 0.9)',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center'
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
