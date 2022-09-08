import React, { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";

const Players = () => {
  const [allPlayers, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((r) => r.json())
      .then((data) => setAllPlayers(data));
  }, []);

  // console.log(allPlayers);

  function deletePlayer(id) {
    fetch(`http://localhost:9292/players/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const goThru = allPlayers.filter((player) => player.id !== id);
        setAllPlayers(goThru);
      });
  }

  return (
    <>
      <PlayerList totalPlayers={allPlayers} deletePlayer={deletePlayer} />
    </>
  );
};

export default Players;
