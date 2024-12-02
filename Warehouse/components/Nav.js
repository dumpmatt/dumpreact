import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NavMenu from "./NavMenu";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [confirmLogout, j] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const navigation = useNavigation();

  const handleLogout = () => {
    setConfirmLogout(true);
  };

  const handleCancel = () => {
    setConfirmLogout(false);
  };

  const handleConfirm = () => {
    // Perform logout actions here
    // For example, clear user session or navigate to login screen
    setLogoutSuccess(true);
    // Show success message for 2 seconds and then redirect to log in
    setTimeout(() => {
      setLogoutSuccess(false);
      navigation.navigate("Login");
    }, 2000);
  };

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/WISlogo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Warehouse Inventory System</Text>
      </View>
      <View style={{ position: "relative" }}>
        <TouchableOpacity onPress={() => setowMenu(!showMenu)}>
          <Image
            source={require("../assets/hamburger.png")}
            style={styles.hamburgerIcon}
          />
        </TouchableOpacity>

        <NavMenu show={showMenu} logout={handleLogout} />
      </View>

      {confirmLogout && (
        <View
          style={{
            position: "absolute",
            top: -Constants.statusBarHeight - 20,
            bottom: -Dimensions.get("screen").height,
            right: -20,
            left: -20,
            backgroundColor: "rgba(0,0,0,0.2)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {confirmLogout && !logoutSuccess && (
            <View style={styles.box}>
              <Text style={styles.text}>Do you want to log out?</Text>
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
                <TouchableOpacity onPress={handnfirm} style={styles.button}>
                  <Text>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {logoutSuccess && (
            <View style={[styles.box, styles.successBox]}>
              <Text style={styles.successText}>Warehouse Inventory System</Text>
              <Image
                source={require("../assets/checkicon.png")}
                style={styles.checkImage}
              />
              <Text style={styles.successText}>Successfully Logged Out</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  hamburgerIcon: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  logoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    zIndex: 400,
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
    fontSize: 18,
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

export default Nav;
