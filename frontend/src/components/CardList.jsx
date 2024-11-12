import Box from "@mui/material/Box";
import UserCard from "./UserCard";

const CardList = ({
  users,
  setEditingUser,
  deleteUser,
  setIsEditUserIconClicked,
  setIsCreateNewUserIconClicked,
}) => {
  return (
    <Box className="card_list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          setEditingUser={setEditingUser}
          deleteUser={deleteUser}
          setIsEditUserIconClicked={setIsEditUserIconClicked}
          setIsCreateNewUserIconClicked={setIsCreateNewUserIconClicked}
        />
      ))}
    </Box>
  );
};

export default CardList;
