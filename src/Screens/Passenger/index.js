import React, { useState } from 'react';
import { Text, View } from 'native-base';
import { StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { withDecay } from 'react-native-reanimated';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import IndianaArtBoard from '../../Components/IndianaArtboard';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IndianaBar from '../../Components/IndianaBar'

function Driver({ navigation }) {
    const [slider, setSlider] = useState(0)
    const [indianaFlag, setndianaFlag] = useState(false)

    function Component1() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <ImageBackground style={styles.image} source={require('../../assets/background.png')} style={styles.image}>

                    <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
                    <View style={styles.containImage}>
                        <Image style={styles.backImage} source={require('../../assets/Dashboard/Interaction/police.png')} />
                        <Image style={styles.backBubble} source={require('../../assets/BubbleImages/pessanger1.png')} />
                    </View>
                    <TouchableOpacity style={styles.nextForm} onPress={() => navigation.navigate('DonotGive')}></TouchableOpacity>
                    {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
                    <View style={styles.cardBody}>
                        <Text style={styles.cardHeader}>Guidlines</Text>
                        <Text style={styles.cardsubDesc}>Some states require all pessengers to identify themselves <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 13 }}>check here</Text></Text>
                        <Text style={styles.cardsubHead}>*When the officer addresses you</Text>

                        <View style={styles.cardborder1}>
                            <Text style={styles.cardText}>If in a state where you must provide I.D. Cordially hand over your identification Or tell them your name and birthday in the case you don't have it on you</Text>
                            <Text style={styles.cardText1}>Use Questioning Ex</Text>
                        </View>

                        <View style={styles.cardborder2}>
                            <Text style={styles.cardText2}>If you are in a state where you don't have To provide I.D. then say</Text>
                        </View>

                        <View style={styles.cardborder2}>
                            <Text style={styles.cardText3}>“I don’t consent to give my I.D.” Use Questioning Ex</Text>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        )
    }
    function Component2() {
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
                            </View>
                            <View style={styles.setCrime}>
                                <Text style={styles.setSubtext}>If a crime</Text>
                                <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
                            </View>
                            <Image style={styles.sArrow} source={require('../../assets/shortArrow.png')} />
                            <Image style={styles.bArrow} source={require('../../assets/longArrow.png')} />
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
        <Swipeable renderRightActions={Component2}>
            <Component1 />
        </Swipeable>
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
    containImage: {
        position: 'absolute',
        right: '-15%',
        top: '10%',
    },
    backImage: {
        width: 300,
        height: 500,
        resizeMode: 'contain'
    },
    backBubble: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        left: '-15%'
    },

    setText: {
        fontSize: 11
    },
    listText1: {
        fontSize: 14
    },
    cardText2: {
        color: '#58A573',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cardText3: {
        color: '#A60AF8',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    nextForm: {
        position: 'absolute',
        width: 150,
        height: 150,
        top: 50,
        zIndex: 0
    },
    arrow: {
        position: 'absolute',
        left: 100
    },
    LongArrow: {
        position: 'absolute',
        zIndex: 10000,
        left: -10,
        top: 120
    },
    bArrow: {
        position: 'absolute',
        right: '0%',
        top: '50%'
    },
    sArrow: {
        position: 'absolute',
        right: '25%',
        top: '57%',
        zIndex: 100
    },
    biArrow: {
        position: 'absolute',
    },
    centerCards: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardborder1: {
        borderColor: '#FF0000',
        borderWidth: 1,
        backgroundColor: 'rgba(255,0,0,0.2)',
        marginTop: 10,
        padding: 10,
        borderRadius: 25,
        width: '90%',
    },
    cardborder2: {
        borderColor: '#58A573',
        borderWidth: 1,
        backgroundColor: 'rgba(88,165,115,0.2)',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 25,
        width: '90%',
    },
    cardText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cardText1: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    crumbs: {
        backgroundColor: 'white',
        width: 8,
        height: 8,
        borderRadius: 10,
        margin: 4,
    },
    cardsubHead: {
        fontSize: 15,
        color: '#20D109',
        marginTop: 5,
        fontWeight: 'bold'
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
        textAlign: 'center'
    },
    listText: {
        fontSize: 16
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
        padding: 15,
        height: 80
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
        marginBottom: 5
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
        marginLeft: 40
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
        marginTop: '35%',
        zIndex: 0,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.80,
        shadowRadius: 20,

        elevation: 0,
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cardsubDesc: {
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
        width: '80%'
    },
    cardDesc1: {
        color: '#1818FA',
        fontSize: 18,
        textAlign: 'center'
    },
    cardDesc2: {
        color: '#FA1844',
        fontSize: 18,
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

    // Driver 3
    res3Header: {
        fontSize: 14,
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
        fontSize: 17,
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
        borderColor: '#E734CD',
        backgroundColor: 'rgba(231,52,205,0.2)',
        borderRadius: 20,
        height: 70,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
        position: 'relative'
    },
    setFollow: {
        flexDirection: 'row',
        width: '100%'
    },
    subInstruction4: {
        width: 180,
        borderColor: '#FF0000',
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderRadius: 20,
        height: 70,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 20,
    },
    setbottomFont: {
        fontSize: 15,
        color: 'red',
        fontWeight: 'bold',
        width: '80%',
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
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        paddingTop: '5%',
        paddingBottom: '5%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.80,
        shadowRadius: 20,


        elevation: 0,
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
