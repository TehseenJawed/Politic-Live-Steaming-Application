import React, { useState } from 'react';
import { Container, Text, View, Icon } from 'native-base';
import { StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { withDecay } from 'react-native-reanimated';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IndianaArtBoard from '../../Components/IndianaArtboard';
import AskALot from '../../Components/AskALot';
import DoNotConsent from '../../Components/DoNotConsent';
import Hammer from '../../assets/Dashboard/Interaction/hammer.png'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IndianaBar from '../../Components/IndianaBar'


const Tab = createMaterialTopTabNavigator();

function OnFoot({ navigation }) {
    const [slider, setSlider] = useState(0)
    const [DonotConcent, setDonotConcent] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)

    const [askaLot, setAskaLot] = useState(false)
    function Component1() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/Dashboard/Interaction/InteractionAvatar.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                    {DonotConcent ? <DoNotConsent flag={setDonotConcent} /> : null}
                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <View style={styles.containImage}>
                        <Image style={styles.backImage} source={require('../../assets/Dashboard/Interaction/police.png')} />
                        <Image style={styles.backBubble} source={require('../../assets/BubbleImages/athome1.png')} />
                    </View>
                    <TouchableOpacity style={styles.hiddenForm1} onPress={() => navigation.navigate('DonotGive')}></TouchableOpacity>
                    <ScrollView>
                        <View style={styles.cardBody2}>
                            <Text style={styles.cardHeader}>Guidlines</Text>
                            <Text style={styles.cardDesc1}>*When the officer asks for your I.D.</Text>
                            <Text style={styles.cardDesc2}>Respectfully ask for the reason for the Stop</Text>

                            <Text style={styles.exampleHeader}>Examples</Text>

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

                            <View style={styles.instruction}>
                                <View style={styles.subInstruction2}>
                                    <Text style={styles.subText1}>If an officer refuses to state or is unable to state Probable cause then you can’t be legally <Text style={{ fontSize: 12 }}>DETAIN</Text> Nor do you have to provide your I.D.</Text>
                                </View>
                                <Image style={styles.biArrow} source={require('../../assets/Dashboard/Interaction/biArrow.png')} />
                                <View style={styles.subInstruction}>
                                    <Text style={styles.subText2}>If officer giver you valid reason, respectfully allow the officer to Detain you and give your identification <Text style={{ textDecorationLine: 'underline', fontSize: 12 }}>Swipe Right for detainment</Text></Text>
                                </View>
                            </View>

                            <View style={styles.instruction}>
                                <Image style={styles.biArrow2} source={require('../../assets/Dashboard/AtHome/arrow2.png')} />
                                <View style={styles.subInstruction6}>
                                    <Text style={styles.subText2}>If an officer an officer still tries to illegally detain you, Let the officer know that</Text>
                                </View>
                                <Image style={styles.biArrow} source={require('../../assets/Dashboard/AtHome/arrow3.png')} />
                                <View style={styles.subInstruction2}>
                                    <Text style={styles.subText4}>*Memorize</Text>
                                    <Text style={styles.subText2}>“Im exercising my <Text style={{ color: '#F87E0A', fontSize: 10, fontWeight: 'bold' }}>4th Amendment Right</Text> to protect Myself and my identification from unreasonable search and seizure “</Text>
                                </View>
                            </View>
                            <Image style={styles.biArrow3} source={require('../../assets/Dashboard/AtHome/arrow4.png')} />

                            <View style={styles.subInstruction7}>
                                <Text style={styles.subText2}>Allow yourself to be detained. Remember to always record interactions Use <Text style={{ color: '#F87E0A', fontSize: 12, fontWeight: 'bold' }}>Questioning </Text> Exercises to the Officers Questions</Text>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
    function Component2() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/Dashboard/Interaction/InteractionAvatar.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                    <TouchableOpacity style={styles.hiddenForm2} onPress={() => setAskaLot(true)} ></TouchableOpacity>

                    {askaLot ? <AskALot flag={setAskaLot} /> : null}
                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <View style={styles.containImage}>
                        <Image style={styles.backImage} source={require('../../assets/model2.png')} />
                        <Image style={styles.backBubble} source={require('../../assets/BubbleImages/onfoot2.png')} />
                    </View>
                    <ScrollView>
                        <View style={styles.questioning}>

                            <Text style={styles.questioningHeader}>Questioning</Text>
                            <Text style={styles.subQuestioning}>To Questions Like</Text>
                            <ScrollView nestedScrollEnabled={true} style={styles.exampleBox1}>
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
                            <Text style={styles.desc} >Are There Any Weapons in the Car?</Text>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
    function Component3() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/Dashboard/Interaction/InteractionAvatar.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <View style={styles.containImage3}>
                        <Image style={styles.backImage3} source={require('../../assets/model2.png')} />
                        {/* <Image style={styles.backBubble} source={require('../../assets/BubbleImages/athome1.png')} /> */}
                    </View>
                    <ScrollView>
                        <View style={styles.questioning3}>

                            <Text style={styles.res3Header}>Detainment / Arrested Pt. 1</Text>


                            <Text style={styles.resSubHeading}>Always Be prepared to be Detained Or Arrested (Make Blatant effort to Not Resist)</Text>
                            <Text style={styles.resSubDesc}>Detain - to hold a person in custody, often for purposes of questioning.</Text>
                            <Text style={styles.resSubDesc}>A law enforcement officer needs to have a reasonable suspicion of unlawful activity to detain a person.</Text>
                            <Text style={styles.resSubHeading}>If you ever suspect that you are being Detained.</Text>
                            <Text style={styles.subHead}>Respectfully Ask</Text>
                            <Text style={styles.resSubHeading2}>“Am I Being Detained?”</Text>
                            <Text style={styles.setSubtext}>If Yes</Text>

                            <View style={styles.bottomBody}>
                                <View style={styles.subInstruction3}>
                                    <Text style={styles.subText3}>Ask “What crime am I committing, have committed, or about to commit?”</Text>
                                </View>
                                <Image style={styles.arrow2} source={require('../../assets/Dashboard/Onfoot/arrow2.png')} />
                                <Text style={styles.ifNo}>If No</Text>
                                <Image style={styles.arrow3} source={require('../../assets/Dashboard/Onfoot/arrow3.png')} />
                            </View>
                            <View style={styles.setCrime}>
                                <Text style={styles.setSubtext}>If a crime</Text>
                                <Image source={require('../../assets/Dashboard/Onfoot/arrow1.png')} />
                            </View>

                            <View style={styles.setFollow}>
                                <View style={styles.subInstruction4}>
                                    <Text style={styles.subText3}>Then follow the officers directions to To be detained possibly Handcuffed <Text style={{ textDecorationLine: 'underline', fontSize: 13 }}>Use Questioning Ex</Text></Text>
                                </View>
                                <Text style={styles.ifCrime}>If NOT a crime</Text>
                            </View>

                            <View style={styles.subInstruction5}>
                                <Text style={styles.subText3}>
                                    Then you can legally stay in the public place And can't be legally detained.
                             </Text>
                            </View>
                            <TouchableOpacity>
                                <View style={styles.setBottom}>
                                    <Text style={styles.setbottomFont}>
                                        *Request a supervisor if you feel The officer is violating your rights
                             </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
    function Component4() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/Dashboard/Interaction/InteractionAvatar.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />

                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <View style={styles.containImage3}>
                        <Image style={styles.backImage3} source={require('../../assets/model2.png')} />
                        {/* <Image style={styles.backBubble} source={require('../../assets/BubbleImages/athome1.png')} /> */}
                    </View>
                    <ScrollView>
                        <View style={styles.questioning3}>

                            <Text style={styles.res3Header}>Detainment / Arrested Pt. 2</Text>


                            <Text style={styles.resSubHeading}>Always Be prepared to be Detained Or Arrested (Make Blatant effort to Not Resist)</Text>
                            <Text style={styles.resSubDesc}>Arrest - Generally made with an arrest warrant. An arrest may be made without a warrant if <Text style={{ color: 'red' }}>Probable Cause</Text> and exigent circumstances are presented at the time of the arrest.</Text>
                            <Text style={styles.resSubHeading}>If you ever suspect that you are being Arrested.</Text>
                            <Text style={styles.subHead}>Respectfully Ask</Text>
                            <Text style={styles.resSubHeading2}>“Am I Being Arrested?”</Text>
                            <Text style={styles.setSubtext}>If Yes</Text>

                            <View style={styles.bottomBody}>
                                <View style={styles.subInstruction3}>
                                    <Text style={styles.subText3}>Ask “What crime am I committing, have committed, or about to commit?”</Text>
                                </View>
                                <Text style={styles.ifNo}>If No</Text>
                                <Image style={styles.arrow2} source={require('../../assets/Dashboard/Onfoot/arrow2.png')} />
                                <Image style={styles.arrow3} source={require('../../assets/Dashboard/Onfoot/arrow3.png')} />
                            </View>
                            <View style={styles.setCrime}>
                                <Text style={styles.setSubtext}>If a crime</Text>
                                <Image source={require('../../assets/Dashboard/Onfoot/arrow1.png')} />
                            </View>

                            <View style={styles.setFollow}>
                                <View style={styles.subInstruction4}>
                                    <Text style={styles.subText3}>Then follow the officers directions to To be arrested <Text style={{ textDecorationLine: 'underline', fontSize: 13 }}>Use Questioning Ex</Text></Text>
                                </View>
                                <Text style={styles.ifCrime}>If NOT a crime</Text>
                            </View>

                            <View style={styles.subInstruction5}>
                                <Text style={styles.subText3}>
                                    Then you can legally stay in the public place And can't be legally detained.
                             </Text>
                            </View>
                            <View style={styles.setBottom}>
                                <Text style={styles.setbottomFont}>
                                    *Request a supervisor if you feel The officer is violating your rights
                             </Text>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={styles.centerCards}>
                        <View style={styles.unSelectcrumbs}></View>
                        <View style={styles.unSelectcrumbs}></View>
                        <View style={styles.unSelectcrumbs}></View>
                        <View style={styles.crumbs}></View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
    return (
        // <Container style={styles.body}>
        //     <SetDriver />
        // </Container>

        <Tab.Navigator tabBar={() => <View></View>}>
            <Tab.Screen swipeEnabled={true} name="Home" component={Component1} />
            <Tab.Screen swipeEnabled={true} name="Home2" component={Component2} />
            <Tab.Screen swipeEnabled={true} name="Home3" component={Component3} />
            <Tab.Screen swipeEnabled={true} name="Home4" component={Component4} />
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
    containImage: {
        position: 'absolute',
        left: '0%',
        top: '15%',
    },
    containImage3: {
        position: 'absolute',
        left: '20%',
        top: '5%',
    },
    backImage: {
        width: 250,
        height: 400,
        resizeMode: 'contain'
    },
    backImage3: {
        width: 250,
        height: 400,
        resizeMode: 'contain'
    },
    backBubble: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        right: '-25%',
        top:'-10%'
    },
    hiddenForm1: {
        width: 200,
        height: 100,
        position: 'absolute',
        top: 0,
        left: '32%',
        zIndex: 1000
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
    LongArrow: {
        position: 'absolute',
        zIndex: 10000,
        left: -10,
        top: 120
    },
    biArrow: {
        position: 'absolute',
        marginTop: -10
    },
    biArrow2: {
        position: 'absolute',
        left: 0,
        marginTop: -15
    },
    arrow2: {
        position: 'absolute',
        left: '60%',
        top: '85%'
    },
    arrow3: {
        position: 'absolute',
        right: '0%',
        top: '40%'
    },
    biArrow3: {
        marginTop: -10
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
    hiddenForm2: {
        width: 250,
        height: 150,
        position: 'absolute',
        right: 0,
        top: 35,
        zIndex: 10000
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
        width: '45%',
        borderRadius: 15,
        padding: 5,
        borderWidth: 1,
        borderColor: '#FF0000',
        backgroundColor: 'rgba(255,0,0,0.2)',
        marginLeft: 5
    },
    subText: {
        textAlign: 'center'
    },
    subText1: {
        textAlign: 'center',
        color: 'red',
        fontSize: 11,
    },
    subText2: {
        textAlign: 'center',
        fontSize: 11,
    },
    subText4: {
        textAlign: 'center',
        fontSize: 13,
        color: 'red',
        fontWeight: 'bold'
    },
    listText: {
        fontSize: 14
    },
    clickLink: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 14,
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
        padding: 5,
        height: 70
    },
    listType: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 20,
        margin: 10
    },
    List: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    subInstruction2: {
        width: '45%',
        borderRadius: 15,
        padding: 5,
        borderWidth: 1,
        borderColor: '#58A573',
        backgroundColor: 'rgba(88,165,115,0.2)',
        marginLeft: 5
    },
    subInstruction6: {
        width: '45%',
        height: 100,
        borderRadius: 40,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#58A573',
        backgroundColor: 'rgba(88,165,115,0.2)',
        marginLeft: 5
    },
    exampleHeader: {
        fontSize: 15,
        textAlign: 'left',
        justifyContent: 'flex-start',
        width: 330,
        marginLeft: 40
    },
    cardBody: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '35%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.80,
        shadowRadius: 20,

        elevation: 0,

        elevation: 7,
    },
    cardBody2: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        borderRadius: 10,
        paddingTop: '5%',
        paddingBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.80,
        shadowRadius: 20,

        elevation: 0,

        elevation: 7,
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cardDesc1: {
        color: '#20D109',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cardDesc2: {
        color: '#FA1844',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',

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
    resSubDesc: {
        textAlign: 'center',
        width: '90%',
        fontSize:12
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
        padding: 5,
        height: 100
    },
    listText1: {
        fontSize: 13
    },
    questioning: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        paddingTop: '5%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.80,
        shadowRadius: 20,

        elevation: 0,

        elevation: 7,
    },
    questioningHeader: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    subQuestioning: {
        fontSize: 14,
        marginTop: 10,
        color: '#58A573',
        fontWeight: 'bold'
    },
    desc: {
        fontWeight: 'bold',
        width: '90%',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 25
    },
    set2ndLink: {
        fontSize: 13,
        textDecorationLine: 'underline',
        margin: -5
    },
    hiddenForm: {
        width: 200,
        height: 130,
        position: 'absolute',
        right: 0,
        top: 40,
        zIndex: 0
    },
    // Driver 3
    res3Header: {
        fontSize: 16,
        width: '80%',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resSubHeading: {
        fontSize: 14,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    resSubHeading2: {
        fontSize: 16,
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
        width: 170,
        height:70,
        borderColor: '#E734CD',
        backgroundColor: 'rgba(231,52,205,0.2)',
        borderRadius: 20,
        padding: 10,
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
    subText3: {
        fontSize: 11,
        textAlign: 'center',

    },
    ifNo: {
        fontSize: 17,
        marginLeft: 15,
        color: '#F87E0A',
        fontWeight: 'bold'
    },
    subHead: {
        fontSize: 15,
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
        width: 175,
        height:80,
        borderColor: '#FF0000',
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderRadius: 30,
        padding: 10,
        borderWidth: 1,
        marginLeft: 20,
    },
    setbottomFont: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    setBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    ifCrime: {
        fontSize: 14,
        marginLeft: 10,
        color: '#E734CD',
        fontWeight: 'bold'
    },
    questioning3: {
        backgroundColor: 'white',
        position: 'relative',
        borderWidth: 1,
        margin: 15,
        paddingTop:'3%',
        paddingBottom:'3%',
        marginTop:'20%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.80,
        shadowRadius: 20,

        elevation: 0,

        elevation: 7,
    },
    subInstruction5: {
        width: '90%',
        borderColor: '#F87E0A',
        backgroundColor: 'rgba(248,126,10,0.2)',
        borderRadius: 15,
        padding: 10,
        borderWidth: 1,
        marginTop: 15,
    },
    subInstruction7: {
        width: '90%',
        borderColor: '#58A573',
        backgroundColor: 'rgba(88,165,115,0.2)',
        borderRadius: 15,
        padding: 5,
        borderWidth: 1,
        marginTop: 1
    },
});
export default OnFoot
