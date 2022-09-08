import React from "react";


function HomePage() {
  // state was here
  
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
