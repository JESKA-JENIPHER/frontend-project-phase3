import { TablePagination, Box, Button } from '@mui/material';
import React from 'react'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useNavigate } from 'react-router-dom';

const PlayerDetails = ({totalPlayers, deletePlayer}) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const navigate = useNavigate();
      
    const handleChangePage = (e, newPage ) => {
        setPage(newPage);
    };
      
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));

    const darkTheme = createTheme({
        palette: {
          mode: 'light',
        },
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>Player Id</StyledTableCell>
            <StyledTableCell>Player Name</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Race</StyledTableCell>
            <StyledTableCell align="center">Nationality</StyledTableCell>
            <StyledTableCell align="center">Team_Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {totalPlayers
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((player) => (
            <TableRow 
            key={player.id}
            >
              <StyledTableCell align="left">{player.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row" align="left">
                {player.name}
              </StyledTableCell>
              <StyledTableCell align="center">{player.age}</StyledTableCell>
              <StyledTableCell align="center">{player.race}</StyledTableCell>
              <StyledTableCell align="center">{player.nationality}</StyledTableCell>
              <StyledTableCell align="center">{player.team_id}</StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="secondary"
                onClick={() => {
                  deletePlayer(player.id);
                }}
                >
                  Delete
                </Button>
              </Box>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalPlayers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </ThemeProvider>
  )
}

export default PlayerDetails

