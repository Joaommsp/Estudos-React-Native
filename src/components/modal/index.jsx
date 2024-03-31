import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

const ModalPassword = ({ password, handleClose }) => {
  const { saveItem } = useStorage();

  const handleCopyPassword = async () => {
    await Clipboard.setStringAsync(password);

    await saveItem("@pass", password);

    alert("Senha salva com sucesso");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handleClose()}>
              Voltar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000090",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    backgroundColor: "#FFFFFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 24,
  },

  innerPassword: {
    backgroundColor: "#0E0E0E",
    width: "90%",
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  text: {
    color: "#FFFFFF",
    textAlign: "center",
  },

  buttonArea: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    padding: 10,
    marginBottom: 24,
  },

  buttonSave: {
    backgroundColor: "#392DE9",
    borderRadius: 8,
  },

  buttonSaveText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ModalPassword;
