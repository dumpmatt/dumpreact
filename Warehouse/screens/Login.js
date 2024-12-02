import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import Constants from "expo-constants";

const LoginForm = () => {
  const [employeeID, setemployeeID] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (employeeID === "2100908" && password === "admin") {
      setemployeeID("");
      setPassword("");
      navigation.navigate("Main");
    }
    else if (employeeID === "2100916" && password === "admin") {
      setemployeeID("");
      setPassword("");
      navigation.navigate("Main");
    }
    else if (employeeID === "2100888" && password === "admin") {
      setemployeeID("");
      setPassword("");
      navigation.navigate("Main");
    }
    else if (employeeID === "2100894" && password === "admin") {
      setemployeeID("");
      setPassword("");
      navigation.navigate("Main");
    }
    else if (employeeID === "2103052" && password === "admin") {
      setemployeeID("");
      setPassword("");
      navigation.navigate("Main");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangularShapetop} />
      <View style={styles.logo}>
        <Image source={require("../assets/WISlogo.png")} />
        <Text style={styles.title}>Warehouse Inventory System</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Employee ID:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your ID"
            value={employeeID}
            onChangeText={setemployeeID}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { marginRight: 10 }]}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rectangularShapebot} />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1E1E1",
  },
  rectangularShapetop: {
    position: "absolute",
    top: 0,
    height: Constants.statusBarHeight + 5,
    width: "100%",
    backgroundColor: "blue",
  },
  rectangularShapebot: {
    position: "absolute",
    bottom: 0,
    height: 30,
    width: "100%",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  formContainer: {
    width: "80%",
    backgroundColor: "#E1E1E1",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  label: {
    width: 80,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: "#2824C3",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#2824C3",
    borderRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  logo: {
    marginBottom: 100,
    marginTop: -100,
    flexDirection: "row",
    alignItems: "center",
    resizeMode: "contain",
    justifyContent: "center",
  },
});

export default LoginForm;
