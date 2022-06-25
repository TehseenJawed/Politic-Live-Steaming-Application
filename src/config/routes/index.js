import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/Home';
import Interactions from '../../Screens/Interactions';
import Dashboard from '../../Components/Dashboard'
import Loading from '../../Screens/FlashScreen'
import Disclosure from '../../Screens/Disclosure'
import OnFoot from '../../Screens/OnFoot'
import DriverInner from '../../Screens/DriverInner'
import BottomNav from './BottomNavigation'
const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Home" component={BottomNav} />
          <Stack.Screen name="Disclosure" component={Disclosure} />
          {/* <Stack.Screen name="Login" component={Signup} /> */}

          {/* <Stack.Screen name="DriverInner" component={
            () => (
              <Dashboard>
                <DriverInner />
              </Dashboard>
            )
          } />
          <Stack.Screen name="OnFoot" component={
            () => (
              <Dashboard>
                <OnFoot />
              </Dashboard>
            )
          } /> */}
          
          {/* <Stack.Screen name="Interactions" component={
            () => (
              <Dashboard>
                <Interactions />
              </Dashboard>
            )
          } /> */}
          <Stack.Screen name="Details" component={Interactions} />
        </Stack.Navigator>
        </NavigationContainer>
    );
  }
  
  export default App;