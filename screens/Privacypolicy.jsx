import { View, Text } from 'react-native'
import React,{useState,useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'

export default function PrivacyPolicyScreen() {
    const theme=useContext(themeContext)

    const [darkMode,setDarkMode]=useState(false)
    return ( 
        <View style={[{flex:1 , alignItems:"center",justifyContent:"center"},{backgroundColor:theme.backgroundColor}]}>
            <Text style={{color:theme.color}}>We are still developing</Text>
        </View>
    )
}