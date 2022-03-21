import * as React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import HomeScreen from "../screens/HomeScreen"
import FeedScreen from "../screens/FeedScreen"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";


const Tab = createBottomTabNavigator();

export default class Navigation extends React.Component {
  render(){
  return (
    
    <NavigationContainer>
 <Tab.Navigator
                labeled={false}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Feed") {
                            iconName = focused ? "add-circle" : "add-circle-outline";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={RFValue(25)}
                                color={color}
                                style={styles.icons}
                            />
                        );
                    }
                })}
                activeColor={"#ee8249"}
                inactiveColor={"gray"}
            >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
}
const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    bottomTabStyleLight: {
        backgroundColor: "#eaeaea",
        height: "8%",
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});