import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}), // you may also use platform-specific files like Title.android.js etc. and make sure imports just say Title.js
    borderColor: "white",                               //   the delegation to correct platform file will be handled behind the scenes
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
