import Axios from "axios";
import { useEffect, useState } from "react";


export const useAxiosGet = (url) => {
  const [data, setData] = useState([]);

  const token = 'BQBwZ6fkMOCup9uCD_7fKPMC_MFOGAUa6Advu6CYjiSIZBSFFm-RkcDU1Sqf8UHJNy9JHKvbC4nSTTlesCHOLSWNDtbHET6UXJk_H8OB0OlbaPOUnrHI2I-1XB01oT9jl0w0kjU4dHLs-7JFEhbEMwhjAWwWi6f2SNnkuBhJSTNn_WYxkNLeYig-qmKKALyj5Aarjg64n22BgRrv_EUvJKLntA_m5uKnOB64Wzoi1-PcUutSKQqxvXFYTVE5woC_fto0gPU';

  useEffect(() => {
    Axios.get(url,{
      headers: {
        // 'Access-Control-Allow-Origin': true,
        'Authorization': `Bearer ${token}}`,
      },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  
  return { data };
};
