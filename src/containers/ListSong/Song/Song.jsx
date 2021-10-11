import { actPlaySong } from 'containers/module/actions'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Song({ song, idx }) {
    const dispatch = useDispatch()
    let active = ""
    const {activeSong} = useSelector(state => state.listSongReducer)

    useEffect(() => {
        if (!activeSong?.id && !idx) {
            dispatch(actPlaySong(song));
        }
    }, [])

    if (activeSong?.id === song.id) {
        active = "active"
    }
    
    return (
        <>
            <div className={`song flex rounded-lg py-2 my-1 ${active}`} key={song.id} onClick={() => dispatch(actPlaySong(song))}>
                <div className="label">
                    <img className="w-12 h-12 mx-3" src={song.thumbnail} alt="" />
                </div>
                <div>
                    <h4 className="text-base">{song.title}</h4>
                    <p className="text-gray-400 ">{song.performer}</p>
                </div>
            </div>
        </>
    )

}
