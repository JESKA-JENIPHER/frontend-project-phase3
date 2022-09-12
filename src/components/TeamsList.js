import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

function TeamList({ allTeams, deleteTeam }) {
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Team_id</StyledTableCell>
            <StyledTableCell>Team_Name</StyledTableCell>
            <StyledTableCell >Year_founded</StyledTableCell>
            <StyledTableCell>Agent_id</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTeams.map((team) => (
            <StyledTableRow
              key={team.id}
              onClick={() => navigate(`//${team.id}`)}
              style={{ cursor: "pointer" }}
            >
              <StyledTableCell align="left">{team.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {team.name}
              </StyledTableCell>
              <StyledTableCell>
                {team.year_founded}
              </StyledTableCell>
              <StyledTableCell>
                {team.status}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeamList;
