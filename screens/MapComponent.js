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
      const response = await axios.get("http://192.168.43.9:3000/driverLocation");
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
    { latitude: 18.837826207395654, longitude: 95.33249633867997, title:'Default Marker 1' },
    { latitude: 18.78629231335528, longitude: 95.28559558100723, title: 'Deffault Marker 2' },
    { latitude: 18.82241106975294, longitude: 95.23814828255962, title: 'Marker 3' },
    { latitude: 18.82527708082549, longitude: 95.25823133683004, title: 'Marker 4' },
   
  ];

  

  useEffect(() => {
    setMarkers(defaultMarkers);
  }, []);

  const calloutPressed= (ev:any)=>{
   // console.log(ev);
  };

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
              style={{width:10,height:10}}
            >
            <Callout onPress={calloutPressed} tooltip>
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

            >
           
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
