import React from 'react'
//redux
import { HandleRAlbum, HandleRTrack } from '../../redux/slices/HandleRemove'
import { useDispatch, useSelector } from "react-redux";

function TrackCard({id, name, img, album, type, duration}) {

  const HandleRemove = useSelector((state) => state.HandleRemove.list);
  const dispatch = useDispatch();

  const HandleTrackFunc = () => {
    dispatch(HandleRTrack(id))
  }


  return (
    <>
    <div>
      <img src={img && img[0].url} alt="" className='w-20'/>
        <div className='text-white'>{name}</div>
        <div className='text-white'>{album+ " " + duration}</div>
        <button onClick={HandleTrackFunc} className='text-white'>remove</button>
    </div>
    </>
  )
}

export default TrackCard