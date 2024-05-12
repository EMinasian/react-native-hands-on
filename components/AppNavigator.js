import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import LoginScreen from "../screens/LoginScreen";
import { AuthContext } from "../context/AuthProvider";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Post" component={PostScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
