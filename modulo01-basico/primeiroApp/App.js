import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "João",
    };

    this.entrar = this.entrar.bind(this)
  }

  entrar() {
    this.setState({
      nome: "Marquinh"
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={{ fontSize: 25, color: "#FF3333" }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
