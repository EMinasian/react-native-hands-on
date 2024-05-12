import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./components/AppNavigator";
import AuthProvider from "./context/AuthProvider";

export default App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};
