import {View,Text,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { canOpenURL, openURL } from 'expo-linking';

export default function HelpcenterScreen() {

    const navigation = useNavigation();

    const [canOpenTelephone , setcanOpenTelephone] = useState(false);
    canOpenURL("tel:+959459496549").then((canOpen) => setcanOpenTelephone(canOpen));

    const [canOpenMail , setcanOpenMail] = useState(false);
    canOpenURL("mailto:pyaepyae@gmail.com").then((canOpen) => setcanOpenMail(canOpen));
    return ( 
        <View >
       <View style={tw`flex items-center`}>
       
       <Text style={tw`p-3 ml-2 text-orange-700`}>
       If you would like to report any convenience, please contact us using the contact details below.
       </Text>

       </View>

        <View style={tw`flex-row p-5 items-center`}>
        <Feather name="phone-call" size={22} color="black" />
        <TouchableOpacity style={tw`font-semibold  ml-5`} 
          onPress={() => openURL("tel:+959459496549")}><Text style={tw`text-blue-700 underline underline-offset-2 `} disabled={canOpenTelephone}>+959459496549</Text></TouchableOpacity>
        </View>

        <View style={tw`flex-row p-5 items-center`}>
        <FontAwesome5 name="telegram-plane" size={24} color="black" />
        <TouchableOpacity style={tw`font-semibold  ml-5`} 
          onPress={() => openURL("https://t.me/bibiHsu_28")}><Text style={tw`text-blue-700 underline underline-offset-2 `} >Tuk-Tuk Transportation Service Pyay Channel</Text></TouchableOpacity>
        </View>

        <View style={tw`flex-row p-5 items-center`}>
        <FontAwesome name="facebook-f" size={24} color="black" />
        <TouchableOpacity style={tw`font-semibold  ml-5`} 
          onPress={() => openURL("https://www.facebook.com/profile.php?id=100026578210949")}><Text style={tw`text-blue-700 underline underline-offset-2 `}>Tuk-Tuk Transportation Service Pyay</Text></TouchableOpacity>
        </View>

        <View style={tw`flex-row p-5 items-center`}>
        <Feather name="mail" size={24} color="black" />
        <TouchableOpacity style={tw`font-semibold ml-5`} 
          onPress={() => openURL("mailto:pyaepyae@gmail.com")}><Text style={tw`text-blue-700 underline underline-offset-2 `} disabled={canOpenMail}>TukTukPyat@gmail.com</Text></TouchableOpacity>
        </View>


        <View style={tw`flex-row p-5 items-center`}>
        <MaterialCommunityIcons name="office-building-marker" size={25} color="black" />
        <Text style={tw`ml-5`} >University Of Computer Studies,Pyay</Text>
        </View>


        </View>
    )
}