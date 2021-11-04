import React from 'react'
import { 
    ScrollView,
    View,
    Button,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const {ScreenHeight, ScreenWidth} = Dimensions.get('window')
import {icons} from '../../constants/index'

export default function Listing({navigation}) {

    const Listing={
        image:'https://www.gannett-cdn.com/presto/2018/11/08/PKNS/27f6ee4a-f46f-4302-99fc-db0d36ab1a36-mmc-entrance-night.jpg?crop=1820,999,x363,y0&width=3200&height=1680&fit=bounds',
        name:'Mwangeji',
        distance:'2.4',
        openingHours:'12:00 - 21:00',
    }

    function renderHeader (){
        return(
            <View>
                <Image
                    source={{uri:Listing.image}}
                    style={Styles.listingImage}
                    resizeMode='cover'
                />
            </View>
        )
    }

    function renderBody (){
        return(
            <View style={Styles.container}>
                <Text style={Styles.text}>Name : {Listing.name}</Text>
                <Text style={Styles.text}>Distance : {Listing.distance} Km</Text>
                <Text style={Styles.text}>OpeningHours : {Listing.openingHours}</Text>
                <Text style={{fontFamily:'Quicksand'}}>hello therte whats up </Text>
                <TouchableOpacity style={Styles.visit} onPress={navigation.navigate('Messages')}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'600'}}>Visit</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView>
            {renderHeader()}
            {renderBody()}
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    listingImage:{
        width: ScreenWidth,
        height: 400,
    },
    container:{
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginTop:-20,
        paddingTop: 20,
        padding:10,
        backgroundColor:'white',
    },
    visit:{
        width: '60%',
        height: 50,
        alignSelf:'center',
        backgroundColor:'#7266D8',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 12,
    },
    text:{
        fontSize: 20,
        fontFamily:'Quicksand',
        fontWeight:'400',
        color:'black',
    }
})