import { Platform } from "react-native";

const Shadow = {
  elevation: 4,
  backgroundColor: "white",
  shadowColor: "black",
  shadowOpacity: 0.25,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  overflow: Platform.OS === "android" ? "hidden" : "visible", // so android ripple doesn't go outside rounded corners
};

export default Shadow;
