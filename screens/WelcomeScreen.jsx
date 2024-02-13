// import { View, Text, StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import tw from 'twrnc';

// const logoImg=require("../assets/images/bg1.jpg")
// const tukLogo=require("../assets/images/login.png")

// export default function WelcomeScreen() {
//   const navigation = useNavigation();
//     return ( 
//        <SafeAreaView style={tw`flex-1`}>    
//            {/* <View style={tw`flex-1 flex my-20`}>
//               <Text style={tw`text-black font-bold text-4xl text-center`}>Get Started</Text>
//            </View> */}
//           {/* <View style={tw`flex-row justify-center`}>
//             <Image source={logoImg} />
//           </View> */}
//            <ImageBackground source={logoImg} style={{flex:1}}>
           
//               <View style={tw`flex-1 flex bg-black opacity-80`}>
                 
//                 <View style={tw`flex items-center my-10 text-center z-40`}>
//                 <Image source={tukLogo} style={{width:150,height:150}}/> 
//                   <Text style={tw`text-white font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>
//                   <Text style={tw`text-white text-base font-normal tracking-wide`}>(Travel Service in Pyay)</Text>
                  
//                   <View style={tw`my-30`}>
//                       <Text style={tw`text-white text-base font-thin tracking-wide text-center`}>Always ready to make </Text>
//                       <Text style={tw`text-white text-base font-thin tracking-wide text-center`}>your travel easy</Text>
//                   </View>

//                   <View>
//                     <TouchableOpacity style={tw`bg-orange-500 bg-opacity-100 mx-7 my-10 w-50 rounded-xl py-3 max-w-sm text-center font-bold `} onPress = {() => navigation.navigate('Login')}>
//                     <Text style={tw`text-center`}>Let's Get Started</Text></TouchableOpacity>
                   
//                   <View style={{zindex:0}}>
//                     <TouchableOpacity style={tw`bg-orange-500 bg-opacity-100 mx-7 my-10 w-50 rounded-xl py-3 max-w-sm text-center font-bold`} onPress = {() => navigation.navigate('Login')}>
//                     <Text style={tw`font-xl font-bold text-center text-white  text-base`}>Let's Get Started</Text></TouchableOpacity>
//                   </View> 
                
//                 </View>
                
//               </View>
              
//            </ImageBackground>

//        </SafeAreaView>
//     )
// }




// const styles = StyleSheet.create({
//     container: {
//     //flex:1,
//     //  background:'../assets/images/bg.jpg'
      
//     },
   
//   });
import { View, Text, StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';

const logoImg=require("../assets/images/bg1.jpg")
const tukLogo=require("../assets/images/login.png")

export default function WelcomeScreen() {
  const navigation = useNavigation();
    return ( 
       <SafeAreaView style={tw`flex-1`}>    
           {/* <View style={tw`flex-1 flex my-20`}>
              <Text style={tw`text-black font-bold text-4xl text-center`}>Get Started</Text>
           </View> */}
          {/* <View style={tw`flex-row justify-center`}>
            <Image source={logoImg} />
          </View> */}
           <ImageBackground source={logoImg} style={{flex:1}}>
           
              <View style={tw`flex-1 flex bg-black opacity-80`}>
                 
                <View style={tw`flex items-center my-10 text-center z-40`}>
                <Image source={tukLogo} style={{width:150,height:150}}/> 
                  <Text style={tw`text-white font-bold text-4xl tracking-wide leading-normal`}>Tuk-Tuk </Text>
                  <Text style={tw`text-white text-base font-normal tracking-wide`}>(Travel Service in Pyay)</Text>
                  
                  <View style={tw`my-30`}>
                      <Text style={tw`text-white text-base font-thin tracking-wide text-center`}>Always ready to make </Text>
                      <Text style={tw`text-white text-base font-thin tracking-wide text-center`}>your travel easy</Text>
                  </View>

                  <View>
                    <TouchableOpacity style={tw`bg-orange-500 bg-opacity-100 mx-7 my-10 w-50 rounded-xl py-3 max-w-sm text-center font-bold `} onPress = {() => navigation.navigate('Login')}>
                    <Text style={tw`text-center`}>Let's Get Started</Text></TouchableOpacity>
                   

                  </View> 
                
                </View>
                
              </View>
              
           </ImageBackground>

       </SafeAreaView>
    )
}















const styles = StyleSheet.create({
    container: {
    //flex:1,
    //  background:'../assets/images/bg.jpg'
      
    },
   
  });