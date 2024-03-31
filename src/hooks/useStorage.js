import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  // Buscar items Salvos
  const getItem = async (key) => {
    try {
    } catch (error) {
      console.log("Erro ao buscar", error);
      return [];
    }
  };

  // Salvar um item no storage
  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("Erro ao salvar ", error);
    }
  };

  // Remover
  const removeItem = async (key, item) => {
    try {
      let passwords = await getItem(key);

      let myPasswords = passwords.filter((password) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPasswords));

      return myPasswords;
    } catch (error) {
      console.log("Erro ao deletar ", error);
    }
  };

  return {
    getItem,
    removeItem,
    saveItem,
  };
};

export default useStorage;
