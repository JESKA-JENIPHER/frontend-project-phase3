import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

function Agents() {
  const [allAgents, setAgents] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/agents")
      .then((r) => r.json())
      .then((data) => setAgents(data));
  }, []);

  // console.log(allPlayers);

  function deleteAgent(id) {
    fetch(`http://localhost:9292/agents/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = allAgents.filter((agent) => agent.id !== id);
        setAgents(goThru);
      });
  }

  return (
    <div>
      <h1>Agents</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Years_of_experience</th>
            <th scope="col">Status</th>
            <Link
              class="btn btn-primary mr-2"
              to="/Add"
              style={{
                background: "Black",
                border: "none",
                width: "90px",
                height: "40px",
              }}
            >
              Add
            </Link>
            {/* <button style={{background:"black", width:"100px"}} class="btn btn-primary mr-2 btn-dark">Add</button> */}
          </tr>
        </thead>
        <tbody>
          <th scope="row">1</th>
          {data.map((agent, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{agent.name}</td>
              <td>{agent.years_of_experience}</td>
              <td>{agent.status}</td>
              <Link
                class="btn btn-primary mr-2"
                to="/Edit/:id"
                style={{
                  background: "gray",
                  border: "none",
                  width: "90px",
                  height: "40px",
                }}
              >
                Edit
              </Link>

              {/* <Link class="btn btn-primary mr-2" to="/Edit" style={{background:"red", border:"none", width:"90px", height:"40px"}}>
                    Delete
                  </Link> */}

              <button
                style={{
                  border: "none",
                  background: "Red",
                  width: "90px",
                  marginBottom: "1.2rem",
                  marginLeft: "10px",
                }}
                type="button"
                class="btn btn-dark"
                onClick={() => {
                  deleteAgent(agent.id);
                }}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Agents;
