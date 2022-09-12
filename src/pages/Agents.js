import React, { useEffect, useState } from "react";
import TeacherForm from "../Components/TeacherForm";
import TeachersDetails from "../Components/TeachersDetails";
//We need all teachers to be displayed here
//We need to edit teachers details, add, or delete

const Agents = () => {
  const [allAgents, setAllAgents] = useState([]);

  useEffect(() => {
    fetch("https://sporty-sport.herokuapp.com/agents")
      .then((r) => r.json())
      .then((data) => setAllAgents(data));
  }, []);

  // console.log(allTeachers)

  function handlePosting(data) {
    setAllTeachers([...allAgents, data]);
  }

  function deleteTeacher(id) {
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
    const updatedAgent = allAgents.map((agent) => {
      if (agent.id === updatedAgent.id) {
        return updatedAgent;
      } else {
        return agent;
      }
    });
    setAllAgents(updatedAgent);
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
