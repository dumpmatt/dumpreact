import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Nav from "../components/Nav";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setNewItemDescription] = useState("");

  const handleEditItem = () => {
    // Handle logic to edit the selected item using the entered data
    console.log("Item edited:", {
      selectedItem,
      itemName,
      itemDescription,
    });

    // Clear the input fields
    setSelectedItem("");
    setItemName("");
    setNewItemDescription("");
  };

  const handleSearch = () => {
    // Handle logic to perform search based on the entered item name
    console.log("Searching for item:", itemName);
  };

  return (
    <View style={styles.container}>
      <Nav />
      <Text style={styles.heading}>Modify Item</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={itemName}
          onChangeText={(text) => setItemName(text)}
        />
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label2}>What do you want to change?</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedItem}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Item Name" value="item1" />
        <Picker.Item label="Item Description" value="item2" />
        <Picker.Item label="Item Type" value="item3" />
        <Picker.Item label="Item Code" value="item4" />
        <Picker.Item label="Unit" value="item5" />
        <Picker.Item label="Quantity" value="item6" />
        <Picker.Item label="Batch No." value="item7" />
      </Picker>

      <Text style={styles.label3}>Change With:</Text>
      <TextInput
        style={styles.input}
        value={itemDescription}
        onChangeText={(text) => setNewItemDescription(text)}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={styles.addButton} onPress={handleEditItem}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rectangularShapebot} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // height of the system status bar + normal padding (20) = 50
    paddingTop: Constants.statusBarHeight + 20,
    // height of the bottom rect shape (30) + normal padding (20) = 50
    paddingBottom: 30 + 20,
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: "-33%",
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
  SysName: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 58,
    marginTop: "-8%",
  },
  hamlogo: {
    width: 50,
    height: 50,
    marginLeft: "75%",
    marginTop: "-14%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label1container: {
    width: "80%",
    flexDirection: "row",
    marginRight: 0,
    marginBottom: 10,
  },
  searchButton: {
    width: 70,
    height: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonTextSearch: {
    color: "black",
    fontSize: 14,
  },
  label2: {
    fontSize: 13,
    paddingTop: 70,
    alignSelf: "flex-start",
    marginBottom: 7,
  },
  label3: {
    fontSize: 13,
    paddingTop: 10,
    alignSelf: "flex-start",
    marginBottom: 7,
  },
  picker: {
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#2824C3",
  },
  pickerItem: {
    fontSize: 12, // Adjust the font size as desired
  },
  input1: {
    flex: 1,
    height: 35,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    borderRadius: 999,
    paddingHorizontal: 16,
    marginBottom: 50,
  },
  addButton: {
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginBottom: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  rectangularShapebot: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: "150%",
    backgroundColor: "#2824C3",
  },
});
