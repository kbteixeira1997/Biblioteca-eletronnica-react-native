import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import db from "./config";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import TransactionScreen from "./screens/Transaction";
import SearchScreen from "./screens/Search";
import LoginScreen from "./screens/Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
function Tabs(){
  return(
      <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                if (route.name === "Transação"){
                  iconName = "star";
                } else if (route.name === "Pesquisa"){
                  iconName = "search";
                }
              return(
                <Ionicons
                name={iconName}
                size={size}
                color={color}
                />
              );
              }
            })}
            tabBarOptions={{
              activeTintColor: "cyan",
              inactiveTintColor: "black",
              style: {
                height: 130,
                borderTopWidth: 0,
                backgroundColor: "#5653d4"
              },
              labelStyle: {
                fontSize: 20,
                fontFamily: "Rajdhani_600SemiBold"
              },
              labelPosition: "beside-icon",
              tabStyle: {
                marginTop: 25,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 30,
                borderWidth: 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#5653d4"
              }
            }}            
          >
            <Tab.Screen name="Transação" component={TransactionScreen} />
            <Tab.Screen name="Pesquisa" component={SearchScreen} />
          </Tab.Navigator>
  )
}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      fontLoaded: false
    };
  }


  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return (
        <SafeAreaProvider>
        <NavigationContainer>
         <Stack.Navigator> 
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Sistem" component={Tabs}/> 
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
    }
    return null;
  }
}

