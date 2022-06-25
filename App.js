import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Route from './src/config/routes';
import LoginContext from './src/Context/LoginContext';
import FlashMessage from "react-native-flash-message";
// import ActiveScreen from './src/Context/ActiveScreenContext';
// const App: () => Node = () => {
const App = () => {
  const [LoginFlag,setLoginFlag] = useState(" ")
  const [activeScreen,setActiveScreen] = useState(" ")
  console.log("This is inside data ++>",LoginFlag)
  return (
    <LoginContext.Provider value={{data:LoginFlag, setData:setLoginFlag, screen:activeScreen, setScreen:setActiveScreen}}>
      {/* <FlashMessage position="top" /> */}
      <Route />  
    </LoginContext.Provider>
  );
};


export default App;
