import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../Screens/Home';
import IndianaBar from '../../../Components/IndianaBar';
import Interactions from '../../../Screens/Interactions';
import OnFoot from '../../../Screens/OnFoot'
import DriverInner from '../../../Screens/DriverInner'
import Passenger from '../../../Screens/Passenger'
import DonotGive from '../../../Screens/DonotGive';
import AtHome from '../../../Screens/AtHome';
import Laws from '../../../Screens/Laws';
import VideoExample from '../../../Screens/VideoExample';
import SideMenu from '../../../Screens/SideMenu';
import Disclaimer from './DisclaimerNavigation';
const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DriverInner" component={DriverInner} />
          <Stack.Screen name="OnFoot" component={OnFoot} />
          <Stack.Screen name="Interactions" component={Interactions} />
          <Stack.Screen name="Passenger" component={Passenger} />
          <Stack.Screen name="DonotGive" component={DonotGive} />
          <Stack.Screen name="AtHome" component={AtHome} />
          <Stack.Screen name="Laws" component={Laws} />
          <Stack.Screen name="VideoExample" component={VideoExample} />
          <Stack.Screen name="SideMenu" component={SideMenu} />
          <Stack.Screen name="Disclaimer" component={Disclaimer} />

          <Stack.Screen name="Details" component={Interactions} />
        </Stack.Navigator>
    );
  }
  
  export default App;