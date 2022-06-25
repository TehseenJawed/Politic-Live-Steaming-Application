import React, { useState } from 'react';
import { Container, Text, View, Icon } from 'native-base';
import { StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { withDecay } from 'react-native-reanimated';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IndianaArtBoard from '../../Components/IndianaArtboard';
import AskALot from '../../Components/AskALot';
import DoNotConsent from '../../Components/DoNotConsent'
import IndianaBar from '../../Components/IndianaBar'
import Hammer from '../../assets/Dashboard/Interaction/hammer.png'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function Driver({ navigation }) {
    const [slider, setSlider] = useState(0)
    const [DonotConcent, setDonotConcent] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)

    const [askaLot, setAskaLot] = useState(false)

    function Component1() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>
                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
                    {DonotConcent ? <DoNotConsent flag={setDonotConcent} /> : null}
                    {/* {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null} */}
                    <TouchableOpacity style={styles.hiddenForm1} onPress={() => setDonotConcent(true)}></TouchableOpacity>
                    
                    <View style={styles.containImage}>
                      <Image style={styles.backImage} source={require('../../assets/Dashboard/Interaction/police.png')} />
                      <Image style={styles.backBubble} source={require('../../assets/BubbleImages/driverinner1.png')} />
                    </View>
                    
                    <ScrollView>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardHeader}>Guidlines</Text>
                            <Text style={styles.cardDesc1}>*Before Officer get out of car</Text>
                            <Text style={styles.cardDesc2}>Get out your license and registration</Text>
                            <Text style={styles.cardDesc1}>*After Officer Gets to Window</Text>
                            <Text style={styles.subDesc}>*Hopefully Officer lets you know why they are pulling you over</Text>

                            <View style={styles.instruction}>
                                <View style={styles.subInstruction}>
                                    <Text style={styles.subText}>Once you know why you're pulled over</Text>
                                </View>
                                <Image style={styles.biArrow} source={require('../../assets/Dashboard/Interaction/biArrow.png')} />
                                <View style={styles.subInstruction2}>
                                    <Text style={styles.subText}>Once you know why you're pulled over</Text>
                                </View>
                                <Image style={styles.bootomArrow} source={require('../../assets/Dashboard/Interaction/arrow.png')} />
                            </View>
                            <Text style={styles.cardDesc21}>Respectfully ask for what the violation is</Text>
                            <Text style={styles.exampleHeader}>Examples</Text>

                            <Image style={styles.firstLongArrow} source={require('../../assets/Dashboard/Interaction/longArrow.png')} />
                            <ScrollView nestedScrollEnabled={true} style={styles.exampleBox}>
                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}>“What’s the cause for the stop?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}> “What’s the reason for the stop officer?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}>“I break any laws officer?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}> “What seems to be the problem officer?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}>  “What seems to be the reason for the stop?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}>“Hello Officer, Whats the issue?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText}> “Hey Officer, What’s the violation?”</Text>
                                </View>
                            </ScrollView>

                            <View style={styles.linkBody}>
                                <Text style={styles.clickLink}>Click to find out why</Text>
                            </View>
                            <Text style={styles.cardDesc2} >Hand over License and Registration</Text>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
    function Component2() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                    <TouchableOpacity onPress={() => setAskaLot(true)} style={styles.hiddenForm}></TouchableOpacity>
                    <View style={styles.containImage2}>
                      <Image style={styles.backImage} source={require('../../assets/Dashboard/Interaction/police.png')} />
                      <Image style={styles.backBubble2} source={require('../../assets/BubbleImages/driverinner2.png')} />
                    </View>
                    {askaLot ? <AskALot flag={setAskaLot} /> : null}
                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <View style={styles.questioning}>

                        <Text style={styles.questioningHeader}>Questioning</Text>
                        <Text style={styles.subQuestioning}>To Questions Like</Text>
                        <ScrollView style={styles.exampleBox1}>
                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}> Where are you headed?</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}> “Where are you coming from?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>“Have you been drinking?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>  “Do you live around here?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>  “What are you doing here?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>“Are there any drugs in the car?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}> “Hey Officer, What’s the violation?”</Text>
                            </View>
                        </ScrollView>

                        <Text style={styles.subQuestioning}>Memorize</Text>
                        <Text style={styles.desc}>“Im exercising my fifth Amendment Right to No Answer”</Text>

                        <Text style={styles.set2ndLink}>Click to find out why you have to say it this way</Text>
                        <Text style={styles.subQuestioning}>You Must Answer</Text>
                        <Text style={styles.desc}>Are There Any Weapons in the Car?</Text>

                    </View>
                </ImageBackground>
            </View>
        )
    }
    function Component3() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <ScrollView>
                        <View style={styles.questioning3}>

                            <Text style={styles.res3Header}>If you are ever asked to step Out of your vehicle for any Reason</Text>
                            <Text style={styles.exampleHeader}>Examples</Text>

                            <ScrollView nestedScrollEnabled={true} style={styles.exampleBox}>
                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText1}>“Do you mind to stepping out the vehicle?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText1}> “Step out pf the vehicle for me.”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText1}>“Can you step out the vehicle to speed. To speed up the process?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText1}> “Can you come to my vehicle to answer A few questions?”</Text>
                                </View>

                                <View style={styles.List}>
                                    <View style={styles.listType}></View>
                                    <Text style={styles.listText1}> “Can you step out of the car for a sec?”</Text>
                                </View>
                            </ScrollView>

                            <Text style={styles.resSubHeading}>Respectfully Ask</Text>
                            <Text style={styles.resSubHeading2}>“Am I Under Arrest?”</Text>
                            <Text style={styles.setSubtext}>If Yes</Text>

                            <View style={styles.bottomBody}>
                                <View style={styles.subInstruction3}>
                                    <Text style={styles.subText3}>Ask “What crime am I committing, have committed, or about to commit?”</Text>
                                </View>
                                <Text style={styles.ifNo}>If No</Text>
                                <Image style={styles.LongArrow} source={require('../../assets/longArrow.png')} />
                            </View>
                            <View style={styles.setCrime}>
                                <Text style={styles.setSubtext}>If a crime</Text>
                                <Image source={require('../../assets/arrow.png')} />
                                <Image style={styles.shortArrow} source={require('../../assets/shortArrow.png')} />
                            </View>

                            <View style={styles.setFollow}>
                                <View style={styles.subInstruction4}>
                                    <Text style={styles.subText3}>Then follow the officers directions to To exit the vehicle Questioning</Text>
                                </View>
                                <Text style={styles.ifCrime}>If NOT a crime</Text>
                            </View>

                            <View style={styles.subInstruction5}>
                                <Text style={styles.subText3}>
                                    Then you can legally stay in the car And request for the officer proceed with the Traffic stop by writing a ticket or giving a warning
                             </Text>
                            </View>
                            <View style={styles.setBottom}>
                                <Text style={styles.setbottomFont}>
                                    *Request a supervisor if you feel The officer is violating your rights
                             </Text>
                            </View>
                        </View>
                    </ScrollView>
                    
                </ImageBackground>
            </View>
        )
    }

    return (
        <Tab.Navigator tabBar={() => <View></View>}>
            <Tab.Screen swipeEnabled={true} name="Home" component={Component1} />
            <Tab.Screen swipeEnabled={true} name="Home2" component={Component2} />
            <Tab.Screen swipeEnabled={true} name="Home3" component={Component3} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({

    // Driver 1
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    backImage:{
        width:200,
        height:500,
        resizeMode:'contain'
    },
    backBubble:{
        width:100, 
        height:100,
        resizeMode:'contain',
        position:'absolute',
        left:'-25%'
    },
    
    backBubble2:{
        width:200, 
        height:100,
        resizeMode:'contain',
        position:'absolute',
        right:'-40%',
        zIndex:0,
        top:'10%'
    },
    containImage2:{
        position:'absolute',
        left:'5%',
        top:'10%',
    },
    containImage:{
        position:'absolute',
        left:'25%',
        top:'10%',
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
    },
    Indianapolis: {
        width: 20,
        marginRight: 5,
        resizeMode: 'contain'
    },

    setText: {
        fontSize: 11
    },
    firstLongArrow: {
        position: 'absolute',
        left: 0,
        top: '53%',
        zIndex: 1000
    },
    hiddenForm1: {
        width: 150,
        height: 100,
        position: 'absolute',
        top: 40,
        zIndex: 10000
    },
    biArrow: {
        position: 'absolute',
    },
    centerCards: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    crumbs: {
        backgroundColor: 'white',
        width: 8,
        height: 8,
        borderRadius: 10,
        margin: 4,
    },
    unSelectcrumbs: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 8,
        height: 8,
        margin: 4,
        borderRadius: 3
    },
    bootomArrow: {
        position: 'absolute',
        right: 10,
        top: 80
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    instruction: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    subInstruction: {
        width: 150,
        borderRadius: 50,
        padding: 15,
        borderWidth: 1,
        borderColor: '#F87E0A',
        backgroundColor: 'rgba(248,126,10,0.2)',
        margin: 10
    },
    subText: {
        textAlign: 'center',
        fontSize:13
    },
    listText: {
        fontSize: 14
    },
    clickLink: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 12,
    },
    linkBody: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 30,
    },
    exampleBox: {
        backgroundColor: '#EEEEEE',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        padding: 15,
        height: 70
    },
    listType: {
        width: 8,
        height: 8,
        backgroundColor: 'black',
        borderRadius: 20,
        margin: 10
    },
    List: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },
    subInstruction2: {
        width: 150,
        borderRadius: 50,
        padding: 15,
        borderWidth: 1,
        borderColor: '#58A573',
        backgroundColor: 'rgba(88,165,115,0.2)',
        margin: 10
    },
    exampleHeader: {
        fontSize: 15,
        textAlign: 'left',
        justifyContent: 'flex-start',
        width: 330,
        marginLeft: 50
    },
    cardBody: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        paddingTop:'5%',
        paddingBottom:'5%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '45%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cardDesc1: {
        color: '#1818FA',
        fontSize: 15,
        textAlign: 'center'
    },
    cardDesc2: {
        color: '#FA1844',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',

    },
    cardDesc21: {
        color: '#FA1844',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '85%'

    },
    subDesc: {
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        width: 200
    },
    image: {
        flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
    },

    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

    setButtons: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    recordIcon2: {
        width: 100,
        height: 75,
        margin: 20,
        resizeMode: 'stretch',

    },
    setCars: {
        position: 'absolute',
        bottom: 1,
    },
    carImage: {
        marginTop: -10,
        marginLeft: 130,
    },
    record: {
        width: 70,
        height: 50,
        resizeMode: 'stretch',
        marginLeft: 5
    },

    // Driver 2
    exampleBox1: {
        backgroundColor: '#D0DFD9',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        height:70,
        padding: 15,
    },
    listText1: {
        fontSize: 13
    },
    questioning: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        paddingTop:'5%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        zIndex:0,
        marginTop: '40%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 0,

    },
    questioningHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subQuestioning: {
        fontSize: 17,
        marginTop: 10,
        color: '#58A573',
        fontWeight: 'bold'
    },
    desc: {
        fontWeight: 'bold',
        width: '90%',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 25
    },
    set2ndLink: {
        fontSize: 13,
        textDecorationLine: 'underline',
        margin: 10
    },
    hiddenForm: {
        width: 200,
        height: 110,
        position: 'absolute',
        right: 0,
        top: 100,
        zIndex:100000000,
    },
    // Driver 3
    res3Header: {
        fontSize: 15,
        width: '80%',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resSubHeading: {
        fontSize: 15,
        color: '#F87E0A',
        fontWeight: 'bold'
    },
    resSubHeading2: {
        fontSize: 18,
        color: '#60A5A5',
        fontWeight: 'bold'
    },
    setSubtext: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#E734CD'
    },
    subInstruction3: {
        width: 180,
        height:70,
        borderColor: '#E734CD',
        backgroundColor: 'rgba(231,52,205,0.2)',
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderWidth: 1,
        marginLeft: 50,
    },
    bottomBody: {
        position: 'relative',
        backgroundColor: 'white',
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    shortArrow: {
        position: 'absolute',
        right: '20%',
        top: '0%',
        zIndex: 100
    },
    LongArrow: {
        position: 'absolute',
        right: '0%',
        top: '20%'
    },
    subText3: {
        fontSize: 11,
        textAlign: 'center'
    },
    ifNo: {
        fontSize: 20,
        marginLeft: 15,
        color: '#F87E0A',
        fontWeight: 'bold'
    },
    setCrime: {
        width: '90%',
        flexDirection: 'row'
    },
    setFollow: {
        flexDirection: 'row',
        width: '100%'
    },
    subInstruction4: {
        width: 180,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderColor: '#FF0000',
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderRadius: 20,
        borderWidth: 1,
        marginLeft: 20,
    },
    setbottomFont: {
        fontSize: 15,
        width:'80%',
        color: 'red',
        fontWeight: 'bold',
        textAlign:'center',
    },
    setBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    ifCrime: {
        fontSize: 14,
        marginLeft: 20,
        color: '#E734CD',
        fontWeight: 'bold'
    },
    questioning3: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        borderRadius: 10,
        paddingTop:25,
        paddingBottom:25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,

    },
    subInstruction5: {
        width: '90%',
        borderColor: '#F87E0A',
        backgroundColor: 'rgba(248,126,10,0.2)',
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        marginTop: 15
    },
});
export default Driver
