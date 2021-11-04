import React from 'react'
import { View, Text,Button,TouchableOpacity } from 'react-native'

export default function Messages({navigation}) {
    
    return (
        <View>
         
            <TouchableOpacity
                onPress={navigation.navigate('Listing')}
            >   
                <Text>messages </Text>
            </TouchableOpacity>
        </View>
    )
}
