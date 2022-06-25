
import React, { Component } from 'react';
import { View, Text, Container, Item, Icon, Input } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import Home from '../../assets/Dashboard/Home.svg'
function Dashboard({ children, flag }) {

    return (
        <Container style={styles.body}>
            <Container style={styles.subBody} >
              <TouchableOpacity onPress={() => flag(false)}>
              <Text style={styles.textHead}>You look Suspicious</Text>
              <Text style={styles.text2}>If the reason for detainment in any Circumstance (i.e. driver, passenger, on foot etc..) Is suspicion, the officer MUST suspect  You of a specific crime</Text>
              <Text style={styles.textHead2}>Respectfully Ask</Text>
              <Text style={styles.text2}>What crime am i committing, have committed, or about to commit?</Text>
              <Text style={styles.textHead3}>*Precedent: Terry v. Ohio</Text>
              <Text style={styles.text3}>Supreme Court ruled detainment By police officer must be base on Reasonable suspicion of a crime</Text>
              <Text style={styles.text2}>In order to legally detain you the Officer must be able to state the Crime you're under suspicion of Committing</Text>
              <Text style={styles.text3}>Without a reason as "Am I free to leave?"</Text>
              </TouchableOpacity>
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1000000,
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: '5%',
        paddingTop: '20%',
        paddingBottom: '20%',
    },
    subBody: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius:15,
        borderWidth:2,
        padding:'5%'
    },
    textHead:{
        fontSize:25,
        fontWeight:'bold'
    },
    textHead2:{
        fontSize:20,
        color:'#F87E0A',
        fontWeight:'bold'
    },
    textHead3:{
        fontSize:25,
        color:'#334ACE',
        fontWeight:'bold'
    },
    text2:{
        fontSize:17,
        margin:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    text3:{
        fontSize:17,
        margin:10,
        fontWeight:'bold',
        textAlign:'center',
        color:'#334ACE'
    },

});
export default Dashboard
