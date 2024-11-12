import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { MdCancel } from "react-icons/md";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Form = ({
  formType,
  userState,
  setUserState,
  onClickFunction,
  setIsCreateNewUserIconClicked,
  setIsEditUserIconClicked,
}) => {
  const [value, setValue] = useState(dayjs("2024-11-12"));

  useEffect(() => {
    setUserState({
      ...userState,
      dateOfBirth: new Date(value).toLocaleDateString(),
    });
    // eslint-disable-next-line
  }, [value]);

  return (
    <Card className="form-card">
      <MdCancel
        className="cancel-icon"
        onClick={() => {
          setIsCreateNewUserIconClicked && setIsCreateNewUserIconClicked(false);
          setIsEditUserIconClicked && setIsEditUserIconClicked(false);
        }}
      />
      <Typography variant="h2" className="form-heading">
        {formType === "create" && "Create User"}
        {formType === "edit" && "Edit User"}
      </Typography>
      <Box className="text-fields-box">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="text-field"
          value={userState.name}
          onChange={(e) => setUserState({ ...userState, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          className="text-field"
          value={userState.email}
          onChange={(e) =>
            setUserState({ ...userState, email: e.target.value })
          }
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="pick the date"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      {formType === "create" && (
        <Button variant="contained" onClick={onClickFunction}>
          Add User
        </Button>
      )}
      {formType === "edit" && (
        <Button variant="contained" onClick={onClickFunction}>
          Update User
        </Button>
      )}
    </Card>
  );
};

export default Form;
