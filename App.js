import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // State used to manage list of course goals
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  // When the "Add Goal" button is pressed:
  // updates old courseGoals state by appending the new course goal
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      // removes id from courseGoals if it matches the parameter id
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e8765"
          onPress={startAddGoalHandler}
        />
        {/* Below component contains the input of goal text and button to add new goal to list */}
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        {/* Embed ScrollView in a View component to restrict the space a ScrollView can take up */}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            // for key: you can either make the data a list of objects that have a key and data field,
            //          OR, you can use the keyExtractor prop where id is the equivalent of a key in the list of objects
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              // Below component contains the individual list item components for displaying goal text
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 60,
  },
  goalsContainer: {
    flex: 5,
  },
});
