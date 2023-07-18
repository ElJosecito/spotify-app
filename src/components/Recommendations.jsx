import React, { useEffect, useState } from "react";
import AlbumRCard from "./cards/AlbumRCard";
// redux
import { FetchRecommendations } from "../redux/slices/RecommendationSlices";
import { useDispatch, useSelector } from "react-redux";

function Recommendations() {
  const Recommendations = useSelector((state) => state.Recommendation.list);
  const dispatch = useDispatch();
  const [filter, SetFilter] = useState();

  useEffect(() => {
    dispatch(FetchRecommendations(filter));
  }, [dispatch, filter]); 


  const HandleInput = (e) => {
    const value = e.target.value
    SetFilter(value.toLowerCase());
    //console.log(value.toLowerCase());
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <form action="submit" onSubmit={HandleSubmit}>
          <input type="text" onChange={HandleInput} />
        </form>

        <div className="bg-slate-500 w-full h-screen">
          {Recommendations && Recommendations.length > 0 ? (
            Recommendations.map((e) => {
              return (
                <AlbumRCard key={e.id} id={e.id} name={e.album.name} img={e.album.images[0].url} date={e.album.release_date} type={e.album.album_type}/>
              );
            })
          ) : (
            <div>No hay recomendaciones disponibles.</div>
          )}
        </div>
      </section>
    </>
  );
}

export default Recommendations;
