// src/components/ContactForm.js
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const contactForm = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
};

export default function ContactForm({ onSubmit, formState }) {
  const [inputs, setInputs] = useState(formState);

  useEffect(() => {
    setInputs(formState);
  }, [formState]);

  function handleInputChange(inputs, enteredValue) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [inputs]: enteredValue };
    });
  }

  function handleSubmit() {
    onSubmit(inputs);
    // setInputs(contactForm);
  }

  return (
    <View>
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
