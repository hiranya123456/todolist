import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Navigation from "./Navigation"
import FeedScreen from "../screens/FeedScreen"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Navigation} />
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
