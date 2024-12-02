import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

const NavMenuItem = ({ icon, text, link }) => {
  const navigation = useNavigation();

  return (
    <Ionicons.Button
      style={{
        flexDirection: "row",
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
      }}
      borderRadius={0}
      size={24}
      name={icon}
      onPress={() => navigation.navigate(link)}
      backgroundColor="#fff"
      color="#000"
    >
      <Text style={{ marginLeft: 10, fontWeight: "500" }}>{text}</Text>
    </Ionicons.Button>
  );
};

export default NavMenuItem;
