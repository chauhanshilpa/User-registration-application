import axios from "axios";

// Create New User
export const addNewUser = async (newUser) => {
  try {
    const response = await axios.post("http://localhost:4001/user", {
      name: newUser.name,
      dateOfBirth: newUser.dateOfBirth,
      email: newUser.email,
    });
    return response;
  } catch (error) {
    console.error("Error creating user:", error);
  }
  return;
};

// Read User
export const getUserData = async () => {
  const response = await axios.get(
    "http://localhost:4001/user"
  );
  return response;
};

// Update Existing User
export const updateExistingUser = async (editingUser) => {
  try {
    const response = axios.patch("http://localhost:4001/user", {
      id: editingUser.id,
      name: editingUser.name,
      dateOfBirth: editingUser.dateOfBirth,
      email: editingUser.email
    });
    return response;
  } catch (error) {
    console.error("Error updating user:", error);
  }
  return;
};

// Delete Existing User
export const deleteExistingUser = async (userId) => {
  try {
    await axios.delete("http://localhost:4001/user", {
      params: {
        userId,
      },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
  return;
};
