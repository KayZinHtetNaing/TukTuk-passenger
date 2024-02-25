//import 'react-native-gesture-handler';
// import MapView from 'react-native-maps';
import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Switch} from "react-native";
import React,{useState,useContext,useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigatonContainer,DarkTheme,DefaultTheme,useNavigation} from '@react-navigation/native';
import home from './home';
import PassengerHome from "./PassengerHome";
import Profile from './Profile';
import Setting from './Setting';
import About from './About';
import Rateus from './Rateus';
import Helpcenter from "./Helpcenter";
import Privacypolicy from './Privacypolicy';
import Notification from "./Notification";
import LoginScreen from "./LoginScreen";
import theme from "../theme/theme";
import themeContext from "../theme/themeContext";
import { EventRegister } from 'react-native-event-listeners'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import { Image } from "react-native-svg";
import tw from 'twrnc';
const tukLogo=require("../assets/p3.png")

const Drawer = createDrawerNavigator();
function HomeScreen({route}) {

  // const theme=useContext(themeContext)
  const navigation = useNavigation();

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


  const{message} = route.params;
  return ( 
    <Drawer.Navigator initialRouteName="Home" 
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
           <SafeAreaView >
            <View style={[{
              height:200,
              width:"100%",
              justifyContent:"center",
              alignItems:"center",
              borderBottomColor:"#f4f4f4",
              borderBottomWidth:1,
              paddingBottom:12
            }]}>
              <Image source={tukLogo} resizeMode="contain" style={{height:100,width:100,borderRadius:70,borderColor:"gray",borderWidth:4}}></Image>
              <Text style={{fontSize:20,marginVertical:6,fontWeight:"bold",color:"#111"}}>{message.name}</Text>
              <Text style={{fontSize:16,marginVertical:6,color:"#111"}}>{message.phnumber}</Text>
            </View>
            <DrawerItemList {...props} />
            <View>
            <View style={tw`flex-row dark:text-white items-center ml-5`}>
            <Text style={tw`text-sm p-2`}>Dark Mode</Text>
            <Switch
              style={tw`p-2`}
              value={darkMode} 
              onValueChange={val =>{
                setDarkMode(val);
              }}
            />
            </View>

            <TouchableOpacity onPress = {() => navigation.navigate('Login')} style={styles.bubble}>
            <Ionicons name="exit" size={20} color="black" style={{marginLeft:10}}/>
            <Text style={{paddingRight:10}}>Logout</Text>
            </TouchableOpacity>

            </View>
           </SafeAreaView>
        );
      }
    }
    >

    <Drawer.Screen
      name="home"
      component={PassengerHome}
      options={{ drawerLabel: 'Home',
      title: "Home",
          drawerIcon: () => (
            <Ionicons name="home" size={20} color="black" />
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
            <Ionicons name="settings-outline" size={20} color="black" />
          ),
       }}
    />
    <Drawer.Screen
      name="About"
      component={About}
      options={{  drawerLabel: "App Guide",
          title: "App Guide",
          drawerIcon: () => (
            <Ionicons name="compass-outline" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Rateus"
      component={Rateus}
      options={{  drawerLabel: "Feedback",
          title: "Feedback",
          drawerIcon: () => (
            <Ionicons name="send-outline" size={20} color="black" />
           
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
  bubble:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20,
    fontSize:20,
    fontWeight:"bold"
    
  }
});

export default HomeScreen;