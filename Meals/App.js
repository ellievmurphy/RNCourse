import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetailsScreen from "./screens/MealsDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer initialRouteName="MealsCategories">
        {/* initializes the screens in the stack */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#cbcbcb" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "#e9e9e9" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categId = route.params.categoryId;

            //   return {
            //     title: categId,
            //   };
            // }}
          />
          <Stack.Screen name="MealsDetail" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
