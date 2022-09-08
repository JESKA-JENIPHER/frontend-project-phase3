import React from "react";
import useRequest from "./FetchHelper";

function HomePage() {
  // state was here
  const { data: players, error, loading } = useRequest('http://localhost:9292/players')
  // useEffect was here
  return (
    <div>
      
      {error}
      {
        loading ? <h1>Loading...</h1> :
          
          players && players.map((player) => (
        <ul key={player.id}>
          <li>{player.name}</li>
          <li>{player.age}</li>
          <li>{player.race}</li>
        </ul>
      ))}
      
      
  
    </div>
  );
}

export default HomePage;
