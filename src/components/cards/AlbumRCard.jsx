import React, { useState } from 'react'
//
import { HandleTrack, HandleAddAlbum } from "../../redux/slices/HandleAdd";
import { useDispatch, useSelector } from "react-redux";

function AlbumRCard({id, name, img, date, type}) {

  const [idcard, SetIdCard] = useState()

  const HandleAdd = useSelector((state) => state.HandleAdd.list);
  const dispatch = useDispatch();

    const HandleTrackFunc = () => {
      dispatch(HandleTrack(id))
    }

    const HandleAlbumFunc = () => {
      dispatch(HandleAddAlbum(id))
    }

    const ManageType = () =>{
      if (type == 'SINGLE'){
        HandleTrackFunc()
      }else{
        HandleAddAlbum()
      }
    }

  return (
    <>
    <div>
        <img src={img} alt="" className='w-52' />
        <div>{name}</div>
        <p>{type}</p>
        <h2>{date}</h2>
        <button className='m-2' onClick={ManageType}>add</button>
        <button>remove</button>
    </div>
    
    </>
  )
}

export default AlbumRCard