import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Nav from "../components/Nav";

export default function App() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [unit, setUnit] = useState("");
  const [quantity, setQuantity] = useState("");
  const [batchNo, setBatchNo] = useState("");

  const handleAddItem = () => {
    console.log("Item added:", {
      itemName,
      itemDescription,
      itemType,
      itemCode,
      unit,
      quantity,
      batchNo,
    });

    setItemName("");
    setItemDescription("");
    setItemType("");
    setItemCode("");
    setUnit("");
    setQuantity("");
    setBatchNo("");
  };

  return (
    <View style={styles.container}>
      <Nav />
      <Text style={styles.heading}>Add Item</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.label1}>Item Name:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />
        </View>
        <Text style={styles.label1}>Item Description:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={itemDescription}
            onChangeText={(text) => setItemDescription(text)}
          />
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputContainerBeside1}>
            <Text style={styles.labelBeside1}>Item Type:</Text>
            <TextInput
              style={styles.input}
              value={itemType}
              onChangeText={(text) => setItemType(text)}
            />
          </View>
          <View style={styles.inputContainerBeside2}>
            <Text style={styles.labelBeside2}>Item Code:</Text>
            <TextInput
              style={styles.input}
              value={itemCode}
              onChangeText={(text) => setItemCode(text)}
            />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputContainerBeside1}>
            <Text style={styles.labelBeside1}>Unit:</Text>
            <TextInput
              style={styles.input}
              value={unit}
              onChangeText={(text) => setUnit(text)}
            />
          </View>
          <View style={styles.inputContainerBeside2}>
            <Text style={styles.labelBeside2}>Quantity:</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={(text) => setQuantity(text)}
            />
          </View>
        </View>

        <Text style={styles.label2}>Batch No.:</Text>
        <View style={styles.inputContainerBeside3}>
          <TextInput
            style={styles.input}
            value={batchNo}
            onChangeText={(text) => setBatchNo(text)}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
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
  SysName: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: "-9%",
  },
  hamlogo: {
    width: 50,
    height: 50,
    marginLeft: "75%",
    marginTop: "-9%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "flex-start",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  label1: {
    fontSize: 13,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  label2: {
    fontSize: 13,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  labelBeside1: {
    fontSize: 13,
    marginBottom: 5,
  },
  labelBeside2: {
    fontSize: 13,
    marginBottom: 5,
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  inputContainer: {
    marginBottom: 10,
    overflow: "hidden",
  },
  inputContainerBeside1: {
    flex: 1,
    marginRight: 15,
    marginBottom: -10,
    marginTop: 5,
  },
  inputContainerBeside2: {
    flex: 1,
    marginBottom: -10,
    marginTop: 5,
  },
  inputContainerBeside3: {
    marginBottom: 30,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#fff",
    borderRadius: 999,
    width: "100%",
    height: 35,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
  addButton: {
    borderColor: "blue",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 40,
    marginBottom: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
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
