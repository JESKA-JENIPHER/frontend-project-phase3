import { useEffect, useState } from "react";

const useRequest = (url) => {
  //states
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);

      if (!res.ok) {
        setError(res.status + "resource not found");
      }
      // console.log(res)
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);

  return {data, error, loading}
}
export default useRequest

































// import React from "react";

// function FetchHelper({ endpoint, method, data }) {
//   fetch(endpoint, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((r) => r.json())
//     .then((data) => console.log({id:"" , name:"", }));

//   return <div>FetchHelper</div>;
// }

// export default FetchHelper;