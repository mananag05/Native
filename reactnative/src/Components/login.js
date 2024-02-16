import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { SERVER_BASE_URL } from "../../serverur";
function LoginPage({ navigation }) {
  const [loader, SetLoader] = useState(true);
  const [formData, setFormData] = useState({ userorpass: "", password: "" , email: ""});
  const [login, SetLogin] = useState("Signup"); // for the form change render
  const Authentication = async () => {
    try {
      const response = await fetch(`${SERVER_BASE_URL}/login`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        body : JSON.stringify({ formData })
      });
      const json = await response.json();
      if (response.ok) {
        // navigation.navigate("Home", {
        //   Username: "Manan",
        //   userid: "xyz",});
        console.log("sucess");
        SetLoader(false);
      } else {
        SetLoader(false);
      }
    } catch (error) {
      console.log(error);
      SetLoader(false);
    }
  };

  const HANDLE_CHANGE_FORM = () => {
    if(login === "Signup"){
      SetLogin("Login")
    } else {
      SetLogin("Signup")
    }
    setFormData({ username: "", password: "" })

  }


  return (
    <View style={styles.MainCont}>
      <View style={styles.AuthForm}>
        <Text style={styles.ActiveText}>{login === "Signup" ? "Login" : "Signup"}</Text>
        {login === "Signup" ? (
          <>
          </>
        ) : (
          <View style={styles.inputareacont}>
          <Ionicons
            style={styles.authicons}
            name="person"
            size={32}
            color="#ffffff"
          />
          <TextInput
            onChangeText={(text) =>
              setFormData({ ...formData, email: text })
            }
            secureTextEntry={true}
            selectionColor={"#262626"}
            placeholder="Username"
            style={styles.InputTexts}
          />
        </View>
        )}
        <View style={styles.inputareacont}>
          <Ionicons
            style={styles.authicons}
            name="mail"
            size={32}
            color="#ffffff"
          />
          <TextInput
            onChangeText={(text) =>
              setFormData({ ...formData, userorpass: text })
            }
            selectionColor={"#262626"}
            placeholder={login === "Signup" ? "Email/User" : "Email"}
            style={styles.InputTexts}
          />
        </View>
        <View style={styles.inputareacont}>
          <Ionicons
            style={styles.authicons}
            name="key"
            size={32}
            color="#ffffff"
          />
          <TextInput
            onChangeText={(text) =>
              setFormData({ ...formData, password: text })
            }
            secureTextEntry={true}
            selectionColor={"#262626"}
            placeholder="Password"
            style={styles.InputTexts}
          />
        </View>
        <View style={styles.navtoon}>
          <TouchableOpacity style={styles.submtcont} onPress={Authentication}>
            <Text style={styles.submittext}>SUBMIT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={HANDLE_CHANGE_FORM}>
            <Text style={styles.changetext}>or{login}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  changetext : {
    color : '#b3b3ff',
    marginBottom : 5,
  },
  ActiveText: {
    color: "#d9d9d9",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 9,
    marginBottom: 15,
  },
  InputTexts: {
    width: 140,
    color: "black",
    backgroundColor: "#bfbfbf",
    paddingLeft: 9,
    borderLeftWidth: 2,
    marginLeft: 10,
    borderLeftColor: "#8c8c8c",
  },
  MainCont: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#262626",
    minHeight: "100%",
  },
  AuthForm: {
    width: 300,
    alignItems: "center",
    backgroundColor: "#404040",
    borderWidth: 2,
    borderColor: "#737373",
    borderRadius: 12,
  },
  submittext: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#8c8c8c",
    padding: 5,
    paddingLeft: 9,
    margin: 20,
  },
  inputareacont: {
    flexDirection: "row",
    width: 200,
    backgroundColor: "#bfbfbf",
    height: 50,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#737373",
    alignItems: "center",
    marginBottom: 20,
  },
  authicons: {
    marginLeft: 5,
  },
  navtoon: {
    backgroundColor: "#737373",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderRadius: 10,
  },
});

export default LoginPage;
