import { StyleSheet, Text, View } from "react-native";

// if you already have a dynamic data, you can change the props to the whole object of the product `= (product) => {}`
// then you can just destructure it like so: {product.name} ...
const InventoryItem = ({ name, type, unit, qty }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemType}>{type}</Text>
      <Text style={styles.itemUnit}>{unit}</Text>
      <Text style={styles.itemQty}>{qty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 10 },
  itemName: { flex: 5, marginRight: 10 },
  itemType: { flex: 3, marginRight: 10, textTransform: "capitalize" },
  itemUnit: { flex: 1.5, marginRight: 10 },
  itemQty: { flex: 1.5 },
});

export default InventoryItem;
