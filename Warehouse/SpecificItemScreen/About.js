import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Nav from "../components/Nav";
import Constants from "expo-constants";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <Text style={styles.title}>ABOUT</Text>
      <View style={styles.box}>
        <Text style={styles.descTitle}>Introduction:</Text>
        <Text style={{ marginBottom: 30, ...styles.description }}>
          Welcome to Warehouse Inventory System, a mobile application designed
          to revolutionize the way businesses manage their inventory. This
          comprehensive and user-friendly app offers a range of features and
          functionalities. Warehouse Inventory System ensures seamless inventory
          management, enabling businesses to optimize their supply chains and
          increase productivity.
        </Text>
        <Text style={styles.descTitle}>This app is developed by:</Text>
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.description}>Ulysses Urich Duran</Text>
          <Text style={styles.description}>La Rhaine Rabino</Text>
          <Text style={styles.description}>Alex Gabrielle Sequito</Text>
          <Text style={styles.description}>Radelyn Pita</Text>
          <Text style={styles.description}>Matt Christopher Romawak</Text>
        </View>

        <Text style={styles.description}>
          We are sure to make your business more efficient. Embrace the future
          of inventory management with Warehouse Inventory System and gain a
          competitive edge in the market.
        </Text>
      </View>
      <View style={styles.rectangularShapebot} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1E1E1",
    paddingHorizontal: 20,
    // height of the system status bar + normal padding (20) = 50
    paddingTop: Constants.statusBarHeight + 20,
    // height of the bottom rect shape (30) + normal padding (20) = 50
    paddingBottom: 30 + 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 10,
    marginTop: 10,
  },
  box: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 1,
    borderColor: "blue",
    borderWidth: 1,
  },
  descTitle: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
  },
  rectangularShapebot: {
    position: "absolute",
    bottom: 0,
    height: 30,
    width: "150%",
    backgroundColor: "#2824C3",
  },
});

export default AboutScreen;
