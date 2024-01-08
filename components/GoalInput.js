import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  // State used to manage inputted text for new course goal
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // When text is entered in the "Course Goal" input field:
  // updates the enteredGoalText state with input
  function goalInputHandler(input) {
    setEnteredGoalText(input);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#659f6f" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#9eada1" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", //adds padding between input and button
    alignItems: "center",
    padding: 16,
    backgroundColor: "#54785a",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d7efd6",
    backgroundColor: "#d7efd6",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
