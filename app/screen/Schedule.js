import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, Pressable} from 'react-native'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').heights


const Header = () => {
    return(
        <View>
            <Text style={Styles.primaryText}>Schedule</Text>
        <View style={{ 
            display: 'flex', 
            flexDirection:'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: screenWidth * 0.92,
            height: screenWidth * 0.15,
            backgroundColor:'lightgray',
            borderRadius:8,}}>
            <View style={{padding:10}}><Text style={Styles.thirdText}>Upcoming</Text></View>
            <View style={{padding:10,borderLeftWidth:1, borderRightWidth:1, borderColor:'#8b8b8b'}}><Text style={Styles.thirdText}>Completed</Text></View>
            <View style={{padding:10}}><Text style={Styles.thirdText}>Cancelled</Text></View>
        </View>
        </View>
    )
}

const Visit = ({doctor, specialty, date, time, status, profile}) => {
    const stat = status
    // lets receive status as comfirmed or awaiting ( true or false ),. use that to display status of the booked apointment. 
    return(
        <View>
            <View style={{width:screenWidth*0.92, backgroundColor:'#ffffff', borderRadius:8, height:screenWidth * 0.5}}>
                {/* Top row, top block with icon and doctos name */}
                <View style={{
                    display: 'flex', 
                    flexDirection:'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'center', 
                    borderBottomColor:'#f2f7f2', 
                    borderBottomWidth:1,
                    flex:1}}>
                    <View style={{display: 'flex', flexDirection:'column', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                        <Text style={Styles.thirdText}>Dr Gabriel Kay'man</Text>
                        <Text style={{fontSize:12, color:'gray', fontWeight:'600'}}>Pediatrician</Text>
                    </View>
                    <Image source={require('../../assets/icons/user-male.png')} style={{width:50, height:50, resizeMode:'cover'}} />
                </View>
                    {/* Top row/ bottom block with icons and calendar  */}
                    <View style={{
                        display: 'flex', 
                        flexDirection:'row', 
                        justifyContent: 'space-around',
                        alignItems: 'flex-start', 
                        flex:1,
                        paddingTop:20}}>
                        <View style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent: 'space-around'}}>
                            <Image source={require('../../assets/icons/schedule.png')} style={{width:20, height:20, resizeMode:'cover'}} />
                            <Text style={{fontSize:12, color:'gray', fontWeight:'600'}}>12/02/1995</Text>
                        </View>
                        <View style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent: 'space-around'}}>
                            <Image source={require('../../assets/icons/clock.png')} style={{width:20, height:20, resizeMode:'cover'}} />
                            <Text style={{fontSize:12, color:'gray', fontWeight:'600'}}>10:20 AM</Text>
                        </View>
                        <View style={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent: 'space-around'}}>
                            <Image source={require('../../assets/icons/green-tick.png')} style={{width:20, height:20, resizeMode:'cover'}} />
                            <Text style={{fontSize:12, color:'gray', fontWeight:'600'}}>Comfirmed</Text>
                        </View>
                    </View>
                    {/* Bottom row/ bottom block with bottons */}
                    
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent: 'space-around',
                        marginBottom:10}}>
                        {/* maybe try touchable opacity/ highlight instead of button */}
                        <Pressable style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            height:screenWidth*0.12, 
                            width:screenWidth*0.4, 
                            padding:10,
                            backgroundColor:'lightgray', 
                            borderRadius:8, 
                            }}>
                            <Text style={{
                                fontSize:15,
                                color:'#2B2C2E',
                                fontWeight:'600',
                                alignSelf:'center'}}>Cancel </Text>
                        </Pressable>
                        <Pressable style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            height:screenWidth*0.12, 
                            width:screenWidth*0.4, 
                            padding:10,
                            backgroundColor:'#7266D8', 
                            borderRadius:8,}}>
                            <Text style={{
                                fontSize:15,
                                color:'white',
                                fontWeight:'600',
                                alignSelf:'center'}}>Reschedule </Text>
                        </Pressable>
                    </View>
            </View>
        </View>
    )
}
export default function Schedule() {
    return (
        <View style={Styles.page}>
            <Header/>
            <Text>Nearest visits</Text>
            <Visit/>
            <Text>Future Visits</Text>
            <Visit/>
        </View>
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