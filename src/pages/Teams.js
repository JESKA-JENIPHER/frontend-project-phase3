import React, { useEffect, useState } from "react";
import TeamsList from "../components/TeamsList";

const Teams = () => {
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((r) => r.json())
      .then((data) => setAllTeams(data));
  }, []);

  // console.log(allTeams)


  function deleteTeam(id) {
    fetch(`http://localhost:9292/teams/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = allTeams.filter((team) => team.id !== id);
        setAllTeams(goThru);
      });
  }

  return (
    <div>
      <TeamsList
        allTeams={allTeams}
        deleteTeam={deleteTeam}
      />
    </div>
  );
};

export default Teams;