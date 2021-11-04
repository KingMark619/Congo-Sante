import React, { Component } from 'react'
import { Dimensions, Text, View, StyleSheet, Image, TextInput, FlatList, ScrollView, Button } from 'react-native'
import { Categories, Doctors, Hospitals } from '../../assets/CongoSanteData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const screenWidth = Dimensions.get('window').width
const screenHeigth = Dimensions.get('window').height

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'King Mark',
            searchBarText:''
        };
        this.Header = this.Header.bind(this)
        this.SearchBar = this.SearchBar.bind(this)
        this.setSearchBarText = this.setSearchBarText.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
        this.Categories = this.Categories.bind(this)
        this.NearbyHospitals = this.NearbyHospitals.bind()
        //this.functionName = this.functionName.bind(this);
    }
    componentDidMount () {
        console.log('hello')
    }
    Header () {
        return (
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerText}>Hello 👋🏾</Text>
                    <Text style={styles.userName}>{this.state.userName}</Text>
                </View>
                <Image
                    source={require('../../assets/icons/male.png')}
                    style={styles.headerImage}
                    resizeMode='cover'
                />
            </View>
        )
    }
    SearchBar ({navigation}) {
        return (
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchBarText}
                    placeholder="Search for doctors or symptoms"
                    value={this.state.searchBarText}
                    onChangeText={this.setSearchBarText}
                    onSubmitEditing={this.submitSearch}
                />
            </View>
        )
    }
    NearbyDoctors () {
        const profileCard = ({ item }) => (
            <View style={styles.profileCardContainer}>
                <Image
                    source={{uri:item.profile}}
                    resizeMode="cover"
                    style={styles.profileCardImage}
                />
                <View style={styles.profileCardInfo}>
                    <Text style={styles.profileCardName}>{item.name}</Text>
                    <Text style={styles.profileCardSpec}>{item.specialty}</Text>
                </View>
            </View>
          );
        return (
            <View style={styles.nearbyContainer}>
                <Text style={styles.userName}>Nearby Doctors</Text>
                <View>
                    <FlatList
                        data={Doctors}
                        renderItem={profileCard}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
    Categories ({navigation}) {
        return(
            <View style={{paddingLeft:10}}>
                <Text style={styles.userName}>Categories</Text> 
                <View style={styles.categoryContainer}>
                    {Categories.map(item => <View id={item.id} style={styles.category}>
                    <Text style={styles.categoryImage}>{item.icon}</Text>
                    <Text style={styles.categoryText}>{item.name}</Text>
                </View>)}
                </View>
            </View>
        )
    }
    NearbyHospitals ({navigation}) {
        const profileCard = ({ item }) => (
            <View id={item.id} style={styles.profileCardContainer}>
                <Image
                    source={{uri: item.profile}}
                    resizeMode="cover"
                    style={styles.profileCardImage}
                />
                <View style={styles.profileCardInfo}>
                    <Text style={styles.profileCardName}>{item.name}</Text>
                    <Text style={styles.profileCardSpec}>{item.distance} Km Away</Text>
                </View>
            </View>
          );
        return (
            <View style={styles.nearbyContainer}>
                <Text style={styles.userName}>Nearby Hospitals</Text>
                <View>
                    <FlatList
                        data={Hospitals}
                        renderItem={profileCard}
                        keyExtractor={item => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
    // Methods are below this point 
    setSearchBarText (text) {
        this.setState({searchBarText: text})  
    }
    submitSearch () {
        console.log('submit pressed')
    }
    // Methods are above this point
     
    // testing happens here
    render() {
        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <this.Header/>
                <this.SearchBar/>
                <this.NearbyDoctors/>
                <this.Categories/>
                <this.NearbyHospitals/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingLeft:20,
        paddingRight:20,
        marginBottom:20
    },
    headerTextContainer:{
        display: 'flex',
        flexDirection:'column',
    },
    headerImage: {
        width: 70,
        height: 70,
        borderRadius: 12,
    },
    headerText:{
        fontSize: 20,
        fontFamily:'Quicksand',
        fontWeight:'400',
        color:'black',
    },
    userName:{
        fontSize: 22,
        fontFamily:'Quicksand',
        fontWeight:'bold',
        color:'black',
    }, 
    searchBar:{
        width: '100%',
        padding: 10,
        marginBottom:20
    },
    searchBarText:{
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#f5f1f2',
        padding: 10,
    },
    nearbyContainer:{
        paddingLeft:10,
        marginBottom:20
    },
    profileCardContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderRadius:12,
        padding: 10,
        width: screenWidth * 0.7,
        height: screenWidth * 0.65,
        borderWidth:1,
        borderColor: '#f5f1f2',
        marginEnd:10,
        marginStart:10,
        marginTop:20,
    },
    profileCardImage:{
        width:'100%',
        height:140,
        borderRadius: 12,
    },
    profileCardInfo:{
        padding:10
    },
    profileCardName:{
        fontSize: 18,
        fontFamily:'Quicksand',
        fontWeight:'500',
        color:'black',
    },
    profileCardSpec:{
        fontSize: 15,
        fontFamily:'Quicksand',
        fontWeight:'400',
        color:'gray',
    },
    categoryContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:screenWidth,
        marginBottom:20,
        flexWrap:'wrap',
        paddingEnd:10
    },
    category:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 12,
        width: screenWidth / 5,
        height:80,
        borderWidth:1,
        borderColor: '#f5f1f2',
        padding: 3,
        marginTop:20,
        marginEnd:10
        
    },
    categoryImage:{
       fontSize:32
    },
    categoryText:{
        fontSize: 12,
        fontFamily:'Quicksand',
        fontWeight:'400',
        color:'gray',
    }
})