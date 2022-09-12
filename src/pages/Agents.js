import React, { useEffect, useState } from "react";
import AgentForm from "../components/AgentForm";
import AgentsDetails from "../components/AgentsDetails";
//We need all teachers to be displayed here
//We need to edit teachers details, add, or delete

const Agents = () => {
  const [allAgents, setAllAgents] = useState([]);

  useEffect(() => {
    fetch("https://sporty-sport.herokuapp.com/agents")
      .then((r) => r.json())
      .then((data) => setAllAgents(data));
  }, []);


  function handlePosting(data) {
    setAllAgents([...allAgents, data]);
  }

  function deleteAgent(id) {
    fetch(`https://sporty-sport.herokuapp.com/agents/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = allAgents.filter((agent) => agent.id !== id);
        setAllAgents(goThru);
      });
  }

  function handleUpdateAgent(updatedAgent) {
    const updated_Agent = allAgents.map((agent) => {
      if (agent.id === updatedAgent.id) {
        return updatedAgent;
      } else {
        return agent;
      }
    });
    setAllAgents(updated_Agent);
  }

  return (
    <div>
      <AgentForm
        handlePosting={handlePosting}
        onUpdateAgent={handleUpdateAgent}
      />
      <AgentsDetails
        allAgents={allAgents}
        deleteAgent={deleteAgent}
      />
    </div>
  );
};

export default Agents;
