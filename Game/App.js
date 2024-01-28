import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNum, setUserNum] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumHandler(pickedNum) {
    setUserNum(pickedNum);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNum={pickedNumHandler} />;

  if (userNum) {
    screen = <GameScreen userNum={userNum} onGameOver={gameOverHandler} />;
  }

  if (gameIsOver && userNum) {
    screen = (
      <GameOverScreen
        roundsNum={guessRounds}
        userNum={userNum}
        onStartNewGame={newGameHandler}
      />
    );
  }

  function gameOverHandler(numRounds) {
    setGameIsOver(true);
    setGuessRounds(numRounds);
  }

  function newGameHandler() {
    // need to set userNum to null so we can leave the GameOver screen as is seen in the conditional @38
    setUserNum(null);
    setGuessRounds(0);
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
