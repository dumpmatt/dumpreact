import { Image, StyleSheet, Text, View } from "react-native";

const InfoColumn = ({ img, text }) => {
  return (
    <View style={styles.gridItem}>
      <Image source={img} style={styles.gridIcon} />
      <Text style={styles.gridText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    width: "48%",
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#2824C3",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  gridIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  gridText: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default InfoColumn;
