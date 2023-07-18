import React, { useEffect, useState } from "react";
// redux
import { FetchCurrentUser } from "../redux/slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function Options() {
  const { list: User } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <header className="flex justify-between items-center bg-slate-500 fixed w-full h-16">
        <div className="flex items-end">
          <img
            src={
              User.images && User.images.length > 0 ? User.images[0].url : ""
            }
            alt={User.display_name}
            className="rounded-full"
          />
          <h2>{User.display_name}</h2>
        </div>

        <div>
          <a href={User.external_urls && User.external_urls.spotify}>
            <button>Spotify Profile</button>
          </a>
        </div>
      </header>
      <section className="flex justify-center">
        <div className="h-screen w-full max-w-screen-2xl pt-20 px-5 flex bg-[#191414]">
          <a href="/recommendations">
            <div className="m-3 w-56 h-56 bg-[#1DB954] text-2xl font-bold font-sans text-slate-100 flex justify-center items-center rounded-md">
              Recomendations
            </div>
          </a>

          <a href="/tracklist">
            <div className="m-3 w-56 h-56 bg-[#1DB954] text-2xl font-bold font-sans text-slate-100 flex justify-center items-center rounded-md">
              Tracklist
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Options;
