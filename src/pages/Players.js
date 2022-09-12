import React, { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("https://sporty-sport.herokuapp.com/players")
      .then((r) => r.json())
      .then((data) => setAllPlayers(data));
  }, []);

  // console.log(allPlayers);

  //delete
  // function deletePlayer(id) {
  //   fetch(`https://sporty-sport.herokuapp.com/players/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       const goThru = allPlayers.filter((player) => player.id !== id);
  //       setAllPlayers(goThru);
  //     });
  // }
  // deletePlayer = { deletePlayer };

  return (
    <>
      <PlayerList totalPlayers={allPlayers}  />
    </>
  );
};

export default Players;
