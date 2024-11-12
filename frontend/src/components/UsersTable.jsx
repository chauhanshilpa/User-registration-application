import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UsersTable = ({
  users,
  setEditingUser,
  deleteUser,
  setIsEditUserIconClicked,
  setIsCreateNewUserIconClicked,
}) => {

  return (
    <TableContainer className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell className="cell-name">Name</TableCell>
            <TableCell className="cell-name" align="right">
              E-mail
            </TableCell>
            <TableCell className="cell-name" align="right">
              Date-of-birth
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="cell">
                {user.name}
              </TableCell>
              <TableCell align="right" className="cell">
                {user.email}
              </TableCell>
              <TableCell align="right" className="cell">
                {user.dateOfBirth}
              </TableCell>
              <TableCell align="right" className="cell">
                <FaEdit
                  onClick={(event) => {
                    event.stopPropagation();
                    setEditingUser(user);
                    setIsEditUserIconClicked(true);
                    setIsCreateNewUserIconClicked(false);
                  }}
                  className="icon edit-icon"
                />
                <MdDelete
                  onClick={(event) => deleteUser(event, user.id)}
                  className="icon delete-icon"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
