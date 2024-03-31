import ModalPassword from "../../components/modal";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import Slider from "@react-native-community/slider";
import { useState, React } from "react";

let charset = "aAbBcCdDeEfFGHIJKLMNOPQghijklmnopqrstuvwxyz0123456789?!*$@";

const Home = () => {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  const generatePassword = (size) => {
    let password = "";
    let randomIndex = 0;

    for (let i = 0; i < size; i++) {
      randomIndex = parseInt(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    console.log(password)
    setPasswordValue(password)
    setModalVisible(true)
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"default"}></StatusBar>
      <Image
        source={require("../../assets/images/logo-lock.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={8}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor="#000000"
          thumbTintColor="#392DE9"
          value={size}
          onValueChange={(value) => {
            setSize(value.toFixed(0));
          }}
          step={1}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => generatePassword(size)}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginBottom: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
  },

  button: {
    backgroundColor: "#392DE9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 24,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default Home;
