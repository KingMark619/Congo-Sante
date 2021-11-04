import React, { useState } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/screen/Home';
import Messages from './app/screen/Messages';
import Schedule from './app/screen/Schedule';
import Options  from './app/screen/Options';
import Welcome from './app/screen/Welcome';
import Main from './app/screen/Main';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './app/screen/Tabs';
import Listing from './app/screen/Listing';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator()


export default function App() {
  const [status, setStatus] = useState(false)
  const [loaded] = useFonts({
    Quicksand: require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs}/>

        <Stack.Screen name="Messages" component={Messages}/>
        <Stack.Screen name="Listing" component={Listing}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// blue #7266D8
// black #2B2C2E
// white #ffffff
// gray #909090