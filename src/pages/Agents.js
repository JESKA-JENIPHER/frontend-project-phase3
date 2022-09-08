import React from 'react'
import useRequest from "./FetchHelper";

function Agents() {

  const { data: players, error, loading} = useRequest("http://localhost:9292/players");
  return (
    <div>Agents</div>
  )
}

export default Agents