import * as React from 'react';
import {View, Text, Button} from 'react-native'


function HomeScreen({ navigation, route }) {

    const {Username , userid} = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title='Goback' onPress={() => navigation.goBack()}/>
        <Text> Hello {Username}</Text>
      </View>
    );
  }

  export default HomeScreen;