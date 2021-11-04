import React from 'react'
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, FlatList} from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Header = () => {
    return (
        <View style={{display:"flex", flexDirection:'row', justifyContent: 'space-around', alignItems:'center', backgroundColor:'#FFFFFF'}}>
            <Text style={Styles.primaryText}>Elsie Adkins 👋</Text>
            <Image source={require('../../assets/icons/user-female.png')} style={{width:60,height:60}}/>
        </View>
        
    )
}
const Service = () =>{
    return (
    <View style={{
        display: 'flex',
        flexdirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width:screenWidth*0.98,
        shadowColor:'#8b8b8b',
        shadowOffset:12,
        shadowOpacity:1,
        marginEnd:'12',
        marginStart:'12'}}>
        <View style={{
            backgroundColor:'#7266D8',
            padding:15, 
            borderRadius:12,
            width:screenWidth * 0.4,
            height:screenHeight * 0.2}}>
            <Image source={require('../../assets/icons/hospital.png')} style={{width:60,height:60, flex:2}}/>
            <Text style={{fontSize:18, fontWeight: '500', color: '#ffffff'}}>Clicic visits</Text>
            <Text style={{fontSize:15, fontWeight: '400',color: '#909090'}}>Make an appointment</Text>
        </View>
        <View style={{
            backgroundColor:'#ffffff',
            padding:15, 
            borderRadius:12, 
            width:screenWidth * 0.4,
            height:screenHeight * 0.2}}>
            <Image source={require('../../assets/icons/home.png')} style={{width:60,height:60, flex:2}}/>
            <Text style={{fontSize:18, fontWeight: '500', color: '#2B2C2E'}}>Home visits</Text>
            <Text style={{fontSize:15, fontWeight: '400',color: '#909090'}}>Make an appointment</Text>
        </View>
    </View>
    )
}
const symptomsArray = [
    {
        id:0,
        emoji: '🤒',
        name:'Temperature'
    },
    {
        id:1,
        emoji: '🤧',
        name:'Snuffle'
    },
    {
        id:2,
        emoji: '🤕',
        name:'Headache'
    },
    {
        id:3,
        emoji: '😷',
        name:'Runny nose'
    },
    {
        id:4,
        emoji: '',
        name:'Stomach pain'
    },
    {
        id:5,
        emoji: '🤢',
        name:'Nosea'
    }
]
const Symptoms = () => {
    const Item = ({ item }) => (
        <View style={{
            display:'flex',
            flexDirection:'row',
            backgroundColor:'#eeeae8',
            padding:5,
            marginStart:8,
            marginEnd:8,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius:12,
            width:screenWidth*0.35,
            height:screenHeight*0.05}}>
          <Text style={{marginEnd:5}}>{item.emoji}</Text>  
          <Text style={{fontSize:12, color:'black', fontWeight:'600'}}>{item.name}</Text>
        </View>
      );      
    return(
        <View>
            <Text style={Styles.secondaryText}>What are your symptoms</Text>
            <FlatList
                data={symptomsArray}
                renderItem={Item}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
        
       
    )
}
const doctorsArray = [
    {
        id:1,
        name:`Dr Gabriel Kay'man`,
        specialty:'Generalist',
        sex:'male',
        rating:'4.9'
    },
    {
        id:2,
        name:`Dr Myriam Kay`,
        specialty:'Surgeon',
        sex:'female',
        rating:'4.9'
    },
    {
        id:3,
        name:`Dr Zhupar Nur`,
        specialty:'Therapist',
        sex:'female',
        rating:'4.8'
    },
    {
        id:4,
        name:`Dr Chen`,
        specialty:'Pediatrist',
        sex:'male',
        rating:'4.5'
    }
]
const Doctors = () => {
    const Item = ({item}) => (
        <View style={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor:'#FFFFFF',
            borderRadius:12, 
            width:screenWidth*0.4,
            height:screenHeight*0.2,
            padding:5}}>
            <Image 
                source={item.sex === 'male' ? require('../../assets/icons/user-male.png'):require('../../assets/icons/user-female.png')}
                style={{width:50, height:50, flex:2, resizeMode:'cover'}}
            />
            <Text style={Styles.thirdText}>{item.name}</Text>
            <Text style={{fontSize:12, color:'gray', fontWeight:'600'}}>{item.specialty}</Text>
            <View style={{backgroundColor:'#f5e5df', borderRadius:12, paddingLeft:5, paddingRight:5}}><Text>⭐ {item.rating}</Text></View>
        </View>
    )
    return(
        <View>
            <Text style={Styles.secondaryText}>Popular doctors</Text>
            <FlatList
                data={doctorsArray}
                renderItem={Item}
                keyExtractor={item => item.id}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}


export default function Home() {
    return (
        <ScrollView vertical={true}>
            <Header/>
            <Service/>
            <Symptoms/>
            <Doctors/>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    page:{
        backgroundColor:'#f2f7f2',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryText: {
        fontSize: 28,
        fontWeight:'500',
        color: '#2B2C2E',
    }, 
    secondaryText:{
        fontSize:22,
        fontWeight: '500',
        color: '#2B2C2E'
    },
    thirdText:{
        fontSize:17,
        fontWeight: '500',
        color: '#2B2C2E'

    }
})