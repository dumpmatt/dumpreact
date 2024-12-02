import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/WISlogo.png")} />
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.fieldGroup}>
        <View style={{ flex: 3 }}>
          <Text>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text>Employee ID:</Text>
          <TextInput
            style={styles.input}
            value={employeeId}
            onChangeText={setEmployeeId}
          />
        </View>
      </View>

      <View style={styles.fieldGroup}>
        <View style={{ flex: 3 }}>
          <Text>Middle Name:</Text>
          <TextInput
            style={styles.input}
            value={middleName}
            onChangeText={setMiddleName}
          />
        </View>
        <View style={{ flex: 2, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text>Age:</Text>
            <TextInput style={styles.input} value={age} onChangeText={setAge} />
          </View>

          <View style={{ flex: 1 }}>
            <Text>Sex:</Text>
            <TextInput style={styles.input} value={sex} onChangeText={setSex} />
          </View>
        </View>
      </View>

      <View style={styles.fieldGroup}>
        <View style={{ flex: 3 }}>
          <Text>First Name:</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text>Birthdate:</Text>
          <TextInput
            style={styles.input}
            value={birthdate}
            onChangeText={setBirthdate}
          />
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text>Email Address:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.fieldGroup}>
        <View style={{ flex: 3 }}>
          <Text>Contact No:</Text>
          <TextInput
            style={styles.input}
            value={contactNumber}
            onChangeText={setContactNumber}
          />
        </View>
        <View style={{ flex: 2 }}></View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={[styles.text, styles.link]}
        >
          Log in here
        </Text>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#E1E1E1",
  },
  signupText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  fieldGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    marginRight: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    borderRadius: 4,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: "center",
    width: "50%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  link: {
    color: "blue",
    marginLeft: 5,
  },
  button: {
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
    marginBottom: 50,
    marginTop: -20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default SignUpForm;
