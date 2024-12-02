import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";
import Nav from "../components/Nav";
import InfoColumn from "../components/InfoColumn";

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <Text style={styles.title}>WIS Contacts</Text>
      <View style={styles.gridContainer}>
        <InfoColumn
          img={require("../assets/fb.png")}
          text="WarehouseInventorySystemBSIT"
        />
        <InfoColumn
          img={require("../assets/twt.png")}
          text="WarehouseInventorySystemBSIT"
        />
        <InfoColumn
          img={require("../assets/ig.png")}
          text="WarehouseInventorySystemBSIT"
        />
        <InfoColumn img={require("../assets/phone.png")} text="09123456789" />
        <InfoColumn
          img={require("../assets/email.png")}
          text="warehouseinventorysystem@gmail.com"
        />
        <InfoColumn img={require("../assets/hotline.png")} text="09123456789" />
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
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "normal",
    marginVertical: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  rectangularShapebot: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "150%",
    backgroundColor: "#2824C3",
  },
});

export default ContactScreen;
