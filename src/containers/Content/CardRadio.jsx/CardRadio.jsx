import React from 'react'
import { FaPlay, FaRegHeart } from 'react-icons/fa'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import "./CardRadio.scss"



export default function CardRadio(props) {
    const { img, title, author } = props.song
    return (
        <div className="cardRadio relative text-center" >
            <div className=" cardRadio__img rounded-md">
                <img className=" w-full" src={img} alt="" />
            </div>
            <div className="cardRadio__icon text-3xl" >
                <FaRegHeart className=" cardRadio__heart " />
                <FaPlay className=" cardRadio__play " />
                <BiDotsHorizontalRounded className=" cardRadio__dot " />
            </div>
            <h4 className="font-medium my-2">{title}</h4>
            <p className="font-light text-gray-400">{author}</p>
        </div>
    )
}
