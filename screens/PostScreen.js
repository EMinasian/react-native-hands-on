import { StyleSheet, Text, View } from "react-native";

export default PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>A post interface!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
