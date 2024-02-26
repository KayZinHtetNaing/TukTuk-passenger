import { View, Text,Switch } from 'react-native'
import React,{useState,useContext} from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../theme/themeContext'
import tw from 'twrnc'
export default function SettingScreen() {
    const theme=useContext(themeContext)

    const [darkMode,setDarkMode]=useState(false)

    return ( 
        <View style={[{flex:1,justifyContent:"flex-start",marginLeft:5,marginRight:5,marginTop:5},{backgroundColor:theme.backgroundColor}]}>
            <View style={tw`flex-row dark:text-white items-center ml-5 mt-5 mr-10 justify-between`}>
            <Text style={{color:theme.color}}>Dark Mode</Text>
                <Switch
                value={darkMode}
                onValueChange={(value)=>{ 
                setDarkMode(value);
                EventRegister.emit('ChangeTheme',value)
                
            }}
                />
        </View>
        </View>
        
    )
}