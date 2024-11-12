import "./App.css";
import { useState, useEffect } from "react";
import {
  getUserData,
  addNewUser,
  deleteExistingUser,
  updateExistingUser,
} from "./api";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardList from "./components/CardList";
import Form from "./components/Form";
import addAUser from "./assets/add-user.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isCreateNewUserIconClicked, setIsCreateNewUserIconClicked] =
    useState(false);
  const [isEditUserIconClicked, setIsEditUserIconClicked] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      await getUser();
    })();
  }, []);

  const getUser = async () => {
    try {
      const response = await getUserData();
      setUsers([...response.data]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const createUser = async () => {
    setIsCreateNewUserIconClicked(false);
    setIsLoading(true);
    try {
      await addNewUser(newUser);
      await getUser();
    } catch (error) {
      console.error("Error creating user:", error);
    }
    setNewUser({ name: "", email: "", dateOfBirth: "" });
    setIsLoading(false);
  };

  const updateUser = async () => {
    setIsEditUserIconClicked(false);
    setIsLoading(true);
    try {
      await updateExistingUser(editingUser);
      await getUser();
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
    setIsLoading(false);
  };

  const deleteUser = async (event, id) => {
    event.stopPropagation();
    setIsLoading(true);
    try {
      await deleteExistingUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    setIsLoading(false);
  };

  return (
    <Box className="app">
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "transalte(-50% -50%)",
        }}
      >
        {isLoading && (
          <img
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
            alt=""
          />
        )}
      </Box>
      {isCreateNewUserIconClicked && (
        <Form
          formType="create"
          userState={newUser}
          setUserState={setNewUser}
          onClickFunction={createUser}
          setIsCreateNewUserIconClicked={setIsCreateNewUserIconClicked}
          setIsEditUserIconClicked={setIsEditUserIconClicked}
        />
      )}
      {editingUser && isEditUserIconClicked && (
        <Form
          formType="edit"
          userState={editingUser}
          setUserState={(userState) => setEditingUser(userState)}
          onClickFunction={updateUser}
          setIsCreateNewUserIconClicked={setIsCreateNewUserIconClicked}
          setIsEditUserIconClicked={setIsEditUserIconClicked}
        />
      )}
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h1" className="app-name">
          User Management
        </Typography>
        <img
          src={addAUser}
          alt="add new user icon"
          width={40}
          height={40}
          className="icon add-user-icon"
          onClick={() => {
            setIsCreateNewUserIconClicked(true);
            setIsEditUserIconClicked(false);
          }}
        />
        <CardList
          users={users}
          deleteUser={deleteUser}
          setEditingUser={setEditingUser}
          setIsEditUserIconClicked={setIsEditUserIconClicked}
          setIsCreateNewUserIconClicked={setIsCreateNewUserIconClicked}
        />
      </Box>
    </Box>
  );
};

export default App;
