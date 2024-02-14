import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  Title,
  ScrollView,
  Alert
} from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import tw from "twrnc";
import axios from "axios";
import { TextInput, underlineColorAndroid } from "react-native";
import ModalPicker from "./ModalPicker";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

export default function HomeScreen() {
const [name, setName] = useState('') ;
const [phoneNumber,setPhone] = useState('') ;
const [from , setFrom] = useState('');
const [to ,setTo] = useState('');
const [NOcar, setCar] =useState ('');

const createLocation = async (contact) => {
  try {
    const { data } = await axios.post(
      "http://192.168.1.198:3000/map_location",
      contact
    );
    console.log("Response from server:", data);
  } catch (error) {
    console.error("Error while sending data:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
};


const [errorMessage , setErrorMessage] =useState(null);
  const sendtoBackend = () => {
    
    if(!name || !phoneNumber || !from || !to || !NOcar) 
    {
      setErrorMessage("All fields are required");
      return;
    }
   
    else {
      
    console.log(name , phoneNumber , from , to, NOcar);
    const contact ={name, phoneNumber, from , to , NOcar};
     
    
      createLocation(contact);
      setName('')
      setPhone('')
      setFrom('')
      setTo('')
      setCar('')
      Alert.alert("Successfully send");

     

    }

    
  }



  map = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 18.818752452008397,
      longitude: 95.220778226511,
    },
  };

  //   onChangeValue = region =>{
  // alert(JSON.stringify(region))
  //     this.setState({
  //       region
  //     })
  //   }
  const [chooseData, setchooseData] = useState("Select Number of car...");
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };
  const setData = (option) => {
    setchooseData(option);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: "100%", height: 300 }}
          initialRegion={this.map.region}
        />

        <View style={tw`flex-1 px-8 pt-8 bg-white`}>
          <View style={tw`form space-y-2`}>
            <Text style={tw`text-gray-700 ml-4 mb-1`}>Name</Text>
            <TextInput
  style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2`}
  placeholder="Enter Your Name"
  onChangeText={(text) => setName(text)}
  value={name}
/>
<Text style={tw`text-gray-700 ml-4 mb-1`}>Phone Number</Text>

<TextInput
  style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2`}
  placeholder="Enter Your Phone number"
  keyboardType = 'numeric'
  onChangeText={(text) => setPhone(text)}
  value={phoneNumber}
/>

<Text style={tw`text-gray-700 ml-4 mb-1`}>From</Text>

<TextInput
  style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2`}
  placeholder="Entery Your Location"
  onChangeText={(text) => setFrom(text)}
  value={from}
/>

<Text style={tw`text-gray-700 ml-4 mb-1`}>To</Text>

<TextInput
  style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2`}
  placeholder="Enter Location where You wanna Go"
  onChangeText={(text) => setTo(text)}
  value={to}
/>

<Text style={tw`text-gray-700 ml-4 mb-1`}>Number of Tuk-Tuk</Text>

<TextInput
  style={tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2`}
  placeholder="Enter number of Tuk-Tuk what you want"
  keyboardType = 'numeric'
  onChangeText={(text) => setCar(text)}
  value={NOcar}
/>



            {/* <Text style={tw`text-gray-700 ml-4 mb-1`}>Numbers of Car</Text>
            <TouchableOpacity
              onPress={() => changeModalVisibility(true)}
              style={[
                styles.touchableOpacity,
                tw`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3`,
              ]}
              onChange={(e) => {
                  setCar(e.nativeEvent.text);
                  console.log(e.nativeEvent.text);
                }}
            >
              <Text style={tw`text-gray-700`}>{chooseData}</Text>
            </TouchableOpacity> */}

            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => changeModalVisibility(false)}
            >
              <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData={setData}
              />
            </Modal>

            <TouchableOpacity
              style={tw`py-3 rounded-full bg-orange-400 mb-5`}
              onPress={() => {sendtoBackend()}}
            >
              <Text
                style={tw`font-xl font-bold text-center text-white text-base`}
              >
                Go
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={tw`flex-row justify-center mt-5`}>
              <Text style={tw`font-semibold text-grey-700`}>
                Already have an account?
              </Text>
              <TouchableOpacity
                style={tw`font-semibold text-orange-400`}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </TouchableOpacity>
            </View> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // text:{
  //   marginVertical:20,
  //   fontSize:15,
  // },
  // touchableOpacity:{
  // }
});

//  <ModalPicker
//  changeModalVisibility={changeModalVisibility}
//  setData={setData}
//  />
// <MapView
// style={{flex:1}}
// initialRegion={this.state.region}
// onRegionChangeComplete={this.onChangeValue}
// />
// <View style={{top:'50%',left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
// <Image style={{height:40,width:40}} source={mapLogo} />
// </View>

// import React, { useRef,useState } from 'react';
// import MapView, { LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import { StyleSheet, View,Text, Dimensions} from 'react-native';
// // import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Constants from 'expo-constants';
// import {
//   GooglePlaceDetail,
//   GooglePlacesAutocomplete,
// } from "react-native-google-places-autocomplete";
// import { GOOGLE_API_KEY } from './environment';
// //18.818752452008397, 95.220778226511
// const { width, height } = Dimensions.get("window");

// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const INITIAL_POSITION = {
//   latitude: 18.818752452008397,
//   longitude: 95.220778226511,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,
// };

// type InputAutocompleteProps = {
//   label: string;
//   placeholder?: string;
//   onPlaceSelected: (details: GooglePlaceDetail | null) => void;
// };

// function InputAutocomplete({
//   label,
//   placeholder,
//   onPlaceSelected,
// }: InputAutocompleteProps) {
//   return (
//     <>
//       <Text>{label}</Text>
//       <GooglePlacesAutocomplete
//         styles={{ textInput: styles.input }}
//         placeholder={placeholder || ""}
//         fetchDetails
//         onPress={(data, details = null) => {
//           onPlaceSelected(details);
//         }}
//         query={{
//           key: GOOGLE_API_KEY,
//           language: "pt-BR",
//         }}
//       />
//     </>
//   );
// }

// export default function HomeScreen() {

//   // const [origin, setOrigin] = useState<LatLng | null>();
//   // const [destination, setDestination] = useState<LatLng | null>();
//   // const [showDirections, setShowDirections] = useState(false);
//   // const [distance, setDistance] = useState(0);
//   // const [duration, setDuration] = useState(0);
//   // const mapRef = useRef<MapView>(null);
//   // const moveTo=(position:LatLng)=>{
//   //   const camera = await mapRef.current?.getCamera();
//   //   if (camera) {
//   //     camera.center = position;
//   //     mapRef.current?.animateCamera(camera, { duration: 1000 });
//   //   }

//   // };

//   // const onPlaceSelected=(details:GooglePlaceDetail | null, flag: "origin" | "destiantion") =>{
//   //     const set = flag === "origin" ? setOrigin : setDestination
//   //     const position = {
//   //       latitude: details?.geometry.location.lat || 0,
//   //       longitude: details?.geometry.location.lng || 0,

//   //     }
//       // set(position);
//       // moveTo(position);
//   // };
//     return (
//         <View style={styles.container}>
//          <MapView

//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         initialRegion={INITIAL_POSITION}
//       >
//         {/* {origin && <Marker coordinate={origin} />}
//         {destination && <Marker coordinate={destination} />}
//         {showDirections && origin && destination && (
//           <MapViewDirections
//             origin={origin}
//             destination={destination}
//             apikey={GOOGLE_API_KEY}
//             strokeColor="#6644ff"
//             strokeWidth={4}
//             onReady={traceRouteOnReady}
//           /> */}
//         {/* )} */}
//       </MapView>
//         <View style={styles.searchcontainer}>
//         <InputAutocomplete
//           label="Origin"
//           onPlaceSelected={(details) => {
//             onPlaceSelected(details, "origin");
//           }}
//         />
//         <InputAutocomplete
//           label="Destination"
//           onPlaceSelected={(details) => {
//             onPlaceSelected(details, "destination");
//           }}
//         />
//         </View>
//       </View>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     map: {
//       width: Dimensions.get("window").width,
//       height: Dimensions.get("window").height,
//     },
//     searchcontainer:{
//       position:"absolute",
//       width:"90%",
//       backgroundColor:"white",
//       shadowColor:"black",
//       shadowOffset:{width:2,height:2},
//       shadowOpacity:0.5,
//       shadowRadius:4,
//       elevation:4,
//       padding:10,
//       borderRadius:8,
//       top:Constants.statusBarHeight,
//     },
//     input:{
//      borderColor:"grey",
//      borderWidth:1,
//      margin:4,
//     }
//   });
