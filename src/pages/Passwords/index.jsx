import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";

import React from "react";

const Passwords = () => {
  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
    }

    loadPasswords();
  }, [focused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },

  title: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default Passwords;
