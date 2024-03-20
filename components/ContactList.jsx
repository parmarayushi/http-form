// src/components/ContactList.js
import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function ContactList({ contacts, onDelete }) {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text
            style={{ fontWeight: "bold" }}
          >{`${item.firstName} ${item.lastName}`}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Contact: {item.contact}</Text>
          <Button title="Delete" onPress={() => onDelete(item.id)} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    fontSize: 24,
  },
});
