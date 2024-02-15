import { View, Text,Switch } from 'react-native'
import React,{useState,useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'

export default function SettingScreen() {
    const theme=useContext(themeContext)

    const [darkMode,setDarkMode]=useState(false)

    return ( 
        <View style={[{flex:1,justifyContent:"flex-start",marginLeft:5,marginRight:5,marginTop:5},{backgroundColor:theme.backgroundColor}]}>
            <Text style={{color:theme.color}}>Dark Mode</Text>
            <Switch
            value={darkMode}
            onValueChange={(value)=>{ 
             setDarkMode(value);
             EventRegister.emit('ChangeTheme',value)
         }}
            />
        </View>
    )
}