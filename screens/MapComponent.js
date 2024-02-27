import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text,TouchableOpacity,Image } from 'react-native';
import MapView, { Marker,Callout } from 'react-native-maps';
import tw from 'twrnc';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { canOpenURL, openURL } from 'expo-linking';
import * as Location from 'expo-location';

const tukLogo=require("../assets/images/tuk2.png")

const MapComponent = () => {
  
  const navigation = useNavigation();

  const [canOpenTelephone , setcanOpenTelephone] = useState(false);
  canOpenURL("tel:+959459496549").then((canOpen) => setcanOpenTelephone(canOpen));

  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  const [driverLocation, setdriverLocation] = useState([]);
  const getdriverLocation = async () => {
    try {
      const response = await axios.get("http://192.168.1.45:3000/driverLocation");
      // console.log(response.data.data); // Log the fetched data
      setdriverLocation(response.data.data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  }
  
  useEffect(() =>{
    getdriverLocation();
  },[])

 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

    })();
  }, []);


  const defaultMarkers = [
    { latitude: 18.827977877146274, longitude: 95.25783681375435, title:'Default Marker 1' },
    { latitude: 18.82066629451907,longitude:  95.22127294359886, title: 'Deffault Marker 2' },
    { latitude: 18.840560083203766, longitude: 95.27074778458567, title: 'Marker 3' },
    { latitude: 18.78686640422625, longitude: 95.28598927716047, title: 'Marker 4' },
   
  ];

  

  useEffect(() => {
    setMarkers(defaultMarkers);
  }, []);

  // const calloutPressed= (ev:any)=>{
  //  // console.log(ev);
  // };
  // console.log(driverLocation);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
         
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />

          
          {markers.map((marker, index) => (
            <Marker 
              key={index}
              coordinate={marker}
              title={marker.title}
              pinColor="blue"
              image={tukLogo} 
            >

            <Callout  tooltip>
            <View style={{flex:1,padding:5,backgroundColor:"white"}}>
            <Text style={{fontSize:15}}>{marker.title}</Text>
            <Image source={require("../assets/images/p10.png")} style={{width:150,height:150}}/> 
            <TouchableOpacity onPress={() => openURL("tel:+959459496549")} style={tw`bg-orange-500 mx-5 my-5 w-30 rounded-xl py-3 max-w-sm text-center font-bold `}>
            <Text style={tw`text-center`}  disabled={canOpenTelephone}>Call out</Text></TouchableOpacity>
            </View>
          </Callout>
          </Marker>
          ))}

          {driverLocation?.map((driverLocation) => (
            <Marker
              key={driverLocation._id}
              coordinate={{
                latitude: driverLocation.latitude,
                longitude: driverLocation.longitude,
              }}
             
              title="I am ready to pick up"
              pinColor="blue" 
              image={tukLogo} 
            >
             <Callout  tooltip>
            <View style={{flex:1,padding:5,backgroundColor:"white"}}>
            <Image source={
              {uri:driverLocation.profile}
            } style={{width:150,height:150}}/> 
            <Text style={{fontSize:15}}>အမည်:{driverLocation.name}</Text>
            <Text style={{fontSize:15}}>လိုင်စင်နံပါတ်:{driverLocation.licenseNo}</Text>

            <TouchableOpacity onPress={() => openURL(`tel:${driverLocation.phoneNumber}`)} style={tw`bg-orange-500 mx-5 my-5 w-30 rounded-xl py-3 max-w-sm text-center font-bold `}>
            <Text style={tw`text-center`}  disabled={canOpenTelephone}>Call out</Text></TouchableOpacity>
            </View>
          </Callout>
            </Marker>
          ))}

        </MapView>
      ) : (
        <Text>Waiting for location</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapComponent;
