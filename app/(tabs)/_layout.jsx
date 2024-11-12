import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        className="w-8 h-8"
        tintColor={color}
        style={{width: 25, height: 25}}
      />
    </View>
  )
}

const TabLayout = () => {
  return (
   <>
    <Tabs>


      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="inventory"
        options={{
          title:'Inventory',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.nvtry}
            color={color}
            name="Inventory"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="reports"
        options={{
          title:'Reports',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.rprt}
            color={color}
            name="Reports"
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.user}
            color={color}
            name="Profile"
            focused={focused}
           />
          )
        }}
      />

    </Tabs>
    <StatusBar backgroundColor='#333399' style='light'/>
   </>
  )
}

export default TabLayout