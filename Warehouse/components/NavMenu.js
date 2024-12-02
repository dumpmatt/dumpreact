import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NavMenuItem from "./NavMenuItem";

const NavMenu = ({ show, logout }) => {
  return (
    show && (
      <View style={styles.container}>
        <NavMenuItem icon="home-outline" text="Home" link="Main" />
        <NavMenuItem
          icon="person-circle-outline"
          text="Acc. Information"
          link="Acc Info"
        />
        <NavMenuItem icon="cart-outline" text="Items" link="Items" />
        <NavMenuItem
          icon="information-circle-outline"
          text="About"
          link="About"
        />
        <NavMenuItem icon="call-outline" text="WIS Contacts" link="Contacts" />
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
            <Text style={styles.logoutBtnText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#2824C3",
    position: "absolute",
    top: "100%",
    zIndex: 200,
    flexDirection: "column",
    right: -20,
    width: 200,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  logoutContainer: {
    padding: 20,
    paddingVertical: 30,
  },
  logoutBtn: {
    padding: 10,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#2824C3",
  },
  logoutBtnText: {
    fontWeight: "500",
    textAlign: "center",
  },
});

export default NavMenu;
