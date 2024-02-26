import {View,Text,TouchableOpacity} from 'react-native';
import React, { useState,useContext } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { canOpenURL, openURL } from 'expo-linking';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'

export default function HelpcenterScreen() {
  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

    const navigation = useNavigation();

    const [canOpenTelephone , setcanOpenTelephone] = useState(false);
    canOpenURL("tel:+959459496549").then((canOpen) => setcanOpenTelephone(canOpen));

    const [canOpenMail , setcanOpenMail] = useState(false);
    canOpenURL("mailto:pyaepyae@gmail.com").then((canOpen) => setcanOpenMail(canOpen));
    return ( 
        <View style={{backgroundColor:theme.backgroundColor}}>
       <View style={tw`flex items-center m-5 mt-10`}>
       
       <Text style={tw`p-3 ml-2 text-red-500`} style={{color:theme.color}}>
       တစ်စုံတရာအဆင်မပြေကြောင်း သတင်းပို့လိုပါက
       အောက်ပါဆက်သွယ်ရန်အသေးစိတ်အချက်အလက်များကို
       အသုံးပြု၍ကျွန်ုပ်တို့ထံဆက်သွယ်ပါ။
        </Text>

       </View>

        <View style={tw`flex-row p-5 items-center`}>
        <Feather name="phone-call" size={22} color="black" style={{color:theme.color}}/>
        <TouchableOpacity style={tw`font-semibold  ml-5`} 
          onPress={() => openURL("tel:+959459496549")}><Text style={tw`text-blue-700 underline underline-offset-2 `} disabled={canOpenTelephone} style={{color:theme.color}}>+959459496549</Text></TouchableOpacity>
        </View>

        <View style={tw`flex-row p-5 items-center`}>
        <FontAwesome5 name="telegram-plane" size={24} color="black" style={{color:theme.color}}/>
        <TouchableOpacity style={tw`font-semibold  ml-5`} 
          onPress={() => openURL("https://t.me/bibiHsu_28")}><Text style={tw`text-blue-700 underline underline-offset-2 `} style={{color:theme.color}}>Tuk-Tuk Transportation Service Pyay Channel</Text></TouchableOpacity>
        </View>

        <View style={tw`flex-row p-5 items-center`}>
        <FontAwesome name="facebook-f" size={24} color="black" style={{color:theme.color}}/>
        <TouchableOpacity style={tw`font-semibold  ml-5`} 
          onPress={() => openURL("https://www.facebook.com/profile.php?id=100026578210949")}><Text style={tw`text-blue-700 underline underline-offset-2 `} style={{color:theme.color}}>Tuk-Tuk Transportation Service Pyay</Text></TouchableOpacity>
        </View>

        <View style={tw`flex-row p-5 items-center`}>
        <Feather name="mail" size={24} color="black" style={{color:theme.color}}/>
        <TouchableOpacity style={tw`font-semibold ml-5`} 
          onPress={() => openURL("mailto:pyaepyae@gmail.com")}><Text style={tw`text-blue-700 underline underline-offset-2 `} disabled={canOpenMail} style={{color:theme.color}}>TukTukPyat@gmail.com</Text></TouchableOpacity>
        </View>


        <View style={tw`flex-row p-5 items-center`}>
        <MaterialCommunityIcons name="office-building-marker" size={25} color="black" style={{color:theme.color}}/>
        <Text style={tw`ml-5`} style={{color:theme.color}}>ကွန်ပျူတာတက္ကသိုလ် (ပြည်မြို့)</Text>
        </View>


        </View>
    )
}