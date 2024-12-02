import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Nav from "../components/Nav";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import InventoryItem from "../components/InventoryItem";
import ActivityItem from "../components/ActivityItem";
import { items } from "../dummy-data";

const Main = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Inventory</Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 0, padding: 10 }}
        style={styles.inventoryContainer}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            marginBottom: 20,
          }}
        >
          <Text style={{ flex: 5, marginRight: 10, fontWeight: "bold" }}>
            Name
          </Text>
          <Text style={{ flex: 3, marginRight: 10, fontWeight: "bold" }}>
            Type
          </Text>
          <Text style={{ flex: 1.5, marginRight: 10, fontWeight: "bold" }}>
            Unit
          </Text>
          <Text style={{ flex: 1.5, fontWeight: "bold" }}>Qty.</Text>
        </View>

        {items.map((item) => (
          <InventoryItem
            key={item.id}
            name={item.name}
            type={item.type}
            unit={item.unit}
            qty={item.qty}
          />
        ))}
      </ScrollView>

      <Text style={styles.recentHeading}>Recent Activities</Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 10 }}
        style={styles.recentContainer}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <Text style={{ flex: 5, marginRight: 10, fontWeight: "bold" }}>
            Name
          </Text>
          <Text style={{ flex: 3, marginRight: 10, fontWeight: "bold" }}>
            Action
          </Text>
        </View>
        <ActivityItem userName="John Aeron Sencil" userAction="Add" />
        <ActivityItem userName="Senku Ishigami" userAction="Modify" />
        <ActivityItem userName="Shin Youngwoo" userAction="Delete" />
      </ScrollView>

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
  searchInput: {
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    borderRadius: 999,
    flex: 1,
    marginRight: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  inventoryContainer: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    marginBottom: 20,
    minHeight: 0,
  },
  recentHeading: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 6,
    fontWeight: "bold",
  },
  recentContainer: {
    flex: 1,
    minHeight: 160,
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    padding: 0,
  },
});

export default Main;
