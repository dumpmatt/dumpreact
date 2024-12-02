import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Nav from "../components/Nav";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const AccInfo = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <Text style={styles.title}>Hello User!</Text>
      <View style={styles.upperProfileContainer}>
        <Image
          source={require("../assets/profile.png")}
          style={styles.profile}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", marginBottom: 14 }}>
            <View style={{ flex: 3, marginRight: 20 }}>
              <Text>Employee ID:</Text>
              <View style={styles.field}>
                <Text>2103052</Text>
              </View>
            </View>

            <View style={{ flex: 1.5 }}>
              <Text>Age:</Text>
              <View style={styles.field}>
                <Text>20</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3, marginRight: 20 }}>
              <Text>Birthdate:</Text>
              <View style={styles.field}>
                <Text>11/17/06</Text>
              </View>
            </View>

            {/* leave empty */}
            <View style={{ flex: 1.5 }}></View>
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text>Name:</Text>
        <View style={styles.field}>
          <Text>Ulysses Urich Duran</Text>
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text>Email Address:</Text>
        <View style={styles.field}>
          <Text>ulysses@gmail.com</Text>
        </View>
      </View>
      <View>
        <Text>Contact No.:</Text>
        <View style={styles.field}>
          <Text>0912345678</Text>
        </View>
      </View>

      <View style={styles.rectangularShapebot} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // height of the system status bar + normal padding (20) = 50
    paddingTop: Constants.statusBarHeight + 20,
    // height of the bottom rect shape (30) + normal padding (20) = 50
    paddingBottom: 30 + 20,
  },
  rectangularShapebot: {
    position: "absolute",
    bottom: 0,
    height: 30,
    width: "150%",
    backgroundColor: "#2824C3",
  },
  title: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  profile: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    marginRight: 20,
  },
  upperProfileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  field: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2824C3",
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 4,
  },
});

export default AccInfo;
