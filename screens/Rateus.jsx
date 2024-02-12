import { View, Text,TouchableOpacity,Image,StyleSheet,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { TextInput } from 'react-native';
import CheckBox from 'react-native-check-box';

const tukLogo=require("../assets/images/login.png")

export default function RateusScreen() {
  const navigation = useNavigation();

  const [isChecked, setIsChecked]=useState({

    socialmedia:false,
    friends:false,
    searchengine:false,
    other:false
  });

    return ( 
     <ScrollView>   
     <View style={tw`flex-1 bg-white min-h-full`}>
 

     <View style={tw`flex-1 justify-center items-center mt-5`}>
         <Text style={tw`text-orange-500 font-bold text-3xl tracking-wide leading-normal`}>App Feedback </Text>
     </View>

     <View style={tw`flex-1 px-8 pt-8 bg-white rounded-t-10`}>
     <View style={tw`form space-y-2`}>
         <Text style={tw`text-gray-700 ml-4 mb-3`}>Name</Text>

         <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5`} value="" placeholder=""/>

         <Text style={tw`text-gray-700 ml-4 mb-3`}>Feedback</Text>

         <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5  min-h-24`} value="" placeholder=""/>

         <Text style={tw`text-gray-700 ml-4 mb-3`}>Suggestion for improvement</Text>

         <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5  min-h-24`} value="" placeholder=""/>

         <Text style={tw`text-gray-700 ml-4 mb-3`}>How did you hear this App</Text>

         <CheckBox  style={tw`text-gray-700 ml-4 mb-3`} 
         isChecked={isChecked.socialmedia} 
         onClick={() => setIsChecked({...isChecked,socialmedia:!isChecked.socialmedia})} 
         rightText='Social Media' 
         rightTextStyle={{color: isChecked.socialmedia ?'green':'black'}} checkedCheckBoxColor='green' 
         uncheckedCheckBoxColor='red'/>
         
         <CheckBox  style={tw`text-gray-700 ml-4 mb-3`} 
         isChecked={isChecked.friends} 
         onClick={() => setIsChecked({...isChecked,friends:!isChecked.friends})} 
         rightText='Friends' 
         rightTextStyle={{color: isChecked.friends ?'green':'black'}} checkedCheckBoxColor='green' 
         uncheckedCheckBoxColor='red'/>

         <CheckBox  style={tw`text-gray-700 ml-4 mb-3`} 
         isChecked={isChecked.searchengine} 
         onClick={() => setIsChecked({...isChecked,searchengine:!isChecked.searchengine})} 
         rightText='Search Engine(e.g Google)' 
         rightTextStyle={{color: isChecked.searchengine ?'green':'black'}} checkedCheckBoxColor='green' 
         uncheckedCheckBoxColor='red'/>

         <CheckBox  style={tw`text-gray-700 ml-4 mb-3`} 
         isChecked={isChecked.other} 
         onClick={() => setIsChecked({...isChecked,other:!isChecked.other})} 
         rightText='Other' 
         rightTextStyle={{color: isChecked.other ?'green':'black'}} checkedCheckBoxColor='green' 
         uncheckedCheckBoxColor='red'/>
        

        <View style={tw`flex-row justify-between`}>
        <TouchableOpacity style={tw`py-3 rounded-full bg-orange-400 mb-10 mt-5 w-24`} onPress={() =>navigation.navigate("Home")}>
        <Text style={tw`font-xl font-bold text-center text-white text-base`}>Submit</Text>
      </TouchableOpacity>


      <TouchableOpacity style={tw`py-3 mb-10 mt-5 w-24`}>
      <Text style={tw`font-xl text-center text-black underline`}>Clear</Text>
    </TouchableOpacity>
        </View>
        
     </View>
   
 </View>
</View>
     
     </ScrollView>
    )
}