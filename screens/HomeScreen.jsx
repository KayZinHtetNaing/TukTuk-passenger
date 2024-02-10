//import 'react-native-gesture-handler';
// import MapView from 'react-native-maps';
import { StyleSheet,View, Text,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigatonContainer} from '@react-navigation/native';
import home from './home';
import Profile from './Profile';
import Setting from './Setting';
import About from './About';
import Rateus from './Rateus';
import Helpcenter from "./Helpcenter";
import Privacypolicy from './Privacypolicy';
import Notification from "./Notification";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import { Image } from "react-native-svg";
import tw from 'twrnc';
const tukLogo=require("../assets/images/p10.png")

const Drawer = createDrawerNavigator();
function HomeScreen() {
  return ( 
    <Drawer.Navigator initialRouteName="home"
    screenOptions={{
      drawerStyle:{
        backgroundColor: "#FFF",
        width: 250,
      },
      headerStyle:{
        backgroundColor:"#fff"
      },
     
  
      drawerLabelStyle:{
        color:"#111",
      }

    }}
    drawerContent={
      (props)=>{
        return(
           <SafeAreaView>
            <View style={{
              height:200,
              width:"100%",
              justifyContent:"center",
              alignItems:"center",
              borderBottomColor:"#f4f4f4",
              borderBottomWidth:1,
              paddingBottom:12
            }}>
              <Image source={tukLogo} resizeMode="contain" style={{height:130,width:130,borderRadius:70,borderColor:"orange",borderWidth:4}}></Image>
              <Text style={{fontSize:18,marginVertical:6,fontWeight:"bold",color:"#111"}}>Ma Phyu Pwint</Text>
            </View>
            <DrawerItemList {...props} />
           </SafeAreaView>
        );
      }
    }
    >

    <Drawer.Screen
      name="home"
      component={home}
      options={{ drawerLabel: 'Home',
      title: "Home",
          drawerIcon: () => (
            <Ionicons name="home" size={20} color="black" />
          ),
       }}
    />

    <Drawer.Screen
    name="Notification"
    component={Notification}
    options={{ drawerLabel: 'Notification',
    title: "Notification",
        drawerIcon: () => (
          <Ionicons name="notifications" size={20} color="black" />
        ),
     }}
  />

    <Drawer.Screen
      name="Profile"
      component={Profile}
      options={{ drawerLabel: 'Profile',
      title: "Profile",
          drawerIcon: () => (
            <FontAwesome name="user-circle-o" size={20} color="black" />
          ),
      }}
    />
    <Drawer.Screen
      name="Setting"
      component={Setting}
      options={{ drawerLabel: 'Setting',
      title: "Setting",
          drawerIcon: () => (
            <Ionicons name="settings" size={20} color="black" />
          ),
       }}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{  drawerLabel: "About",
          title: "About",
          drawerIcon: () => (
            <Ionicons name="ios-information-circle-outline" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Rateus"
      component={Rateus}
      options={{  drawerLabel: "Rateus",
          title: "Rateus",
          drawerIcon: () => (
            <Ionicons name="star-outline" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Helpcenter"
      component={Helpcenter}
      options={{  drawerLabel: "Helpcenter",
          title: "Helpcenter",
          drawerIcon: () => (
            <AntDesign name="customerservice" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Privacypolicy"
      component={Privacypolicy}
      options={{  drawerLabel: "Privacypolicy",
          title: "Privacypolicy",
          drawerIcon: () => (
            <MaterialIcons name="local-police" size={20} color="black" />
           
          ),
       }}
    />
    
  </Drawer.Navigator>
);
  //    {/* <MapView style={styles.map} /> */}
  //   </View>
  // );
  // const interpolate: typeof interpolateNode = interpolateNode ?? interpolateDeprecated;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;