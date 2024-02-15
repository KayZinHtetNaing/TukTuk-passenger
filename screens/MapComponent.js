import React,{useState,useEffect}from 'react'
import { View,StyleSheet } from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { FlipInEasyX } from 'react-native-reanimated'

const MapComponent = () => {
    const [location,setLocation]= useState(null);

    useEffect(()=>{
      (async() =>{
        const {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted')
        {
          console.error('Location permission not granted');
        }
    
        const currentLocation =await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);
      })();
    },[]);

  return (
    <View style={styles.container}>
        {location && (
                <MapView 
                style={{ width: "100%", height: 500 }}
                initialRegion={{
                    latitude:location.latitude,
                    longitude:location.longitude,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421,
                }}
                >
                <Marker
                coordinate={{
                    latitude:location.latitude,
                    longitude:location.longitude,
                }}
                title='You are here'
                />
                    
                </MapView>
            )
        }
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    // map:{
    //     flex:1;
    // }

})

export default MapComponent
