// import React, { Component } from 'react'
// import { Dimensions, Text, View, StyleSheet, Image, Button, TextInput, DatePickerIOS } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const screenWidth = Dimensions.get('window').width
// const screenHeigth = Dimensions.get('window').height

// const styles = StyleSheet.create({
//     container:{
//         height: screenHeigth* 0.9,
//         width: screenWidth,
//         backgroundColor: 'white',
//         display: 'flex',
//         flexDirection:'column',
//         alignItems: 'center', 
//         justifyContent: 'space-around'
//     },
//     image:{
//         width: screenWidth * 0.4,
//         height: screenWidth * 0.4
//     },
//     buttonContainer:{
//         display: 'flex',
//         flexDirection:'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         width: screenWidth 
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//       },
// })

// const checkTextFields = (firstName, lastName, type) => {
//     if (firstName && lastName){
//         type ==='register' ? console.log('ready to upload') : console.log('ready to login')
//         // send data to cloud database
//     } else if (firstName === '') {
//         alert('please input first name')
//     } else if (lastName === ''){
//          alert('please input last name')
//     } else {
//         alert('please input first and last name')
//     }
    
// }

// export default class Welcome extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isShowing: "Welcome",
//             firstName: "",
//             lastName: "",
//             phoneNumber:"",
//             chosenDate: new Date()
//         };

//         this.setDate = this.setDate.bind(this); // get new date
//         this.setFirstName = this.setFirstName.bind(this); // get new first name
//         this.setLastName = this.setLastName.bind(this); // get new last name
//         this.register = this.register.bind(this); // register
//         this.login = this.login.bind(this); // login
//         this.WelcomePage = this.WelcomePage.bind(this)
//         this.LoginPage = this.LoginPage.bind(this)
//         this.SignUpPage = this.SignUpPage.bind(this)
       
//       }
//     WelcomePage ({navigation}) {
//         return (
//             <View style={styles.container}>
//                 <Image 
//                         source={require('../../assets/icons/logo.png')}
//                         style={styles.image}
//                         resizeMode="cover"
//                         />
//                     <View style={styles.buttonContainer}>
//                         <Button
//                             title="Login"
//                             color= '#fffff'
//                             onPress={() => navigation.navigate('Login Screen', { name: 'Jane' })}
//                         />
//                         <Button 
//                             title="Sign Up"
//                             color="#7266D8"
//                             onPress={() => navigation.navigate('Register Screen')}
//                         />
//                     </View>
//             </View>
//         )
//     }
//     SignUpPage ({navigation}) {
//         return (
//             <View style={styles.container}>
//                         <Image 
//                             source={require('../../assets/icons/logo.png')}
//                             style={styles.image}
//                             resizeMode="cover"
//                         />
//                         <TextInput
//                             autoCorrect={false}
//                             style={styles.input}
//                             placeholder="First Name"
//                             onChangeText={this.setFirstName}
//                         />
//                         <TextInput
//                             autoCorrect={false}
//                             style={styles.input}
//                             placeholder="Last Name"
//                             onChangeText={this.setLastName}
                            
//                         />
//                         <DatePickerIOS
//                             date={this.state.chosenDate}
//                             onDateChange={this.setDate}
//                         /> 
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Phone number"
//                             keyboardType="numeric"
//                             ontextChange={this.setPhoneNumber}
//                         />
//                         <Button onPress={this.register} title="Sign Up"/>
//                     </View>
//         )
//     }

//     LoginPage ({navigation, route}) {
//         // use route.params to display extra info such as names etc ... 
//         return (
//             <View style={styles.container}>
//                         <Image 
//                             source={require('../../assets/icons/logo.png')}
//                             style={styles.image}
//                             resizeMode="cover"
//                         />
//                         <TextInput
//                             autoCorrect={false}
//                             style={styles.input}
//                             placeholder="First Name"
//                             onChangeText={this.setFirstName}
//                         />
//                         <TextInput
//                             autoCorrect={false}
//                             style={styles.input}
//                             placeholder="Last Name"
//                             onChangeText={this.setLastName}
//                         />
//                         <Button onPress={this.login} title="Login"/>
//                     </View>
//         )
//     }
    
//     // set names to the state of the component

//     setFirstName (firstName) {
//         this.setState({firstName})
//     }
//     setLastName (lastName) {
//         this.setState({lastName})  
//     }
//     setDate(newDate) {
//         this.setState({chosenDate: newDate});
//         console.log(this.state)
//     }
//     setPhoneNumber(phone) {
//         this.setState({phoneNumber: phone});
//         console.log(this.state)
//     }
    
//    register () {
//         // check textfields and send info to cloud database
//         let type = 'register'
//         checkTextFields(this.state.firstName, this.state.lastName,type)
//         // upload to database 
        
//     }

//     login () {
//         // check textfields are not empty
//         let type = 'login'
//         checkTextFields(this.state.firstName, this.state.lastName, type)
//         // check if data is in the database

//         // navigate to welcome screen
//     }

//     render() {
//         return (
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen
//                         name="Welcome Screen"
//                         component={this.WelcomePage}
//                     />
//                     <Stack.Screen
//                         name="Login Screen"
//                         component={this.LoginPage}
//                         options={{title: 'Login'}}
//                     />
//                     <Stack.Screen
//                         name="Register Screen"
//                         component={this.SignUpPage}
//                         options={{title: 'Sign Up'}}
//                     />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         )
//     }
// }
