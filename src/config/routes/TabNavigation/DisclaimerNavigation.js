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
import Disclaimer from '../../../Screens/Disclaimer';
const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen name="Disclaimer" component={Disclaimer} />
        </Stack.Navigator>
    );
  }
  
  export default App;