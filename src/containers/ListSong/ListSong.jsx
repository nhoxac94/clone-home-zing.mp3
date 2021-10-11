import React, { useEffect, useState } from 'react'
import { GiAlarmClock } from "react-icons/gi"
import { BsThreeDots } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'components/Loader/Loader'
import Song from './Song/Song'
import { actGetListSong } from 'containers/module/actions'

export default function ListSong() {
    const dispatch = useDispatch()
    const { loading, listSong } = useSelector(state => state.listSongReducer)

    useEffect(() => {
        dispatch(actGetListSong())
    }, [])

    const [songs, setSongs] = useState()
    useEffect(() => {
        setSongs(listSong)
    }, [listSong])
    const renderListSong = (songs) => {
        return songs?.map((song, idx) => {
            return <Song key={song.id} song={song} idx = {idx}/>
        })
    }

    const [listPlay, setListPlay] = useState("listPlay")
    const handlePlayList = list => {
        setListPlay(list)
    }
   
    if (loading) return <Loader />
    return (
        <div className=" listSong__wrap min-h-screen max-h-screen text-white text-sm "  >
            <div className="list__monitor my-6 mx-2">
                <span className="listPlay rounded-3xl py-2 px-1 mr-2 " style={{ backgroundColor: "#ffffff1a" }}>
                    <span className={ `list__monitor--item mr-1 rounded-2xl py-1.5 px-1.5 ${listPlay === "listPlay" && "active"}`} onClick = {() => {handlePlayList("listPlay")}} >Danh sách phát</span>
                    <span className={` list__monitor--item rounded-2xl py-1.5 px-1 ${listPlay === "listPlayRecent" && "active"}`} onClick = {() => {handlePlayList("listPlayRecent")}} >Nghe gần đây</span>
                </span>
                <GiAlarmClock className=" list__monitor--item inline-block rounded-2xl bg-pink-500 text-3xl p-1 mr-1 " />
                <BsThreeDots className=" list__monitor--item inline-block rounded-2xl text-3xl px-1 py-1 " style={{ backgroundColor: "#ffffff1a" }} />
            </div>
            <div className="listSong mx-2">
                {renderListSong(songs)}
            </div>
        </div>
    )
}
