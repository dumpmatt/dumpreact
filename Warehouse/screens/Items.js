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
import { items } from "../dummy-data";
import { useNavigation } from "@react-navigation/native";

const Items = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Nav />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} />
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Items</Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 4,
        }}
        style={styles.inventoryContainer}
      >
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              width: "33%",
              padding: 6,
            }}
            onPress={() => navigation.navigate("Specific Item", { item })}
          >
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#2824C3",
                padding: 6,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image
                  source={item.image}
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={{ textAlign: "center", fontWeight: "600" }}
              >
                {item.name}
              </Text>
              <Text
                numberOfLines={1}
                style={{ textAlign: "center", textTransform: "capitalize" }}
              >
                {item.type}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { marginRight: 10 }]}
          onPress={() => navigation.navigate("Add Item")}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
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
    textAlign: "left",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  inventoryContainer: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    marginBottom: 20,
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
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "flex-end",
  },
  button: {
    borderWidth: 1,
    borderColor: "#2824C3",
    borderRadius: 35,
    paddingVertical: 4,
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default Items;
