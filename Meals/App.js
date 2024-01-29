import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <CategoriesScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
