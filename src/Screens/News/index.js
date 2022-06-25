import React, { useState, useContext } from 'react';
import { Button, ImageBackground, Text, ScrollView } from 'react-native';
import { Icon, View, Item, Input } from 'native-base'
import { StyleSheet, Image, } from 'react-native'
import Indianapolis from '../../assets/indianapolis.png'
import Record from '../../assets/record.png';
import Cars from '../../assets/cars.png'
import Login from '../../Components/LoginScreen'
import Signup from '../../Components/Signup'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import News1 from '../../assets/Dashboard/News/news1.png'
import News2 from '../../assets/Dashboard/News/news2.png'
import News3 from '../../assets/Dashboard/News/news3.png'
import News4 from '../../assets/Dashboard/News/news4.png'
import IndianaBar from '../../Components/IndianaBar'
import { useFocusEffect } from '@react-navigation/native';
import LoginContext from '../../Context/LoginContext';

export default function Interactions({ navigation, route }) {
    const [indianaFlag, setndianaFlag] = useState(false)
    const SetScreen = useContext(LoginContext)

    useFocusEffect(() => {
        SetScreen.setScreen(route.name)
    })
    return (
        <ImageBackground style={styles.body} source={require('../../assets/background.png')}>


            { indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}

            <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

            <Image style={styles.avatar} source={require('../../assets/Dashboard/Interaction/police.png')} />

            <View style={styles.formBody}>
                <View style={styles.topHeader}>
                    <Text style={styles.headerText}>News</Text>
                </View>
                <ScrollView style={styles.itemBody} horizontal>
                    <View >
                        <ScrollView nestedScrollEnabled={true} style={styles.setForm}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom:20 }}>
                                <Image style={styles.newsImage} source={News1} />
                                <Text style={styles.newHeadline}>FBI Document sheds light on White Supremicist Infiltrating Police Departments Around the Country - The Intercept</Text>
                                <Text style={styles.Desc}>Previously redacted from FBI Document</Text>
                                <Text style={styles.Desc}>—“Having personnel within law enforcement agencies has historically been and will continue to be a desired asset for white supremacist groups seeking to anticipate law enforcement interest in and actions against them,”</Text>

                                <Text style={styles.Date}>Sept 29, 2020</Text>
                                <Text style={styles.Link}>Link</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View >
                        <ScrollView nestedScrollEnabled={true} style={styles.setForm}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom:20 }}>
                                <Image style={styles.newsImage} source={News2} />
                                <Text style={styles.newHeadline}>Justice Dept. Investigation into Baltimore Police Dept. Finds officers regularly breaking The law</Text>
                                <Text style={styles.Desc}>The Justice department found reasonable cause to believe that BPD engages in a pattern or practice of:</Text>
                                <Text style={styles.Desc}>• Conducting stops, searches and arrests without meeting the requirements of the Fourth Amendment;• Focusing enforcement strategies on African Americans, leading to severe and unjustified racial disparities in violation of Title VI of the Civil Rights Act and the Safe Streets Act;
                                • Using unreasonable force in violation of the Fourth Amendment;
                                • Interacting with individuals with mental health disabilities in a manner that violates the Americans with Disabilities Act; and
• Interfering with the right to free expression in violation of the First Amendment.</Text>

                                <Text style={styles.Date}>Aug 10, 2016</Text>
                                <Text style={styles.Link}>Link</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View >
                        <ScrollView nestedScrollEnabled={true} style={styles.setForm}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom:50 }}>
                                <Image style={styles.newsImage} source={News3} />
                                <Text style={styles.newHeadline}>Cop Reveals White Supremacists Join Police Forces Secretly — CBS News</Text>
                                {/* <Text style={styles.Desc}>The Justice department found reasonable cause to believe that BPD engages in a pattern or practice of:</Text> */}
                                <Text style={styles.Desc}>Quote from Officer“30 years ago we were skin heads, we wore Swastikas and shaved heads, and you could identify us pretty easily, so we decided at that time to grow our hair out, trade in our boots for suits, and we encouraged people to get jobs in law enforcement, to go to the military and get training and to recruit there”</Text>

                                <Text style={styles.Date}>Jun 8, 2020</Text>
                                <Text style={styles.Link}>Link</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View >
                        <ScrollView nestedScrollEnabled={true} style={styles.setForm}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom:20 }}>
                                <Image style={styles.newsImage} source={News4} />
                                <Text style={styles.newHeadline}>976 people have been shot and killed by police in the past year</Text>
                                {/* <Text style={styles.Desc}>The Justice department found reasonable cause to believe that BPD engages in a pattern or practice of:</Text> */}
                                <Text style={styles.Desc}>— a Post investigation found that the FBI undercounted fatal police shootings by more than half. This is because reporting by police departments is voluntary and many departments fail to do so.</Text>

                                <Text style={styles.Date}>Nov 22, 2020</Text>
                                <Text style={styles.Link}>Link</Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.setCars}>
                <Image style={styles.carImage} source={Cars} />
            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        position: 'relative',
        width: '100%',
        backgroundColor: '#D1726D',
        zIndex: 0
    },
    newsImage: {
        width: '90%',
        resizeMode: 'stretch',
        height: 100
    },
    Desc: {
        fontSize: 13,
        width: '90%',
        marginBottom: 10
    },
    Date: {
        fontSize: 14,
        color: '#E734CD',
        fontWeight: 'bold',
        textAlign: 'left',
        width: '90%',
        marginBottom: 10
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

    avatar: {
        position: 'absolute',
        width: 150,
        height:350,
        resizeMode: 'contain',
        left: '30%',
        top: '25%',
    },
    setText: {
        fontSize: 11
    },
    Link: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#345DE7',
        width: '90%',
        textDecorationLine: 'underline'
    },
    newHeadline: {
        color: '#E734CD',
        fontSize: 14,
        textAlign: 'center',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    topHeader: {
        padding: '1%',
        backgroundColor: 'white',
        borderRadius: 15,
        width: '90%',
        borderWidth: 2,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    formBody: {
        width: '100%',
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
        fontWeight: 'bold'
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
        backgroundColor: '#e0e0e0',
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
        // width: '100%',
        padding: 15,
        marginTop: '15%',
        marginHorizontal: 5,
        marginVertical: 5
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
        height: 430,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        padding: 5,
        width: 300,
        textAlign: 'center',
        marginRight: 30,
        marginLeft: 5,
        // justifyContent: 'center',
        // textAlign: 'center',
        // alignItems: 'center',
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

