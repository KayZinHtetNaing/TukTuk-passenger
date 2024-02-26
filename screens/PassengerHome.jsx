import { Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React,{useState,useEffect,useContext} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Notification from './Notification';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'
import theme from '../theme/theme';

const Tab = createBottomTabNavigator();


const screenOptions = [{
  initialRouteName : "DriverHome",
  tabBarShowLabel : false,
  headerShown : false,
  tabBarStyle : {
    position : "fixed",
    bottom :0 ,
    left : 0,
    right : 0,
    elevation : 0,
    height : 60,
    
    backgroundColor : "white",
    borderTopWidth : 3,
    borderColor:"#F0C09D",
    borderTopLeftRadius : 5,
    borderTopRightRadius : 5,
     
  },
  tabBarActiveTintColor: '#F46200',
  tabBarInactiveTintColor: '#EE8438',
 
},{backgroundColor:theme.backgroundColor,padding:10}]

const PassengerHome = () => {

  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

  return (
    <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="ပင်မစာမျက်နှာ" component={HomeScreen} 
            options={{
              
              tabBarIcon : ({focused, color})=> {
                return(
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Ionicons name="home" size={23} color="orange" style={ focused?{color: "skyblue", fontWeight: 600 }: {color: "green"}}/> 
                  </View>
                )
                
              }
            }}  />


            <Tab.Screen 
            name="Notification" component={Notification}
            options={{
              tabBarIcon : ({focused, color})=> {
                return(
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                 
                  <Ionicons name="notifications" size={23} color="orange" style={ focused?{color: "skyblue", fontWeight: 600 }: {color: "green"}}/> 
                </View>
                )
                
              }
            }} />
        </Tab.Navigator>
  )
}

export default PassengerHome

