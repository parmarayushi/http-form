// src/components/ContactList.js
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ContactItems from "./ContactItems";

export default function ContactList({ contacts, onDelete, onUpdate }) {
  function renderContactItem(itemData) {
    return (
      <ContactItems
        {...itemData.item}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  }

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id}
      renderItem={renderContactItem}
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
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  button: {
    marginEnd: 5,
  },
});
