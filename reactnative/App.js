
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Components/home';
import LoginPage from './src/Components/login';

const Route = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Route.Navigator>
        <Route.Screen 
        name='Home' 
        component={HomeScreen}
        // options={{ headerShown: false }}
        />
        <Route.Screen name='Login' component={LoginPage}/>
      </Route.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
