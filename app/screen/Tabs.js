import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, Image } from 'react-native'
import Listing from './Listing'
import Main from './Main'
import Messages from './Messages'

const Tab = createBottomTabNavigator()


export default function Tabs() {
    return (
       <Tab.Navigator>
           <Tab.Screen
                name="Home"
                component={Main}
                options={{
                    tabBarIcon:({focused}) => {
                        <Image
                            source={require('../../assets/icons/female.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused?'red': 'green'
                            }}
                        />
                    }
                }}
           />

           <Tab.Screen
                name="Message"
                component={Messages}
                options={{
                    tabBarIcon:({focused}) => {
                        <Image
                            source={require('../../assets/icons/male.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused?'red': 'green'
                            }}
                        />
                    }
                }}
           />
           <Tab.Screen
                name="Listing"
                component={Listing}
                options={{
                    tabBarIcon:({focused}) => {
                        <Image
                            source={require('../../assets/icons/male.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused?'red': 'green'
                            }}
                        />
                    }
                }}
           />
       </Tab.Navigator>
    )
}
