import { Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Notification from './Notification';

const Tab = createBottomTabNavigator();
const screenOptions = {
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
 
  
}

const PassengerHome = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen 
            name="home" component={HomeScreen} 
            options={{
              
              tabBarIcon : ({focused, color})=> {
                return(
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                  <Ionicons name="home" size={23} color="black" style={ focused?{color: "orange", fontWeight: 600 }: {color: "black"}}/> 
                  </View>
                )
                
              }
            }}  />


            <Tab.Screen 
            name="notification" component={Notification}
            options={{
              tabBarIcon : ({focused, color})=> {
                return(
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                 
                  <Ionicons name="notifications" size={23} color="black" style={ focused?{color: "orange", fontWeight: 600 }: {color: "black"}}/> 
                </View>
                )
                
              }
            }} />
        </Tab.Navigator>
  )
}

export default PassengerHome
