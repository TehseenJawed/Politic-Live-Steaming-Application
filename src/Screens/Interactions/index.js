import React, { useState } from 'react';
import { Container } from 'native-base';
import { StyleSheet, ImageBackground, Image, View, TouchableOpacity, Text } from 'react-native'
import { withDecay } from 'react-native-reanimated';
// import BubbleText from '../../assets/Dashboard/Interaction/bubbleText.png';
import SuspiciousForm from '../../Components/SuspiciousForm'
import IndianaArtBoard from '../../Components/IndianaArtboard'
import IndianaBar from '../../Components/IndianaBar'

function Interactions({ navigation }) {
  const [suspiciousFlag, setSuspiciousFlag] = useState(false)
  const [indianaFlag, setndianaFlag] = useState(false)
  return (
    <Container style={styles.body}>
      <ImageBackground style={styles.image} source={require('../../assets/Dashboard/Interaction/InteractionAvatar.png')} style={styles.image}>
        {suspiciousFlag ? <SuspiciousForm flag={setSuspiciousFlag} /> : null}
        {indianaFlag ? <IndianaArtBoard flag={setndianaFlag} /> : null}
        <Image style={styles.setPoliceBubble} source={require('../../assets/Dashboard/Interaction/bubbleText.png')} />
        <Image style={styles.setPolice} source={require('../../assets/Dashboard/Interaction/police.png')} />
        <IndianaBar setndianaFlag={setndianaFlag} indianaFlag={indianaFlag} />
        <TouchableOpacity onPress={() => setSuspiciousFlag(!suspiciousFlag)} style={styles.sidePage}>
        </TouchableOpacity>
        <View style={styles.setButtons}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('DriverInner')}>
            <Image style={styles.recordIcon2} source={require('../../assets/Dashboard/Interaction/Driver.png')} />
            <Text style={styles.setText}>Driver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Passenger')}>
            <Image style={styles.recordIcon2} source={require('../../assets/Dashboard/Interaction/pessanger.png')} />
            <Text style={styles.setText}>Pessenger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('AtHome')}>
            <Image style={styles.recordIcon2} source={require('../../assets/Dashboard/Interaction/home.png')} />
            <Text style={styles.setText}>At Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('OnFoot')}>
            <Image style={styles.recordIcon2} source={require('../../assets/Dashboard/Interaction/foot.png')} />
            <Text style={styles.setText}>On Foot</Text>
          </TouchableOpacity>
        </View>


      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  setText:{
    color:'black',
    // zIndex:10000,
    // marginTop:-100
  },
  Box: {
    width: '38%',
    height: '22%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    zIndex:-1000,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  setPolice: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    left: '25%',
    position: 'absolute'
  },
  setPoliceBubble: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    right: '2%',
    zIndex: 10000,
    top: '2%',
    position: 'absolute'
  },
  sidePage: {
    width: '60%',
    height: '20%',
    top: 50,
    position: 'absolute',
    zIndex: 10000,
    right: 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: '100%',
    // height:''
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
    marginTop: '40%',
    zIndex:0
  },
  recordIcon2: {
    shadowColor: "black",
    width: 60,
    height:50,
    resizeMode: 'contain',

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

  }
});
export default Interactions
