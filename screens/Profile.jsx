import { View, Text, TouchableOpacity, Image,StyleSheet,Title, Alert } from "react-native";
import React,{useState,useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { TextInput,underlineColorAndroid } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
//import ImagePicker from 'react-native-image-crop-picker';

const logoImg=require("../assets/p3.png");

const tukLogo=require("../assets/images/login.png")

export default function ProfileScreen({route}) {
  const {message} = route.params;
  const phoneNumber= message.phoneNumber;
  const cpassword= message.cpassword;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

    
  // const [contact, setContact] = useState([]);
  // const getContact = async () => {
  //     try {
  //       const response = await axios.get(`http://192.168.43.239:3000/passengers/${message._id}`);
  //       // console.log(response.data.data); // Log the fetched data
  //       setContact(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching contact:", error);
  //     }
  //   }
  //   useEffect(() =>{
  //     getContact();
  //   },[])


    const updateProfile = async(updateData) =>{
      const {data} = await axios.put(`http://192.168.43.239:3000/passengers/${message._id}`,updateData)
    }
    const updateProfileHandler = () =>{
      
      const updateData ={name,phoneNumber,password,cpassword};
      console.log(updateData);
      updateProfile(updateData);
      navigation.navigate("Home", { message: updateData }); // Passing the user data to the home screen

      Alert.alert("Your Update Successful");
    }

  

        return(
            <View style={tw`flex-1 bg-orange-400`}>
            <SafeAreaView style={tw`flex`}>
              
              <View style={styles.profileContainer}>

                <View style={styles.imgContainer}>
                    <Image source={logoImg} style={styles.image} />
                    {/* <Image source={profile ? {uri:profile} :logoImg} style={styles.image} /> */}
                    <TouchableOpacity 
                    // onPress={imagePick}
                    style={{alignItems:"flex-end",top:-10,right:20}}>
                      <Entypo name="pencil" size={20} style={{color:"white",borderBottomColor:"white",borderBottomWidth:3}}/>
                      {/* <FontAwesome name="pencil-square-o" size={24} color="white" /> */}
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>{message.name}</Text>
                    </View>
                </View>
              </View>
            </SafeAreaView>
            <View style={tw`flex-1 px-8 pt-8 mt-15 bg-white rounded-t-10`}>
              <View style={tw`form space-y-2`}>
                <Text style={tw`text-gray-700 ml-4 mb-3`}>Name</Text>
                <TextInput
                  style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
                  // underlineColorAndroid={tw`text-orange-400`}
                  
                   placeholder="Enter New Name"
                  defaultValue={message.name}
                  onChangeText={(text) => setName(text)}
                  
                />
      
                <Text style={tw`text-gray-700 ml-4 mb-3`}>Password</Text>
                <TextInput
                  style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
                  secureTextEntry
                  
                  placeholder="Enter New Password"
                  
                  defaultValue={message.password}
                  onChangeText={(text) => setPassword(text)}
                  
                />
      
      
                <TouchableOpacity
                  style={tw`py-3 rounded-full bg-orange-400`}
                  onPress={() =>updateProfileHandler()}
                >
                  <Text
                    style={tw`font-xl font-bold text-center text-white text-base`}
                  >
                    Update Profile Information
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
    )
}

const styles = StyleSheet.create({
  container: {
  //flex:1,
  //  background:'../assets/images/bg.jpg'
    
  },
  profileContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  imgContainer:{
    
  },
  textContainer:{
    alignItems:"center",
  },
  image:{
    width:110,
    height:110,
    borderRadius:55,
    borderColor:"gray",
    borderWidth:3,
  }
 
});