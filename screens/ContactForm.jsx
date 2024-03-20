// src/components/ContactForm.js
import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { addContact, updateContact } from "../utilities/service";

export default function ContactForm({ route, navigation }) {
  const { contact } = route.params || {};
  const isEditMode = contact ? true : false;
  const [inputs, setInputs] = useState({
    firstName: contact ? contact.firstName : "",
    lastName: contact ? contact.lastName : "",
    email: contact ? contact.email : "",
    contact: contact ? contact.contact : "",
  });

  useEffect(() => {
    navigation.setOptions({
      title: isEditMode ? "Update Contact" : "Add Contact",
    });
  }, [isEditMode, navigation]);

  function handleInputChange(inputs, enteredValue) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [inputs]: enteredValue };
    });
  }

  async function handleSubmit() {
    try {
      if (isEditMode) {
        await updateContact(contact.id, inputs);
        Alert.alert("Contact Updated Successfully");
      } else {
        await addContact(inputs);
        Alert.alert("Contact Added Successfully");
      }
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to save contact. Please try again.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={inputs.firstName}
        onChangeText={handleInputChange.bind(this, "firstName")}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={inputs.lastName}
        onChangeText={handleInputChange.bind(this, "lastName")}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={inputs.email}
        onChangeText={handleInputChange.bind(this, "email")}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        value={inputs.contact}
        onChangeText={handleInputChange.bind(this, "contact")}
      />
      <Button title={isEditMode ? "Update" : "Submit"} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
