import { StyleSheet, Text, View } from "react-native";

export default LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>A Login interface!</Text>
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
