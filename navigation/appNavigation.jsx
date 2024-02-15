import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import DrawerNavigator from '../Drawer/appDrawer';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import InputPhScreen from '../screens/InputPhScreen';
import OtpNoScreen from '../screens/OtpNoScreen';
import Notification from '../screens/Notification';
import { EventRegister } from 'react-native-event-listeners';
import { useState,useEffect } from 'react';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';

const Stack = createNativeStackNavigator();



export default function AppNavigation() {

  const [darkMode,setDarkMode]=useState(false)

  useEffect(()=>{
    const listener=EventRegister.addEventListener('ChangeTheme',(data)=>{
      setDarkMode(data)
      // console.log(data)
    })
    return ()=>{

    EventRegister.removeAllListeners(listener)
    }
  },[darkMode])

    return ( 
      <themeContext.Provider value={darkMode === true? theme.dark:theme.light}>
      <NavigationContainer theme={darkMode === true? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName = 'Welcome'>
          <Stack.Screen name = "Home" options = {{ headerShown: false }} component = {HomeScreen}/> 
          <Stack.Screen name = "Notification" options = {{ headerShown: false }} component = {Notification}/> 
          <Stack.Screen name = "Welcome" options = {{ headerShown: false }} component = { WelcomeScreen }/> 
          <Stack.Screen name = "Login" options = { { headerShown: false }} component = { LoginScreen }/> 
        <Stack.Screen name = "SignUp" options = {{ headerShown: false }} component = { SignUpScreen }/> 
        <Stack.Screen name = "InputPh" options = {{ headerShown: false }} component = { InputPhScreen }/> 
        <Stack.Screen name = "OtpNoScreen" options = {{ headerShown: false }} component = { OtpNoScreen }/> 
          </Stack.Navigator> 
        </NavigationContainer>
        </themeContext.Provider>
    )
}