import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch, AiOutlineSetting, AiOutlineSkin } from "react-icons/ai"
import { BsUpload } from "react-icons/bs"


export default function Header() {
    return (
        <div className="header__wrap">
            <div className=" flex mx-7 text-2xl justify-between pt-3 text-white w-full">
                <div className="flex mt-3">
                    <AiOutlineArrowLeft className = "mr-4 mt-2"/> 
                    <AiOutlineArrowRight className = "mr-4 mt-2"/>
                    <div className="search opacity-90 rounded-3xl leading-10" style = {{backgroundColor : "#ffffff1a"}}>
                        <AiOutlineSearch className = "inline leading-10 ml-2"/>
                        <input className = " searchBar inline text-sm text-white bg-transparent pl-3 pr-40 leading-10 placeholder-white focus:outline-none" type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV ..."  />
                    </div>
                </div>
                <div className = " header__icon flex mt-2">
                    <AiOutlineSkin className = " header__icon--item rounded-3xl w-12 h-12 p-3.5 mr-5" style = {{backgroundColor : "#ffffff1a"}}/>
                    <BsUpload className = " header__icon--item rounded-3xl w-12 h-12 p-3.5 mr-5" style = {{backgroundColor : "#ffffff1a"}}/>
                    <AiOutlineSetting className = " header__icon--item rounded-3xl w-12 h-12 p-3.5 mr-5" style = {{backgroundColor : "#ffffff1a"}}/>
                    <img className = " header__icon--item rounded-3xl w-12 h-12" src="https://c4.wallpaperflare.com/wallpaper/310/451/800/dogs-shiba-inu-wallpaper-thumb.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}




