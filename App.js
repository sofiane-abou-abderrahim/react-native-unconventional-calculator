import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState(""); // To manage user input
  const [currentResult, setCurrentResult] = useState(0); // To manage the result

  // Handling user input
  function numberInputHandler(inputText) {
    setEnteredNumber(inputText.replace(/[^0-9]/g, "")); // Filter numbers only
  }

  // Addition function
  function add() {
    const chosenNumber = parseInt(enteredNumber) || 0; // Convert input to a number (default to 0)
    setCurrentResult((prevResult) => prevResult + chosenNumber); // Add to the current result
    setEnteredNumber(""); // Reset the input field
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>
        The Unconventional Calculator
      </Text>
      <StatusBar style="auto" />
      <View>
        {/* Input field */}
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber} // Input field control
          onChangeText={numberInputHandler} // Capture user input
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={add} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="-" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="*" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="/" />
          </View>
        </View>
        <Text style={styles.text}>Result: {currentResult}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 5,
  },
  numberInput: {
    fontSize: 32,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    color: "black",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
