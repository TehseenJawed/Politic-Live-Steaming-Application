import React, { Component } from 'react';
import {View, Text, Container, Item, Icon, Input } from 'native-base';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated';
import Home from '../../assets/Dashboard/Home.svg'
function Dashboard({children, flag}) {
    
    return (
        <Container style={styles.body}>
            <TouchableOpacity style={styles.setBack} onPress={() => flag(false)}></TouchableOpacity>
            <View style={styles.setForm}>
              <Item style={styles.setInput}>
                <Icon active name='search' />
                <Input placeholder='Search'/>
              </Item>

              <ScrollView style={styles.itemBody}>
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Current Location: 
                      </Text>
                      <Text style={{fontSize:14, color:'blue'}}>
                          Indianapolis, IN
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Alabama
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Alaska
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Arkansas
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          California
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Colorado
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Connecticut
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Deleware
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Florida
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Georgia
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Hawaii
                      </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity   style={styles.items}>
                      <Text style={{fontSize:13}}>
                          Idaho
                      </Text>
                  </TouchableOpacity>
                  
              </ScrollView>

            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    
    body: {
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:1000000000,
        width:'100%',
        backgroundColor:'rgba(52, 52, 52, 0.3)'

      },
      setBack:{
          width:'110%',
          height:'170%',
          position:'absolute'
      },
      setIndiana:{
        width:130,
        height:35,
        marginTop:10,
        marginLeft:10,
        borderRadius:20,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'black',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
      Indianapolis:{
        width: 20,
        marginRight:5,
        resizeMode:'contain'
    },
     
    setText:{
        fontSize:11
    },
      items:{
          margin:8,
          padding:10,
          width:'90%',
          backgroundColor:'rgba(255,255,255, 0.9)',
          borderRadius:15,
          flexDirection:'row',
          justifyContent:'center'
      },
      itemBody:{
        width:'100%',
        padding:15,
        height:'20%'
            },
      setInput:{
          backgroundColor:'rgba(255,255,255, 0.5)',
          width:'100%',
          paddingLeft:5,
          borderRadius:15,
          marginBottom:15,
          height:'9%'

      },
      setForm:{
          height:500,
          backgroundColor:'#F7D0C2',
          borderRadius:15,
          borderWidth:1,
          padding:'2%',
          width:'80%',
          alignItems:'center'
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
export default Dashboard
