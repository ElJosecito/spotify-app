import Axios from "axios";
import { useEffect, useState } from "react"
import Router from "./Router";


function App() {

  // const [data, setData] = useState([]);

  // const token = localStorage.getItem('access_token');

  // useEffect(() => {
  //   Axios.get('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',{
  //     headers: { 
  //       'Authorization': `Bearer ${token}}`,
  //     },
  //     })
  //     .then((res) => {
  //       setData(res.data.items);
  //       console.log(res.data)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       // always executed
  //     });
  // }, []);
  
  return (
    <>
      <Router/>
    </>
  )
}

export default App
