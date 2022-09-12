import { useEffect, useState, React } from "react";
import {Table,TableCell,TableRow,TableHead,TableBody,Button,ThemeProvider} from "@mui/material";
// import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

const AgentsDetails = () => {
  const [agents, setAgents] = useState([]);

  const url = "https://sporty-sport.herokuapp.com/agents";

  //CRUD-GET
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAgents(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //DELETE

  function deleteAgent(id) {
    fetch(`https://sporty-sport.herokuapp.com/agents/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = agents.filter((agent) => agent.id !== id);
        setAgents(goThru);
      });
  }

  //POST

  //Styling..
  const tableStyle = {
    width: "80%",
    margin: "20px 10%",
  };

  //  const darkTheme = createTheme({
  //    palette: {
  //      mode: "light",
  //    },
  //  });
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <Table style={tableStyle}>
        <TableHead>
          <TableRow style={{ fontSize: "18px" }}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>ID_Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agents.map((agent) => (
            <TableRow key={agent.id}>
              <TableCell>{agent.id}</TableCell>
              <TableCell>{agent.name}</TableCell>
              <TableCell>{agent.id_number}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "0px 20px" }}
                  onClick={() => {
                    deleteAgent(agent.id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </ThemeProvider> */}
    </>
  );
};

export default AgentsDetails;
