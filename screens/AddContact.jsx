// src/screens/AddContactScreen.js
import React from "react";
import { Alert, View } from "react-native";
import ContactForm from "../components/ContactForm";
import { addContact } from "../utilities/service";

export default function AddContactScreen({ navigation }) {
  const handleSubmit = async (contact) => {
    await addContact(contact);
    Alert.alert("Contact Added Successfully");
    navigation.navigate("Home");
  };

  return (
    <View>
      <ContactForm onSubmit={handleSubmit} />
    </View>
  );
}
