import React, { useState, useContext } from 'react';
import { Button, TouchableOpacity, Text, ScrollView, ImageBackground } from 'react-native';
import { Icon, View, Item, Input, Switch } from 'native-base'
import { StyleSheet, Image, } from 'react-native'
import Indianapolis from '../../assets/indianapolis.png'
import Record from '../../assets/record.png';
import Cars from '../../assets/cars.png'
import Login from '../../Components/LoginScreen'
import Signup from '../../Components/Signup'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import IndianaBar from '../../Components/IndianaBar'
import Mailer from 'react-native-mail';
import { showMessage, hideMessage } from "react-native-flash-message";
import LoginContext from '../../Context/LoginContext'

export default function Interactions({ navigation }) {
    const [indianaFlag, setndianaFlag] = useState(false)
    const userLogin = useContext(LoginContext)
    const handleEmail = () => {
        Mailer.mail({
            subject: 'Politicme : Support',
            recipients: ['admin@smallapartment.com'],
            //   ccRecipients: ['supportCC@example.com'],
            //   bccRecipients: ['supportBCC@example.com'],
            body: '<b>PoliticMe</b>',
            customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
            isHTML: true,
            attachments: [{
                // Specify either `path` or `uri` to indicate where to find the file data.
                // The API used to create or locate the file will usually indicate which it returns.
                // An absolute path will look like: /cacheDir/photos/some image.jpg
                // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
                path: '', // The absolute path of the file from which to read data.
                uri: '', // The uri of the file from which to read the data.
                // Specify either `type` or `mimeType` to indicate the type of data.
                type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                mimeType: '', // - use only if you want to use custom type
                name: '', // Optional: Custom filename for attachment
            }]
        }, (error, event) => {
            Alert.alert(
                error,
                event,
                [
                    { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
                    { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
                ],
                { cancelable: true }
            )
        });
    }
    console.log('This is data ===> ',userLogin.data)
    
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
    function Logout() {
        userLogin.setData(' ')
        topMessage('You have logged out successfully')
    }
    return (
        <ImageBackground style={styles.image} source={require('../../assets/Dashboard/Interaction/InteractionAvatar.png')}>
            <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
            <View style={styles.body}>
                {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                <View style={{ width: '90%', height: '90%' }}>
                    <ImageBackground style={styles.setInput} imageStyle={{ borderRadius: 15 }} source={require('../../assets/Dashboard/sidemenu.png')}>
                        <View style={{ borderWidth: 3, width: '100%', height: '100%', borderRadius: 15, padding: 20 }}>
                            <Text style={styles.header}>Settings</Text>
                            <TouchableOpacity onPress={handleEmail} style={styles.items}>
                                <Text style={styles.itemText}>Contact Us</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { userLogin.data !== " " ? topMessage('We are developing this feature') : topMessage('Please login to continue') }} style={styles.items}>
                                <Text style={styles.itemText}>Notifications</Text>
                            </TouchableOpacity>
                            <View style={styles.items}>
                                <Text style={styles.itemText}>Share Live</Text>
                                <Switch tintColor="transparent" value={true} thumbTintColor={"#51c39d"} onTintColor="transparent" style={styles.goLive} />
                            </View>
                            <TouchableOpacity onPress={() => topMessage('We are developing this feature')} style={styles.items}>
                                <Text style={styles.itemText}>Change Password</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => topMessage('We are developing this feature')} style={styles.items}>
                                <Text style={styles.itemText}>Suggestions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Disclaimer')} style={styles.items}>
                                <Text style={styles.itemText}>Disclaimer</Text>
                            </TouchableOpacity>
                            {userLogin.data !== ' ' ?
                                (
                                    <TouchableOpacity onPress={Logout} style={styles.items}>
                                        <Text style={styles.itemText}>Sign Out</Text>
                                    </TouchableOpacity>
                                )
                                :
                                (
                                    <View>
                                        
                                    </View>
                                )}

                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.setCars}>
                    <Image style={styles.carImage} source={Cars} />
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    body: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    goLive: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    formBody: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    Indianapolis: {
        width: 150,
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
    items: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    },
    itemText: {
        fontSize: 15,
        fontWeight: 'bold',
        width: '60%',
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
        zIndex: -1
    },
    setInput: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        borderWidth: 0,
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

