import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState(""); // To manage user input
  const [currentResult, setCurrentResult] = useState(0); // To manage the result
  const [calcDescription, setCalcDescription] = useState(""); // To manage operation description

  // Handling user input
  function numberInputHandler(inputText) {
    setEnteredNumber(inputText.replace(/[^0-9]/g, "")); // Filter numbers only
  }

  function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    setCalcDescription(`${resultBeforeCalc} ${operator} ${calcNumber}`); // Create the description of the operation
  }

  // Addition function
  function add() {
    const chosenNumber = parseInt(enteredNumber) || 0; // Convert input to a number (default to 0)
    setCurrentResult((prevResult) => prevResult + chosenNumber); // Add to the current result
    createAndWriteOutput("+", currentResult, enteredNumber);
    setEnteredNumber(""); // Reset the input field
  }

  // Subtraction function
  function subtract() {
    const chosenNumber = parseInt(enteredNumber) || 0; // Convert input to a number (default to 0)
    setCurrentResult((prevResult) => prevResult - chosenNumber); // Subtract from the current result
    createAndWriteOutput("-", currentResult, enteredNumber);
    setEnteredNumber(""); // Reset the input field
  }

  // Multiplication function
  function multiply() {
    const chosenNumber = parseInt(enteredNumber) || 0; // Convert input to a number (default to 0)
    setCurrentResult((prevResult) => prevResult * chosenNumber); // Multiply with the current result
    createAndWriteOutput("*", currentResult, enteredNumber);
    setEnteredNumber(""); // Reset the input field
  }

  // Division function
  function divide() {
    const chosenNumber = parseInt(enteredNumber) || 0; // Convert input to a number (default to 0)
    if (chosenNumber !== 0) {
      setCurrentResult((prevResult) => prevResult / chosenNumber); // Divide by the current result
    } else {
      alert("Cannot divide by zero!"); // Alert for division by zero
    }
    createAndWriteOutput("/", currentResult, enteredNumber);
    setEnteredNumber(""); // Reset the input field
  }

  function reset() {
    setEnteredNumber("");
    setCurrentResult(0);
    setCalcDescription("");
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
            <Button title="-" onPress={subtract} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="*" onPress={multiply} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="/" onPress={divide} />
          </View>
        </View>
        <Text style={styles.text}>{calcDescription}</Text>
        <Text style={styles.text}>Result: {currentResult}</Text>
        {/* Center the reset button */}
        <View style={styles.centeredContainer}>
          <View style={styles.resetButtonContainer}>
            <Button title="Reset" onPress={reset} color="#FF6347" />
          </View>
        </View>
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
    marginVertical: 8,
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonContainer: {
    width: 80,
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 8,
    elevation: 2,
  },
  centeredContainer: {
    alignItems: "center", // Center horizontally
    marginTop: 20, // Add spacing from previous elements
  },
  resetButtonContainer: {
    width: 120, // Optional: Adjust width for better appearance
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
