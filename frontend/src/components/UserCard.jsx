import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const UserCard = ({
  user,
  setEditingUser,
  deleteUser,
  setIsEditUserIconClicked,
  setIsCreateNewUserIconClicked,
}) => {
  return (
    <div>
      <Box className="card">
        <Box className="card_content">
          <Typography className="name">{user.name}</Typography>
          <Typography className="date_of_birth">{user.dateOfBirth}</Typography>
          <Typography className="email">Email: {user.email}</Typography>
        </Box>
        <Box className="delete_and_edit_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
            className="icon edit-icon"
            onClick={(event) => {
              event.stopPropagation();
              setEditingUser(user);
              setIsEditUserIconClicked(true);
              setIsCreateNewUserIconClicked(false);
            }}
          >
            <path
              fill="#E57373"
              d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718C43.139,10.526,43.139,9.625,42.583,9.067"
            ></path>
            <path
              fill="#FF9800"
              d="M4.465 21.524H40.471999999999994V29.535H4.465z"
              transform="rotate(134.999 22.469 25.53)"
            ></path>
            <path
              fill="#B0BEC5"
              d="M34.61 7.379H38.616V15.392H34.61z"
              transform="rotate(-45.02 36.61 11.385)"
            ></path>
            <path fill="#FFC107" d="M6.905 35.43L5 43 12.571 41.094z"></path>
            <path fill="#37474F" d="M5.965 39.172L5 43 8.827 42.035z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
            className="icon delete-icon"
            onClick={(event) => deleteUser(event, user.id)}
          >
            <path
              fill="#9575CD"
              d="M34,12l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V12H34z"
            ></path>
            <path
              fill="#7454B3"
              d="M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19C26 38.3 25.3 39 24.5 39zM31.5 39L31.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C33 38.3 32.3 39 31.5 39zM16.5 39L16.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C18 38.3 17.3 39 16.5 39z"
            ></path>
            <path
              fill="#B39DDB"
              d="M11,8h26c1.1,0,2,0.9,2,2v2H9v-2C9,8.9,9.9,8,11,8z"
            ></path>
          </svg>
        </Box>
      </Box>
    </div>
  );
};

export default UserCard
