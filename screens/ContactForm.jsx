// src/components/ContactForm.js
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import { addContact } from "../utilities/service";

const contactForm = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
};

export default function ContactForm({ route, onSubmit, navigation }) {
  const [inputs, setInputs] = useState(contactForm);

  //   const { id } = route.params;

  //   /**
  //    * gets emp by id
  //    */
  //   const fetchContactDetails = async () => {
  //     try {
  //       const contactDetails = await getContactById(id);
  //       setInputs(contactDetails);
  //       console.log(contactDetails);
  //     } catch (error) {
  //       console.error("Error fetching contactDetails:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     if (id) {
  //       fetchContactDetails();
  //     }
  //   }, [id]);

  function handleInputChange(inputs, enteredValue) {
    setInputs((prevInputs) => {
      return { ...prevInputs, [inputs]: enteredValue };
    });
  }

  function handleSubmit() {
    addContact(inputs);
    Alert.alert("Contact Added Successfully");

    navigation.navigate("Home");
    setInputs(contactForm);
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
