import React, { useEffect, useState } from "react";
import TrackCard from "../cards/TrackCard";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getTrackList } from "../../redux/slices/GetTrackList";

function TrackList() {
  const trackList = useSelector((state) => state.TrackList.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrackList());
  }, [dispatch]);


  return (
    <section className="w-full flex justify-center">
      <div className="h-screen max-w-6xl w-full bg-black">
        {trackList.items && trackList.items.length > 0 ? (
          trackList.items.map((e) => {
            return (
              <TrackCard key={e.track.id} id={e.track.id} name={e.track.name} img={e.track.album.images} album={e.track.album.name} type={e.track.album.album_type} duration={e.track.duration_ms}/>
            )
          })
        ) : (
          <div className="text-white">No hay recomendaciones disponibles.</div>
        )}
      </div>
    </section>
  );
}

export default TrackList;
