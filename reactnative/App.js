import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Components/home";
import LoginPage from "./src/Components/login";
import { Provider, useSelector } from "react-redux";
import { ReduxStore } from "./redux/store";
import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from './serverur'
const Route = createNativeStackNavigator();

export default function App() {

  const [loader,SetLoader] = useState(true)
  useEffect(() => {
    const AUTH_STATUS = async () => {
      const response = await fetch(`${SERVER_BASE_URL}/authstatus`, {
        method : 'POST',
        headers : {
          "content-type": "application/json",
        },
      })
    }
  })


  const isAuthenticated = true

  return (
    <Provider store={ReduxStore}>
      <NavigationContainer>
        <Route.Navigator>
          {isAuthenticated ? (
            <Route.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
          ) : (
            <Route.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          )}
        </Route.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
