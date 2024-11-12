import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import { userList } from "./users.js";

const port = 4001;
const app = express();
app.use(cors());
app.use(bodyParser.json());

let usersList = [...userList];

app.post("/user", async (req, res) => {
  let { name, dateOfBirth, email } = req.body;
  let userId = uuidv4();
  dateOfBirth = dateOfBirth ? dateOfBirth : new Date().toLocaleDateString();
  let user = {
    id: userId,
    name,
    dateOfBirth,
    email
  };
  usersList.push({...user});
  res.send();
});

app.get("/user", async (req, res) => {
  const newUsersList = [...usersList];
  res.send(newUsersList);
});

app.patch("/user", async (req, res) => {
  const { id, name, dateOfBirth, email } = req.body;
  let newUsersList = [...usersList];
  const toUpdateUserIndex = newUsersList.findIndex((user) => user.id === id);
  newUsersList[toUpdateUserIndex].name = name;
  newUsersList[toUpdateUserIndex].dateOfBirth = dateOfBirth;
  newUsersList[toUpdateUserIndex].email = email;
  usersList = [...newUsersList]
  res.send();
});

app.delete("/user", async (req, res) => {
  const { userId } = req.query;
  const toDeleteUserIndex = usersList.findIndex((user) => user.id === userId);
  usersList.splice(toDeleteUserIndex, 1);
  res.send();
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
