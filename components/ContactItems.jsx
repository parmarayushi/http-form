import { Button, StyleSheet, Text, View } from "react-native";

export default function ContactItems({
  id,
  firstName,
  lastName,
  email,
  contact,
  onDelete,
  onUpdate,
}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>{`${firstName} ${lastName}`}</Text>
      <Text>Email: {email}</Text>
      <Text>Contact: {contact}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Delete" onPress={() => onDelete(id)} />
        </View>
        <View style={styles.button}>
          <Button title="Update" onPress={() => onUpdate(id)} />
        </View>
      </View>
    </View>
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
