import { View, Text } from 'react-native'
import { useState,useContext } from 'react'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'

export default function AboutScreen() {  

    const theme=useContext(themeContext)

    const [darkMode,setDarkMode]=useState(false)

    return ( 
        <View style={[{flex:1 , alignItems:"center",justifyContent:"center"},{backgroundColor:theme.backgroundColor},{color:theme.color}]}>
            <Text>သုံးစွဲမှူလမ်းညွှန်</Text>
        </View>
    )
}