import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#838383",
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 24,
    borderBottomColor: "#838383",
    borderBottomWidth: 2,
  },
});
