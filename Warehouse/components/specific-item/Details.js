import { Image, StyleSheet, Text, View } from "react-native";
import DetailItem from "./DetailItem";

const Detail = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Product Name:</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} />
        </View>
        <View>
          <DetailItem label="Item code" value={item.code} />
          <DetailItem label="Unit" value={item.unit} />
          <DetailItem label="Item Description" value={item.description} />
          <DetailItem label="Item Type" value={item.type} />
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: { paddingTop: 40 },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2824C3",
    padding: 20,
    paddingBottom: 40,
  },
  imgContainer: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 40,
  },
  img: {
    resizeMode: "contain",
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "#2824C3",
  },
});
