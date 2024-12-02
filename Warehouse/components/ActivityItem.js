import { StyleSheet, Text, View } from "react-native";

const ActivityItem = ({ userName, userAction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userAction}>{userAction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 10 },
  userName: { flex: 5, marginRight: 10 },
  userAction: { flex: 3, marginRight: 10 },
});

export default ActivityItem;
