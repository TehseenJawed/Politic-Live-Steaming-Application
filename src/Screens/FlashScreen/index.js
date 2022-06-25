import React from 'react';
import { Container} from 'native-base';
import { StyleSheet, ImageBackground, View, Text} from 'react-native'

function Interactions({ navigation }) {
  setTimeout(()=> {navigation.navigate('Disclosure')},1000)
  return (
    <Container style={styles.body} >
      <ImageBackground  style={styles.backgroundImage}  source={require('../../assets/splash.gif')} style={styles.image}>
      <View style={styles.setNext}>
      </View>
      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
    body:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
        
    },
    setNext:{
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      marginTop:350,
      fontSize:30,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width:'100%',
      // height:''
    },
  });
export default Interactions

