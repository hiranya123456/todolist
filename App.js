import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Navigation from "./components/Navigation" 
import StackNavigator from "./components/StackNavigator"
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen"
import FeedScreen from "./screens/FeedScreen"
import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from "./screens/LoadingScreen"
import firebase from "firebase"
 
import {firebaseConfig} from "./config"
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen:LoginScreen,
  HomeScreen: Navigation,
  FeedScreen:FeedScreen
})
const AppNavigator=createAppContainer(AppSwitchNavigator)

export default class App extends React.Component{
 
 render(){
   return(
     <AppNavigator />
   )
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
