import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import AppBar from "./src/components/AppBar";
import CartsContextProvider from "./src/context/CartsContextProvider";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <CartsContextProvider>
          <AppBar />
          <Main />
        </CartsContextProvider>
      </NativeRouter>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.backgroundColor.primary,
  },
});
