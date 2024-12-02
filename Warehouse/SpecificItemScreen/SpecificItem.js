import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Nav from "../components/Nav";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Details from "../components/specific-item/Details";
import ActionButtons from "../components/specific-item/ActionButtons";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Image } from "react-native";

const SpecificItem = ({ route }) => {
  const navigation = useNavigation();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleLogout = () => {
    setConfirmDelete(true);
  };

  const handleCancel = () => {
    setConfirmDelete(false);
  };

  const handleConfirm = () => {
    setDeleteSuccess(true);
    // Show success message for 2 seconds and then redirect to items
    setTimeout(() => {
      setDeleteSuccess(false);
      navigation.navigate("Items");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Nav />
      <Details item={route.params.item} />
      <ActionButtons logout={handleLogout} />

      {confirmDelete && (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: -20,
            left: -20,
            backgroundColor: "rgba(0,0,0,0.2)",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
          }}
        >
          {confirmDelete && !deleteSuccess && (
            <View style={styles.box}>
              <Text style={styles.text}>
                Do you really want to delete this item?
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleCancel}
                  style={{
                    backgroundColor: "#E1E1E1",
                    marginRight: 30,
                    ...styles.button,
                  }}
                >
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleConfirm} style={styles.button}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {deleteSuccess && (
            <View style={[styles.box, styles.successBox]}>
              <Text style={styles.successText}>{route.params.item.name}</Text>
              <Image
                source={require("../assets/checkicon.png")}
                style={styles.checkImage}
              />
              <Text style={styles.successText}>Successfully Deleted</Text>
            </View>
          )}
        </View>
      )}

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
  button: {
    borderWidth: 1,
    borderColor: "#2824C3",
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2824C3",
    zIndex: 400,
    padding: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  successText: {
    fontSize: 16,
  },
  checkImage: {
    marginVertical: 20,
  },
});

export default SpecificItem;
