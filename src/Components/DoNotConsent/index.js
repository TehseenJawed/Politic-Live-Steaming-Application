import React, { useState } from 'react';
import { Container, Icon } from 'native-base';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
function Interactions({ navigation, flag }) {

    return (
        <Container style={styles.mainbody}>
            <TouchableOpacity style={styles.payBack} onPress={() => flag(false)}></TouchableOpacity>
            <ScrollView style={{marginTop:'25%'}}>
                <View style={styles.subBody}>
                    <View style={styles.innerBody}>
                        <Text style={styles.text1}>Do Not</Text>
                        <Text style={styles.text2}>Give <Text style={styles.text1}>Consent</Text> to Search</Text>
                        <View style={styles.itemBody}>
                            <View style={styles.setWidth}>
                                <View style={styles.listType}></View>
                            </View>
                            <Text style={styles.listText}>Vehicle</Text>
                        </View>
                        <View style={styles.itemBody}>
                            <View style={styles.setWidth}>
                                <View style={styles.listType}></View>
                            </View>
                            <Text style={styles.listText}>Home</Text>
                        </View>
                        <View style={styles.itemBody}>
                            <View style={styles.setWidth}>
                                <View style={styles.listType}></View>
                            </View>
                            <Text style={styles.listText}>Person</Text>
                        </View>
                        <View style={styles.itemBody}>
                            <View style={styles.setWidth}>
                                <View style={styles.listType}></View>
                            </View>
                            <Text style={styles.listText}>Items in vehicle</Text>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View style={styles.view2}>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}><Text style={{ fontSize: 16, color: 'red', fontWeight: 'bold' }}>Consent</Text>- permission for something to happen or agreement to do something.</Text>
                            </View>

                        </View>

                        <Text style={styles.example}>Examples</Text>

                        <ScrollView nestedScrollEnabled={true} style={styles.exampleBox}>
                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>“What’s the cause for the stop?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}> “What’s the reason for the stop officer?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>“I break any laws officer?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}> “What seems to be the problem officer?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>  “What seems to be the reason for the stop?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}>“Hello Officer, Whats the issue?”</Text>
                            </View>

                            <View style={styles.List}>
                                <View style={styles.listType}></View>
                                <Text style={styles.listText1}> “Hey Officer, What’s the violation?”</Text>
                            </View>
                        </ScrollView>

                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', margin: '2%' }}>Police Need <Text style={{ color: '#09C3C3' }}>Probable Cause</Text> To search your vehicle, person, or thing</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold', margin: '2%' }}><Text style={{ color: '#09C3C3' }}>Prob-a-ble Cause</Text> - reasonable basis for believing that a crime may have been committed</Text>

                    </View>
                </View>
            </ScrollView>
        </Container>
    );
}
const styles = StyleSheet.create({
    mainbody: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        padding: '5%',
        paddingTop: '15%',
        paddingBottom: '15%',
    },
    example: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft:5
    },
    payBack:{
        width:'130%',
        height:'130%',
        position:'absolute',
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '5%',
    },
    subBody: {
        width: '100%',
        height: '100%',
        // marginTop:'10%',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#D0DFD9',
        padding: '3%'
    },

    exampleBox: {
        backgroundColor: '#EEEEEE',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        padding: 15,
        height: 70
    },
    listType: {
        // width: 1,
        // height: 2,
        backgroundColor: 'black',
        borderRadius: 20,
        // margin: 10
    },
    List: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom:5
    },
    subText1: {
        textAlign: 'center',
        // fontSize:20
    },
    listText1: {
        fontSize: 14,
        fontWeight: 'bold',
        width: '100%'
    },
    innerBody: {
        backgroundColor: '#ECE4C6',
        width: '100%',
        height: '100%',
        padding: '2%',
        paddingTop: '5%',
    },
    text1: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red'
    },
    text2: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#232845'
    },
    text3: {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#232845'
    },
    text3Active: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#09C3C3'
    },
    itemBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listType: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 20
    },
    listText: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        width: '70%'
    },
    setWidth: {
        width: '20%',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        paddingLeft:25,
    },
    view1: {
        width: '25%'
    },
    view2: {
        width: '100%'
    },
    newtext1: {
        fontSize: 30
    },
});
export default Interactions
