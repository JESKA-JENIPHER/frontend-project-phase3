import React, { useEffect, useState } from "react";
import TeamsList from "../components/TeamsList";

const Teams = () => {
  const [allTeams, setAllTeams] = useState([]);

  useEffect(() => {
    fetch("https://sporty-sport.herokuapp.com/teams")
      .then((r) => r.json())
      .then((data) => setAllTeams(data));
  }, []);

  // console.log(allTeams)


  return (
    <div>
      <TeamsList
        allTeams={allTeams}
      />
    </div>
  );
};

export default Teams;