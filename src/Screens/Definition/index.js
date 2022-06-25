import React, { useState, useContext } from 'react';
import { Button, TouchableOpacity, Text, ScrollView, ImageBackground } from 'react-native';
import { Icon, View, Item, Input } from 'native-base'
import { StyleSheet, Image, } from 'react-native'
import Indianapolis from '../../assets/indianapolis.png'
import Record from '../../assets/record.png';
import Cars from '../../assets/cars.png'
import Login from '../../Components/LoginScreen'
import Signup from '../../Components/Signup'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import Hammer from '../../assets/Dashboard/Interaction/hammer.png'
import IndianaBar from '../../Components/IndianaBar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import LoginContext from '../../Context/LoginContext';

export default function Interactions({ navigation, route }) {
    const SetScreen = useContext(LoginContext)
    const [loginFlag, setLoginFlag] = useState(false)
    const [signupFlag, setSignupFlag] = useState(false)
    const [indianaFlag, setndianaFlag] = useState(false)
    const [card, setCard] = useState(0)

    useFocusEffect(() => {
        SetScreen.setScreen(route.name)
    })


    function Cards({ flag }) {
        switch (flag) {
            case 1:
                return (
                    <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardText}>
                                    <Text style={{ color: '#09C3C3' }}>Prob·a·ble Cause</Text> - reasonable basis for believing that a crime may have been committed

                                </Text>
                            </View>

                        </View>
                    </View>
                )
            case 2:
                return (
                    <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardText}>
                                    <Text style={{ color: 'red' }}>Pre·sent·ment</Text> - a formal presentation of information to a court, especially by a sworn jury regarding an offense or other matter.

                                </Text>
                            </View>

                        </View>
                    </View>
                )
                case 3:
                    return (
                        <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardText}>
                                    <Text style={{ color: '#0045FF' }}>En·trap·ment</Text> - a practice whereby a law enforcement agent or agent of the state induces a person to commit a “crime” that the person would have otherwise been unlikely or unwilling to commit.

                                </Text>
                            </View>

                        </View>
                    </View>
                )
                case 4:
                    return (
                        <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardText}>
                                    <Text style={{ color: '#0045FF' }}>So·lic·it</Text> - ask (someone) for something

                                </Text>
                            </View>

                        </View>
                    </View>
                )
                case 5:
                    return (
                        <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardText}>
                                    <Text style={{ color: 'red' }}>Consent</Text> - permission for something to happen or agreement to do something.

                                </Text>
                            </View>

                        </View>
                    </View>
                )
                case 6:
                    return (
                        <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardText}>
                                    <Text style={{ color: '#0031FF' }}>Detain</Text> - to hold a person in custody, often for purposes of questioning. A law enforcement officer needs to have a reasonable suspicion of unlawful activity to detain a person.

                                </Text>
                            </View>

                        </View>
                    </View>
                )
                case 7:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>The 1st Ammendment protects your freedom of speech, religion and the press. It also protects the right to peaceful protest and to petition the government.</Text>
                                <Text style={styles.cardHeading2}>Interpretation</Text>
                                <Text style={styles.cardText}>Congress shall make no law respecting an establishment of religion,or prohibiting the free exercise thereof; or abridging the <Text style={{ color: '#E75D34' }}>freedom of speech</Text>, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 8:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>The 2nd Ammendment protects a personal right to bear arms for self-defense so an individual can protect their life, liberty, and property. With respect to all state laws. Check <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>List</Text> for open carry states.</Text>
                                <Text style={styles.cardHeading2}>2nd Amendment</Text>
                                <Text style={styles.cardText}>A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 9:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>Forbids the forcible housing of military personnel in a citizen’s home during peacetime and requires the process to be “prescribed by law” in times of war</Text>
                                <Text style={styles.cardHeading2}>3rd Amendment</Text>
                                <Text style={styles.cardText}>No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 10:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>Gives right of being secure in your person, home, papers and effects against unreasonable searches and seizure Without <Text style={{ color: '#FF0000' }}>Probable Cause</Text></Text>
                                <Text style={styles.cardHeading2}>4th Amendment</Text>
                                <Text style={styles.cardText}>The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 11:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>• You shall not be punished for a crime Unless on presentment or indictment of a Grand jury</Text>
                                <Text style={styles.cardText}>• You shall not be punished or tried for The same crime twice</Text>
                                <Text style={styles.cardText}>• You shall not be forced to be witness Against yourself</Text>
                                <Text style={styles.cardText}>• You shall not be punished without Due Process</Text>
                                <Text style={styles.cardText}>• Private property shall not be taken for public use without compensation</Text>
                                <Text style={styles.cardHeading2}>5th Amendment</Text>
                                <Text style={styles.cardText}>No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offense to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 12:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>You have the right to a speedy and public trial by jury, witnesses, and Council for your defense</Text>
                                <Text style={styles.cardHeading2}>6th Amendment</Text>
                                <Text style={styles.cardText}>In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining itnesses in his favor, and to have the Assistance of Counsel for his defence.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 13:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>You have the right to a jury trial in Civil Lawsuits where the value in controversy is Over $20</Text>
                                <Text style={styles.cardHeading2}>7th Amendment</Text>
                                <Text style={styles.cardText}>In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise reexamined in any Court of the United States, than according to the rules of the common law.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 14:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>You shall not be subject to excessive Bail, excessive fines, or cruel and Unusual punsihment</Text>
                                <Text style={styles.cardHeading2}>8th Amendment</Text>
                                <Text style={styles.cardText}>Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 15:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>The 9th Amendment is a constitutional safety net intended to make clear that individuals have other fundamental rights, in addition to those listed in the 1st through 8th Amendments.</Text>
                                <Text style={styles.cardHeading2}>9th Amendment</Text>
                                <Text style={styles.cardText}>The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 16:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>Any power not specifically given to the federal government by the Constitution belongs to the States and the people.</Text>
                                <Text style={styles.cardHeading2}>10th Amendment</Text>
                                <Text style={styles.cardText}>The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.</Text>
                            </View>
                        </View>
                    </View>
                )
                case 17:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>Limits the power of federal courts to hear lawsuits against state governments brought by the citizens of another state or the citizens of a foreign country.</Text>
                                <Text style={styles.cardHeading2}>11th Amendment</Text>
                                <Text style={styles.cardText}>The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.</Text>
                            </View>

                        </View>
                    </View>
                )
                case 18:
                    return (
                        <View style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text View onPress={() => setCard(0)} style={styles.cardText}>Modifies the way the Electoral College chooses the president and vice president. Including establishing the Electoral College.</Text>
                                <Text style={styles.cardHeading2}>12th Amendment</Text>
                                <ScrollView style={{ height: 150 }}>
                                    <Text style={styles.cardText}>The Electors shall meet in their respective states and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President, and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the government of the United States, directed to the President of the Senate; The President of the Senate shall, in the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be counted; The person having the greatest number of votes for President, shall be the President, if such number be a majority of the whole number of Electors appointed; and if no person have such majority, then from the persons having the highest numbers not exceeding three on the list of those voted for as President, the House of Representatives shall choose immediately, by ballot, the President. But in choosing the President, the votes shall be taken by states, the representation from each state having one vote; a quorum for this purpose shall consist of a member or members from two-thirds of the states, and a majority of all the states shall be necessary to a choice. The person having the greatest number of votes as Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the Vice-President; a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority of the whole number shall be necessary to a choice. But no person constitutionally ineligible to the office of President shall be eligible to that of Vice-President of the United States</Text>
                                </ScrollView>
                            </View>

                        </View>
                    </View>
                )
                case 19:
                    return (
                        <View onPress={() => setCard(0)} style={styles.cardBody}>
                        <TouchableOpacity onPress={() => setCard(0)} style={styles.setClose}></TouchableOpacity>
                        <View style={styles.card}>
                            <View style={styles.innerCard}>
                                <Text style={styles.cardHeading}>Interpretation</Text>
                                <Text style={styles.cardText}>Abolished Slavery and involuntary Servitude.</Text>
                                <Text style={styles.cardText}><Text style={{ color: '#0045FF' }}>Section 1:</Text>  Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.</Text>
                                <Text style={styles.cardText}><Text style={{ color: '#0045FF' }}>Section 2:</Text>  Congress shall have power to enforce this article by appropriate legislation.</Text>
                            </View>

                        </View>
                    </View>
                )
            default:
                return (<View></View>)
        }
    }
    return (
        <ImageBackground style={styles.body} source={require('../../assets/background.png')}>
            <Cards flag={card} />

            { indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
            {loginFlag ? <Login setSignup={setSignupFlag} flag={setLoginFlag} /> : null}
            {signupFlag ? <Signup flag={setSignupFlag} /> : null}

            <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
            
            <Image style={styles.avatar} source={require('../../assets/Dashboard/Interaction/police.png')} />
            <View style={styles.formBody}>

                <View style={styles.setForm}>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Definitions</Text>
                    <View style={{ backgroundColor: 'white', borderWidth: 2, borderRadius: 5, }}>
                        <Item style={styles.setInput}>
                            <Icon style={{ color: 'gray' }} active name='search' />
                            <Input style={styles.setinputText} placeholder='Search' />
                        </Item>
                    </View>
                    <ScrollView style={styles.items}>
                        {/* <View style={styles.items}> */}
                        <Text onPress={() => setCard(1)} style={styles.listText}>
                            Probable Cause
                            </Text>
                        <Text onPress={() => setCard(2)} style={styles.listText}>
                            Presentment
                            </Text>
                        {/* </View> */}
                    </ScrollView>
                </View>
                <View style={styles.setForm}>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Ammendments</Text>
                    <View style={{ borderWidth: 1, backgroundColor: 'white', borderWidth: 2, borderRadius: 5, }}>
                        <Item style={styles.setInput}>
                            <Icon style={{ color: 'gray' }} active name='search' />
                            <Input style={styles.setinputText} placeholder='Search' />
                        </Item>
                    </View>
                    <ScrollView style={styles.items}>
                        {/* <View style={styles.items}> */}
                        <Text onPress={() => setCard(7)} style={styles.listText}>
                            1st Amendment - Religion & Expression
                            </Text>
                        <Text onPress={() => setCard(8)} style={styles.listText}>
                            2nd Amendment - Bearing Arms
                            </Text>
                        <Text onPress={() => setCard(9)} style={styles.listText}>
                            3rd Amendment - Quartering Soldiers
                            </Text>
                        <Text onPress={() => setCard(10)} style={styles.listText}>
                            4th Amendment - Search & Seizure
                            </Text>
                        <Text onPress={() => setCard(11)} style={styles.listText}>
                            5th Amendment - Rights of Persons
                            </Text>
                        <Text onPress={() => setCard(12)} style={styles.listText}>
                            6th Amendment - Rights of Accused in Criminal Prosecutions
                            </Text>
                        <Text onPress={() => setCard(13)} style={styles.listText}>
                            7th Amendment - Jury Trial in Civil Lawsuits
                            </Text>
                        <Text onPress={() => setCard(14)} style={styles.listText}>
                            8th Amendment - Further Guarantees in Criminal Cases
                            </Text>
                        <Text onPress={() => setCard(15)} style={styles.listText}>
                            9th Amendment - Unenumerated Rights
                            </Text>
                        <Text onPress={() => setCard(16)} style={styles.listText}>
                            10th Amendment - Reserved Powers
                            </Text>
                        <Text onPress={() => setCard(17)} style={styles.listText}>
                            11th Amendment - Suits Against States
                            </Text>
                        <Text onPress={() => setCard(18)} style={styles.listText}>
                            12th Amendment - Election of President
                            </Text>
                        <Text onPress={() => setCard(19)} style={styles.listText}>
                            13th Amendment - Slavery and Involuntary Servitude
                            </Text>
                        {/* </View> */}
                    </ScrollView>
                </View>


            </View>

            {/* <View style={styles.setCars}>
                <Image style={styles.carImage} source={Cars} />
            </View> */}
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        position: 'relative',
        width: '100%',
        backgroundColor: '#D1726D',
        justifyContent: 'center',
        zIndex:0
    },
    avatar:{
        position:'absolute',
        width:150,
        resizeMode:'contain',
        left:'30%'    
    },
    cardBody: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1
    },
    setClose:{
        width:'100%',
        height:'100%',
        position:'absolute',
        zIndex:1
    },
    setinputText: {
        color: 'gray',
        fontSize: 13
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
    card: {
        backgroundColor: 'white',
        padding: '2%',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    innerCard: {
        width: '70%',
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
        borderWidth: 2,
        padding: 5
    },
    cardText: {
        fontSize: 13,
        marginTop: 5
    },
    cardHeading: {
        fontSize: 15,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    cardHeading2: {
        fontSize: 16,
        color: '#E734CD',
        marginTop: 10,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    formBody: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        zIndex: 0,
    },
    carImage: {
        // width:'80%'
    },
    listText: {
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 15,
        fontWeight: 'bold',
        color: '#59308B'
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
        // paddingBottom: 30,
        width: '90%',
        height: 150,
        backgroundColor: '#ECE4C6',
        borderRadius: 10,
        flexDirection: 'row',
        flexDirection: 'column',
        borderWidth: 1,
    },
    itemBody: {
        width: '100%',
        padding: 10,
        height: 200,
    },
    setInput: {
        backgroundColor: 'white',
        borderWidth: 0,
        borderColor: 'white',
        justifyContent: 'center',
        width: '85%',
        paddingLeft: 5,
        borderRadius: 5,
        height: 40,
        zIndex: -1
    },
    setForm: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        padding: '2%',
        width: '85%',
        marginBottom: 10,
        marginTop: 10,
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

