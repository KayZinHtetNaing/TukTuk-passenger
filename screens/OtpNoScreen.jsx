import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { TextInput } from 'react-native';

import {FirebaseRecaptchaVerifierModal} from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';

const tukLogo=require("../assets/images/login.png")

export default function OtpNoScreen({route}) {

  const{message} = route.params;

    const navigation = useNavigation();
    const [verificationId , setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const [code, setCode] = useState('');


    useEffect(() => {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(message, recaptchaVerifier.current)
        .then(setVerificationId)
        .catch(error => console.error("Error verifying phone number:", error));
    }, [message, recaptchaVerifier]);
    

    const confirmCode = () => {
      const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          code
      );
      firebase.auth().signInWithCredential(credential)
      .then (() =>{
          
          navigation.navigate("SignUp", { message:message});
      })
      .catch((error) =>{
          alert(error);
      });
    }
    
    return ( 
    <ScrollView style={tw`flex-1 bg-white`}>
    <SafeAreaView style={tw`flex-1`}>
        <View style={tw`flex-row justify-start bg-orange-400`}>
            <TouchableOpacity style={tw`bg-orange-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 mt-2`} onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size="20" color="white" />
            </TouchableOpacity>
            <Text style={tw`text-orange-400 font-bold text-lg tracking-wide mt-3 ml-5`}>Create New Account</Text>
        </View>
        <View style={tw`flex-1 justify-center items-center mt-20`}>
                    <Image source={tukLogo} style={{width:150,height:150}}/>
                    <Text style={tw`text-orange-400 font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>
        </View>
    </SafeAreaView>
    
    <View style={tw`flex-1 px-8`}>
    <FirebaseRecaptchaVerifierModal
            ref = {recaptchaVerifier}
            firebaseConfig={firebaseConfig}
        />
        <View style={tw`form space-y-2`}>
            <Text style={tw`text-green-700 ml-4 mb-10 mt-5 font-bold text-xl text-center`}>OTP နံပါတ်ပေးပို့နေသည်{message}</Text>

            
                     <Text style={tw`text-gray-700 ml-4 font-normal text-18px text-center`}>အတည်ပြုရန် OTP နံပါတ်ရိုက်ထည့်ပါ</Text>
                        <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mt-5 mb-5 text-center`} 
                         
                        placeholder='OTP နံပါတ်ရိုက်ထည့်ပါ'
                        onChangeText={setCode}
                        keyboardType='number-pad'
                         />

                        <TouchableOpacity style={tw`py-3 rounded-full bg-orange-400 mb-5`} onPress={confirmCode}>
                        <Text style={tw`font-xl font-bold text-center text-white text-base`}>အတည်ပြုမည်</Text>
                        </TouchableOpacity>
        </View>
    </View>
  </ScrollView>
    )
}