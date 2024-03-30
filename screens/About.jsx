import { View, Text ,StatusBar} from 'react-native'
import { useState,useContext } from 'react'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'
import Onboarding from './Onboarding'
import aboutguide from './aboutguide'
export default function AboutScreen() {  

    const theme=useContext(themeContext)

    const [darkMode,setDarkMode]=useState(false)

    return ( 
        <View style={[{flex:1 , alignItems:"center",justifyContent:"center",marginTop:25},{backgroundColor:theme.backgroundColor},{color:theme.color}]}>
             <Onboarding />
            <StatusBar style="auto" />
        </View>
    )
}

