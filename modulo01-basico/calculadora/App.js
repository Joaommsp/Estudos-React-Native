import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calcular = () => {
    console.log(num1);
    console.log(num2);

    let result = parseFloat(num1) + parseFloat(num2);

    setResult(result);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View>
        <Text>calculadora</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.inputs}
          value={num1 == null ? 0 : num1}
          onChangeText={(text) => setNum1(text)}
        ></TextInput>
        <TextInput
          style={styles.inputs}
          value={num2}
          onChangeText={(text) => setNum2(text)}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text>somar</Text>
      </TouchableOpacity>
      <View style={styles.resultArea}>
        <Text>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
  },

  logoContainer: {
    width: "100%",
    alignItems: "center",
  },

  inputArea: {
    width: "100%",
    gap: 25,
  },

  inputs: {
    backgroundColor: "#000000",
    width: "100%",
    color: "#FFFFFF",
    padding: 14,
  },

  resultArea: {
    marginTop: 25,
  },

  botao: {
    margin: 25,
    backgroundColor: "#FF0000",
    padding: 14,
  },
});
