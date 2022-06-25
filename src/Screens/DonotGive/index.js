import React, {useState} from 'react';
import { Container} from 'native-base';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
function Interactions({ navigation }) {
  return (
    <Container style={styles.body}>
        <View style={styles.subBody}>
            <View style={styles.innerBody}>
                <Text style={styles.text1}>Do Not</Text>
                <Text style={styles.text2}>Give Consent to Search</Text>
                <Text style={styles.text1}>Add Scroll wheel of ways the cops</Text>
                <Text style={styles.text1}>Ask to search the vehicle!!!</Text>
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
                    <Text style={styles.listText}>Vehicle</Text>
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
                <Text style={styles.text3}>Police Need <Text style={styles.text3Active}>Probable Cause</Text> To search your vehicle, person, or thing</Text>
                <Text style={styles.text3}><Text style={styles.text3Active}>Prob-a-ble Cause</Text> - reasonable basis for believing that a crime may have been committed</Text>
            </View>
        </View>
    </Container>
  );
}
const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        padding:'5%', 
    },
    subBody:{
        width:'100%',
        height:'100%',
        borderWidth:2,
        borderRadius:15,
        backgroundColor:'#D0DFD9',
        padding:'3%'
    },
    innerBody:{
        backgroundColor:'#ECE4C6',
        width:'100%',
        height:'100%',
        padding:'2%',
        paddingTop:'5%',
    },
    text1:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'red'
    },
    text2:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        color:'#232845'
    },
    text3:{
        textAlign:'left',
        fontSize:20,
        fontWeight:'bold',
        color:'#232845'
    },
    text3Active:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#09C3C3'
    },
    itemBody:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    listType:{
        width:10,
        height:10,
        backgroundColor:'black',
        borderRadius:20
    },
    listText:{
        fontSize:25,
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        width:'70%'
    },
    setWidth:{
        width:'20%',

    }
  });
export default Interactions
