import { View, Text } from 'react-native'
import React from 'react'
import { useState,useContext } from 'react'
import tw from 'twrnc'
import theme from '../theme/theme'
import themeContext from '../theme/themeContext'

const Notification = () => {

  const theme=useContext(themeContext)

  const [darkMode,setDarkMode]=useState(false)

  return (
    <View style={[{flex:1 ,padding:30},{backgroundColor:theme.backgroundColor}]} >
            <Text  style={[{color:theme.color},{fontSize:20,marginBottom:20}]}>မြိုတွင်းတစ်ကြောင်း -၂၀၀၀ကျပ် (အများဆုံး၃ယောက်)</Text>
            <Text  style={[{color:theme.color},{fontSize:20}]}>အခြား - Driverနှင့်ညှိနှိင်းရန်</Text>
        </View>
  )
}

export default Notification
