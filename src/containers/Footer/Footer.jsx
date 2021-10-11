import React, { useState, useRef, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { useSelector, useDispatch } from "react-redux"
import { FaRandom, FaRegHeart, FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa"
import { BsFillVolumeMuteFill, BsThreeDots, BsVolumeUpFill } from "react-icons/bs"
import { BiWindows } from "react-icons/bi"
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoRepeat } from "react-icons/io5"
import { MdMusicVideo } from "react-icons/md"
import { GiMicrophone } from "react-icons/gi"
import moment from 'moment'
import callApi from 'utils/callApi'
import Loader from 'components/Loader/Loader'
import { actPlaySong } from "containers/module/actions"


export default function Footer() {
    const { activeSong, listSong } = useSelector(state => state.listSongReducer)
    const audioRef = useRef()
    const [audio, setAudio] = useState()
    const [volume, setVolume] = useState(100)
    const [isPlaying, setIsPlaying] = useState(false)
    const [songTime, setSongTime] = useState(0)
    const [randomSong, setRandomSong] = useState(false)
    const [repeatSong, setRepeatSong] = useState(false)
    const [listSongPlayed, setListSongPlayed] = useState([])
    const [pauseRotate, setPauseRotate] = useState(true)
    const [muted, setMuted] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        callApi(`https://mp3.zing.vn/xhr/media/get-source?type=audio&key=${activeSong?.code}`)
            .then(res => {
                let sourceAudio = res.data.data?.source["128"]
                setAudio(sourceAudio)
            })
    }, [activeSong])


    const rotateImg = useSpring({
        pause: pauseRotate,
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 360 },
        config: {
            duration: 4000
        }
    })


    const handlePlayAndPause = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setPauseRotate(true)
        } else {
            audioRef.current.play()
            setPauseRotate(false)
        }
        setIsPlaying(!isPlaying)
    }

    const handleChangeTime = e => {
        setSongTime(e.target.value * activeSong.duration / 100)
        audioRef.current.currentTime = e.target.value * activeSong.duration / 100
    }

    const handleRandomSong = () => {
        if (repeatSong) {
            setRepeatSong(false)
        }
        setRandomSong(!randomSong)
    }

    const handleRepeatSong = () => {
        if (randomSong) {
            setRandomSong(false)
        }
        setRepeatSong(!repeatSong)
    }

    const handleChangeSong = action => {
        let indexSong = listSong.findIndex(song => {
            return song.id === activeSong.id
        })
        if (action === "prev") {
            if (indexSong === 0) {
                dispatch(actPlaySong(listSong[listSong.length - 1]))
            } else {
                dispatch(actPlaySong(listSong[indexSong - 1]))
            }
        } else if (action === "next") {
            if (indexSong === listSong.length - 1) {
                dispatch(actPlaySong(listSong[0]))
            } else {
                dispatch(actPlaySong(listSong[indexSong + 1]))
            }
        }

    }

    const handleEndSong = () => {

        let indexSong = listSong.findIndex(song => {
            return song.id === activeSong.id
        })

        // Put index song => make random difficult song
        if (!listSongPlayed.includes(indexSong)) {
            let newListSongPlayed = [...listSongPlayed]
            newListSongPlayed.push(indexSong)
            setListSongPlayed(newListSongPlayed)
        }

        if (randomSong) {
            let nextSongRandom = 0;
            do {
                nextSongRandom = Math.floor(Math.random() * 100)
            }
            while (listSongPlayed.includes(nextSongRandom))
            dispatch(actPlaySong(listSong[nextSongRandom]))

        } else {
            dispatch(actPlaySong(listSong[indexSong + 1]))
        }
    }

    const handleVolume = e => {
        setVolume(e.target.value)
        if (e.target.value < 10) {
            setMuted(true)
        } else {
            setMuted(false)
            audioRef.current.volume = e.target.value / 100
        }
    }

    const handleMuted = () => {
        setMuted(!muted)
        if (!muted) {
            setVolume(0)
        } else {
            setVolume(audioRef.current.volume * 100)
        }
    }

    // change state of play icon
    const handleOnPlay = () => {
        setIsPlaying("true")
    }

    if (!activeSong) return <Loader />
    return (
        <div className="h-20 absolute bottom-0 w-full footer " style={{ backgroundColor: "#170f23" }}>
            <div className="contentPlay px-1.5 grid grid-cols-4 text-white">
                <div className="iconSong">
                    <div className="flex py-2">
                        <div className="label">
                            <animated.img className="w-16 h-16 mx-3 rounded-full" src={activeSong?.thumbnail} alt="" style={rotateImg} />
                        </div>
                        <div className="flex flex-col justify-center ">
                            <p className="text-base font-semibold ">{activeSong?.title}</p>
                            <p className="text-gray-400">{activeSong?.performer}</p>
                        </div>
                        <div className="flex gap-10 ml-10 items-center " style={{ alignItems: "center" }}>
                            <FaRegHeart className="icon" />
                            <BsThreeDots className="icon" />

                        </div>
                    </div>
                </div>
                <div className=" col-span-2 playBar flex flex-col justify-center ">
                    <div className=" playBar__control flex gap-10 text-2xl justify-center items-center ">
                        <FaRandom
                            className={`${randomSong && "active"} icon`}
                            onClick={() => handleRandomSong()} />
                        <IoPlaySkipBackSharp className="icon" onClick={() => handleChangeSong("prev")} />
                        <button className="text-4xl icon" onClick={() => handlePlayAndPause()}>
                            {!isPlaying ? <FaRegPlayCircle /> : <FaRegPauseCircle />}
                        </button>

                        <IoPlaySkipForwardSharp className="icon" onClick={() => handleChangeSong("next")} />
                        <IoRepeat className={`${repeatSong && "active"} icon`}
                            onClick={() => handleRepeatSong()} />
                    </div>
                    <div className="playBar__timeline flex items-center justify-center gap-1" >
                        <p>{moment.utc(songTime * 1000).format("mm:ss")} </p>
                        <input type="range" min="0%" max="100" step="1"
                            value={songTime / activeSong.duration * 100}
                            className="w-10/12 h-1 bg-gray-500 "
                            onChange={(e) => handleChangeTime(e)}
                        ></input>
                        <p>{moment.utc(activeSong?.duration * 1000).format("mm:ss")}</p>
                    </div>
                </div>
                <div className="adjustVolume flex gap-5 text-2xl items-center justify-end mr-5">
                    <MdMusicVideo className="adjustVolume--item" />
                    <GiMicrophone className="adjustVolume--item" />
                    <BiWindows className="adjustVolume--item" />
                    <div className=" volume flex items-center justify-center gap-2">
                        {muted ? <BsFillVolumeMuteFill className="adjustVolume--item" onClick={() => handleMuted()} /> : < BsVolumeUpFill className="adjustVolume--item" onClick={() => handleMuted()} />}

                        <input type="range" min="0" max="100" step="1"
                            value={volume}
                            className="w-14 bg-white h-1"
                            onChange={e => handleVolume(e)}
                        ></input>
                    </div>
                </div>
                <audio ref={audioRef}
                    src={audio}
                    autoPlay
                    loop={repeatSong}
                    onTimeUpdate={() => setSongTime(audioRef.current.currentTime)}
                    onEnded={() => handleEndSong()}
                    onPlay={() => handleOnPlay()}
                    muted={muted}
                ></audio>
            </div>
        </div>
    )
}
