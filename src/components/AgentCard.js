import React from 'react'

function AgentCard() {
  return (
    <div>
      <p>agent</p>
      {agents.map((agent) => (
        <Cards
          id={id}
          name={name}
        />
      ))}
    </div>
  );
}

export default AgentCard
