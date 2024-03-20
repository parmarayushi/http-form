import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000",
});

export const getContacts = async () => {
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

export const addContact = async (contact) => {
  try {
    const response = await api.post("/contacts", contact);
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};

export const getContactById = async (id) => {
  try {
    const response = await api.get(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return [];
  }
};

export const updateContact = async (id, updatedContact) => {
  try {
    const response = await api.put(`/contacts/${id}`, updatedContact);
    return response.data;
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    await api.delete(`/contacts/${id}`);
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};
