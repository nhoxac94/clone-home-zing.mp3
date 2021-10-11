import React from 'react'
import { FaPlay, FaRegHeart } from 'react-icons/fa'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import "./CardImg.scss"



export default function CardImg(props) {
    const { img, title, author } = props.song
    return (
        <div className="cardImg relative">
            <div className=" cardImg__img rounded-md">
                <img className=" w-full" src={img} alt="" />
            </div>
            <div className="cardImg__icon text-3xl" >
                <FaRegHeart className=" cardImg__heart " />
                <FaPlay className=" cardImg__play " />
                <BiDotsHorizontalRounded className=" cardImg__dot " />
            </div>
            <h4 className="font-medium my-2">{title}</h4>
            <p className="font-light text-gray-400">{author}</p>
        </div>
    )
}
