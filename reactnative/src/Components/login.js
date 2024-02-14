import * as React from 'react';
import {View, Text, Button} from 'react-native'


function LoginPage({ navigation }) {

    const Authentication = () => {
      navigation.navigate('Home' , {
        Username : "Manan",
        userid : "xyz"
        // passing props to routes
      })
    } 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Page</Text>
        <Button title='Verify' onPress={Authentication}/>
      </View>
    );
  }

  export default LoginPage;