import React, {useState, useContext} from 'react';
import {Image} from 'react-native'
import { View, Text} from 'native-base'
import CamCorder from '../../assets/Dashboard/CamCloud.png'
import Icon from 'react-native-vector-icons/Ionicons';
import LoginContext from '../../Context/LoginContext'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNav from './TabNavigation/HomeNav'
import CamCloud from '../../Screens/CamCloud'
import Definition from '../../Screens/Definition'
import News from '../../Screens/News'
import LawWidget from '../../Screens/LawWidget'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { act } from 'react-test-renderer';
import FlashMessage from "react-native-flash-message";
// import {AsyncStorage} from 'react-native';  
const Tab = createBottomTabNavigator();

export default function MainTabs() {
  
  const customRenderFlashMessageIcon = (icon = "success", style = {}, customProps = {}) => {
    switch(icon) {
      case "success":
        return <Image style={{width:45, height:30,resizeMode:'contain'}} source={require('../../assets/politicIcon.png')} />;     
    }
  
    // it's good to inherit the original method...
    return renderFlashMessageIcon(icon, style, customProps);
  };

const SetScreen = useContext(LoginContext)
console.log(SetScreen.screen)
  return (<>
    
    <FlashMessage renderFlashMessageIcon={customRenderFlashMessageIcon} style={{zIndex:10000000000}} position="top" />
    <Tab.Navigator
    
  initialRouteName="Home"
  activeColor="#f0edf6"
  inactiveColor="#3e2465"
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let iconName;
        if (route.name === 'Home') {
          // console.log(route.name)
          // return <Image style={{width:25, height:20,resizeMode: 'contain'}} source={require('../../assets/Dashboard/homec.png')} /> 
          return(
            <>
            {SetScreen.screen === 'Home' ? ( <Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/homec.png')} />) 
          : (<Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/home.png')} />)}
            </>
          )
          // return <Image style={{width:25, height:20,resizeMode: 'contain'}} source={require('../../assets/Dashboard/home.png')} />;
        } else if (route.name == 'Cam Cloud') {
          return(
            <>
            {SetScreen.screen === 'Cam Cloud' ? ( <Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/CamCloudc.png')} />) 
          : (<Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/CamCloud.png')} />)}
            </>)
        } else if (route.name == 'Law Widget') {
          return(
            <>
            {SetScreen.screen === 'Law Widget' ? ( <Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/lawc.png')} />) 
          : (<Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/law.png')} />)}
            </>)
        } else if (route.name == 'News') {
          iconName = 'ios-person';
          return(
            <>
            {SetScreen.screen === 'News' ? ( <Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/newsc.png')} />) 
          : (<Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/news.png')} />)}
            </>)
        } else if (route.name == 'Definitions') {
          iconName = 'ios-person';
          return(
            <>
            {SetScreen.screen === 'Definitions' ? ( <Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/definec.png')} />) 
          : (<Image style={{width:25, height:24,resizeMode: 'contain'}} source={require('../../assets/Dashboard/define.png')} />)}
            </>)
          // return <Image style={{width:20, height:25,resizeMode: 'contain',}} source={require('../../assets/Dashboard/define.png')} />;
        }
        return <Image style={{width:25, height:24,resizeMode: 'contain',}} source={require('../../assets/Dashboard/news.png')} />;
      },
    })}
    tabBarOptions={{
      
      labelStyle:{fontSize:11},
      activeTintColor:'black',
      keyboardHidesTabBar:true
    }}
    >
      
      <Tab.Screen name="Home" component={HomeNav}/>
      <Tab.Screen name="Cam Cloud" component={CamCloud} />
      <Tab.Screen name="Law Widget" component={LawWidget} />
      <Tab.Screen name="Definitions" component={Definition} />
      <Tab.Screen name="News" component={News}  />
    </Tab.Navigator>
  </>);
}