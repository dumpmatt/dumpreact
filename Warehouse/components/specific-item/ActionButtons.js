import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const ActionButtons = ({ logout }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Ionicons.Button
        style={styles.btn}
        backgroundColor="#fff"
        color="#000"
        borderRadius={9999}
        onPress={() => navigation.navigate("Modify Item")}
      >
        <Text style={{ fontWeight: "600" }}>Modify</Text>
      </Ionicons.Button>
      <View style={{ marginLeft: 16 }}>
        <Ionicons.Button
          style={styles.btn}
          backgroundColor="#fff"
          color="#000"
          borderRadius={9999}
          onPress={logout}
        >
          <Text style={{ fontWeight: "600" }}>Delete</Text>
        </Ionicons.Button>
      </View>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2824C3",
    padding: 2,
    paddingLeft: 20,
    paddingRight: 30,
  },
});
