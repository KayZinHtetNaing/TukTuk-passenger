import { View, Text, TouchableOpacity, Image } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
//  import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { TextInput } from "react-native";

const tukLogo = require("../assets/images/signup.png");

export default function SignupScreen() {
  // const navigation = useNavigation();
 
    // animation: 'myAnim 2s ease 0s 1 normal forwards',

  
  const [fdata , setFdata] = useState({
    name:"",
    password:"",
    cpassword:"",
  });

  const [errorMessage , setErrorMessage] =useState(null);
  const sendtoBackend = () => {
    // console.log(fdata);
    if(fdata.name == "" ||
    fdata.password =="" ||
    fdata.cpassword =="") 
    {
      setErrorMessage("All fields are required");
      return;
    }
    else if(fdata.password != fdata.cpassword){
      setErrorMessage("Password and Confirm Password must be same");
      return;
    }
    else {
      fetch('http://localhost:3000/passengers', {
        method: 'POST',
        headers: { 
          'Content-type': 'application/json' 
        },
        body: JSON.stringify(fdata)
      })
      .then (res => res.json()).then(
        data => {
          console.log(data);
        }
      )
    }
  }

  return (
    <View style={tw`flex-1 bg-orange-400`}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity
            style={tw`bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size="20" color="orange" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image source={tukLogo} style={{ width: 150, height: 150 }} />
        </View>
      </SafeAreaView>

     
      <View style={tw`flex-1 px-8 pt-8 mt-15 bg-white rounded-t-10`}>
      {
        errorMessage ? <Text style={tw`ml-20 animate-fade-right  text-red-600`} class>{errorMessage}</Text> : null
      }
        <View style={tw`form space-y-2`}>

          <Text style={tw`text-gray-700 ml-4 mb-3`}>Name</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
            
            placeholder="Enter Your Name"
            onChangeText={(text) => setFdata({...fdata, name:text}) }
          />

          <Text style={tw`text-gray-700 ml-4 mb-3`}>Password</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`}
            secureTextEntry
          
            placeholder="Enter Your Password"
            onChangeText={(text) => setFdata({...fdata , password: text})}
          />

          <Text style={tw`text-gray-700 ml-4 mb-3`}>Confirm Password</Text>
          <TextInput
            style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-10`}
            secureTextEntry
            
            placeholder="Enter Your Confirm Password"
            onChangeText = {(text) => setFdata({...fdata, cpassword: text})}
          />

          <TouchableOpacity
            style={tw`py-3 rounded-full bg-orange-400`}
            onPress= {() => {
              sendtoBackend();
            }}
          >
            <Text
              style={tw`font-xl font-bold text-center text-white text-base`}
            >
              Create Account
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
  );
}
