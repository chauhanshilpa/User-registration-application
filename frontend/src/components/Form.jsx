import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const Form = ({
  formType,
  userState,
  setUserState,
  onClickFunction,
  setIsCreateNewUserIconClicked,
  setIsEditUserIconClicked,
}) => {
  const [MUIdateValue, setMUIdateValue] = useState(dayjs("12/11/2024"));

  const handleOnChange = (newValue) => {
    setUserState({
      ...userState,
      dateOfBirth: dayjs(newValue).format("DD/MM/YYYY"),
    });
  };

  return (
    <Card className="form-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 64 64"
        className="icon cancel-icon"
        onClick={() => {
          setIsCreateNewUserIconClicked && setIsCreateNewUserIconClicked(false);
          setIsEditUserIconClicked && setIsEditUserIconClicked(false);
        }}
      >
        <circle cx="32" cy="32" r="23" fill="#fd3c4f"></circle>
        <path
          fill="#fff"
          d="M32,14c2.577,0,4.674-1.957,4.946-4.461C35.352,9.19,33.699,9,32,9 C19.297,9,9,19.297,9,32c0,1.699,0.19,3.352,0.539,4.946C12.044,36.674,14,34.577,14,32C14,22.075,22.075,14,32,14z"
          opacity=".3"
        ></path>
        <path
          d="M54.461,27.054C51.956,27.326,50,29.423,50,32c0,9.925-8.075,18-18,18 c-2.577,0-4.674,1.957-4.946,4.461C28.648,54.81,30.301,55,32,55c12.703,0,23-10.297,23-23C55,30.301,54.81,28.648,54.461,27.054z"
          opacity=".15"
        ></path>
        <ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse>
        <path
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="3"
          d="M15.047,23.427c1.878-3.699,4.932-6.705,8.666-8.522"
        ></path>
        <path
          fill="#ffce29"
          d="M44.021,41.192l-2.828,2.828c-1.172,1.172-3.071,1.172-4.243,0L19.979,27.05	c-1.172-1.172-1.172-3.071,0-4.243l2.828-2.828c1.172-1.172,3.071-1.172,4.243,0L44.021,36.95	C45.192,38.121,45.192,40.021,44.021,41.192z"
        ></path>
        <path
          fill="#ffce29"
          d="M19.979,41.192l2.828,2.828c1.172,1.172,3.071,1.172,4.243,0L44.021,27.05	c1.172-1.172,1.172-3.071,0-4.243l-2.828-2.828c-1.172-1.172-3.071-1.172-4.243,0L19.979,36.95	C18.808,38.121,18.808,40.021,19.979,41.192z"
        ></path>
      </svg>
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
            {formType === "create" ? (
              <DatePicker
                label="pick the date"
                value={MUIdateValue}
                onChange={(newValue) => {
                  handleOnChange(newValue);
                  setMUIdateValue(newValue);
                }}
              />
            ) : (
              <DatePicker
                label="Pick the date"
                value={dayjs(userState.dateOfBirth, "DD/MM/YYYY")}
                onChange={(newValue) => {
                  handleOnChange(newValue);
                  setMUIdateValue(newValue);
                }}
              />
            )}
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Box style={{marginTop: "1rem"}}>
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
      </Box>
    </Card>
  );
};

export default Form;
