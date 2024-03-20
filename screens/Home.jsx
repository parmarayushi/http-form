// src/screens/HomeScreen.js
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import ContactList from "../components/ContactList";
import { deleteContact, getContacts } from "../utilities/service";

export default function HomeScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = useCallback(async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchContacts();
    }, [fetchContacts])
  );

  const handleDelete = async (id) => {
    await deleteContact(id);
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    Alert.alert("Contact Deleted Successfully", `Data with id:${id} deleted.`);
    setContacts(updatedContacts);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate("AddContact")}
      />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
