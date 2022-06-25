
import React, { Component } from 'react';
import { View, Text, Container, Item, Icon, Input } from 'native-base';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated';
import Home from '../../assets/Dashboard/Home.svg'
function Dashboard({ children, flag }) {

    return (
        <Container style={styles.body}>
                <TouchableOpacity style={styles.setBack} onPress={() => flag(false)}></TouchableOpacity>
            <Container style={styles.subBody} >
                <Text style={styles.textHead}>Due to 1969 Frazier v. Cupp officers are allowed to lie in the line of duty</Text>
                <Text style={styles.textHead}>Officer use this to their advanctage By being <Text style={{ color: '#CCFFDF' }}>Friendly</Text> and <Text style={{ color: '#F1F6B6' }}>Lenient</Text> in order To <Text style={{ color: '#F1F6B6' }}>Solicit</Text> a confession a <Text style={{ color: '#F6B6F6' }}>Extrapment</Text></Text>
                <Text style={styles.textHead}><Text style={{ color: '#CCFFDF' }}>Friend-ly</Text> - Kind and Pleasant.</Text>
                <Text style={styles.textHead}><Text style={{ color: '#F1F6B6' }}>Le-ni-ent</Text> - permissive, merciful, or tolerant.</Text>
                <Text style={styles.textHead}><Text style={{ color: '#F1F6B6' }}>So-lic-it</Text> - ask (someone) for something</Text>
                <Text style={styles.textHead}><Text style={{ color: '#F6B6F6' }}>En·trap·ment</Text> - a practice whereby a law enforcement agent or agent of the state induces a person to commit a “crime” that the person would have otherwise been unlikely or unwilling to commit.</Text>
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: '5%',
        paddingTop: '20%',
        paddingBottom: '20%',
    },
    setBack:{
        position:'absolute',
        zIndex:-1,
        width:'130%',
        height:'130%'
    },
    subBody: {
        position:'relative',
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 15,
        borderWidth: 12,
        borderColor: 'gray',
        padding: '2%',
        alignItems:'center',
        justifyContent:'center',
        zIndex:1000000000
    },
    textHead: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        marginTop: '5%'
    },
    textHead2: {
        fontSize: 15,
        color: '#F87E0A',
        fontWeight: 'bold'
    },
    textHead3: {
        fontSize: 25,
        color: '#334ACE',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 17,
        margin: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text3: {
        fontSize: 17,
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#334ACE'
    },

});
export default Dashboard
