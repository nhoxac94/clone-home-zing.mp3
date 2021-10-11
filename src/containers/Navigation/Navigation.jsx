import React, { useState } from 'react'
import { BiWinkSmile } from "react-icons/bi"
import { SiDiscogs, SiTrendmicro } from "react-icons/si"
import { IoMdRadio, IoMdStarOutline } from "react-icons/io"
import { RiPlayMiniFill, RiUserFollowFill } from "react-icons/ri"
import { GiHeartWings } from "react-icons/gi"




export default function Navigation() {
    const [activeNav, setActiveNav] = useState("discovery")
    const handleNav = navName => {
        setActiveNav(navName)
    }
    return (
        <div className="navigate__wrap min-h-screen" style={{ backgroundColor: "#ffffff0d" }}>
            <div className="navigate__content text-white text-sm font-semibold" >
                <div className="logo pb-4 pt-4">
                    <img className=" navBrandName w-32 inline-block" src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="logo" />
                    <img className = "navBrand" src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.4.0/static/media/icon_zing_mp3_60.f6b51045.svg" alt="" />
                </div>
                <div className="handleBar">
                    <div className="sideBar__menu mb-4" >
                        <div className={`sideBar__item  ${activeNav === "personal" && "active"} `} onClick={() => handleNav("personal")}>
                            <div className="sideBar__item--wrap">
                                <BiWinkSmile className="inline-block  mr-2  text-2xl" />
                                <span>Cá Nhân</span>
                            </div>
                        </div>
                        <div className={`sideBar__item ${activeNav === "discovery" && "active"} `} onClick={() => handleNav("discovery")}>
                            <div className="sideBar__item--wrap" >
                                <SiDiscogs className="inline-block mr-2 text-2xl" />
                                <span>Khám Phá</span>
                            </div>
                        </div>
                        <div className={`sideBar__item ${activeNav === "chart" && "active"} `} onClick={() => handleNav("chart")}>
                            <div className="sideBar__item--wrap">
                                <SiTrendmicro className="inline-block mr-2 text-2xl" />
                                <span>#Zingchart</span>
                            </div>
                        </div>
                        <div className={`sideBar__item ${activeNav === "radio" && "active"} `} onClick={() => handleNav("radio")}>
                            <div className="sideBar__item--wrap">
                                <IoMdRadio className="inline-block mr-2 text-2xl" />
                                <span>Radio</span>
                                <p className="bg-red-500 ml-2 rounded-md px-2 inline-block ">Live</p>
                            </div>
                        </div>
                        <div className={`sideBar__item ${activeNav === "subscribe" && "active"} `} onClick={() => handleNav("subscribe")}>
                            <div className="sideBar__item--wrap">
                                <RiUserFollowFill className="inline-block mr-2 text-2xl" />
                                <span>Theo Dõi</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="sideBar__music mt-4">
                        <div className={`sideBar__item ${activeNav === "newSong" && "active"} `} onClick={() => handleNav("newSong")}>
                            <div className="sideBar__item--wrap">
                                <BiWinkSmile className="inline-block  mr-2  text-2xl" />
                                <span>Nhạc Mới</span>
                            </div>
                        </div>
                        <div className={`sideBar__item ${activeNav === "category" && "active"} `} onClick={() => handleNav("category")}>
                            <div className="sideBar__item--wrap">
                                <GiHeartWings className="inline-block mr-2 text-2xl" />
                                <span>Thể Loại</span>
                            </div>
                        </div>
                        <div className={`sideBar__item ${activeNav === "topSong" && "active"} `} onClick={() => handleNav("topSong")}>
                            <div className="sideBar__item--wrap">
                                <IoMdStarOutline className="inline-block mr-2 text-2xl" />
                                <span>Top 100</span>
                            </div>
                        </div>
                        <div className={`sideBar__item mb-4 ${activeNav === "MV" && "active"} `} onClick={() => handleNav("MV")}>
                            <div className="sideBar__item--wrap">
                                <RiPlayMiniFill className="inline-block mr-2 text-2xl" />
                                <span>MV</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sideBar__banner rounded-md bg-gradient-to-r from-blue-600  to-pink-500 mt-3 text-center text-sm py-4">
                    <p >Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                    <p className="bg-yellow-300 rounded-xl py-1 mx-7 mt-3 cursor-pointer opacity-90 hover:opacity-100">MUA VIP</p>
                </div>

                <div className="library__music  pt-5">
                    <h3 className="font-bold">THƯ VIỆN</h3>
                    <ul className="list-none text-sm pb-6">
                        <li className="my-4">
                            <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg" alt="" className="inline-block mr-2" />
                            <span>Bài hát</span>
                        </li>
                        <li className="my-4">
                            <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg" alt="" className="inline-block mr-2" />
                            <span>Playlist</span>

                        </li>
                        <li className="my-4">
                            <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg" alt="" className="inline-block mr-2" />
                            <span>Gần đây</span>

                        </li>

                    </ul>
                </div>

            </div>
            <div className="createPlayList z-10 text-white" style={{ backgroundColor: "#411465" }} >
                <hr />
                <div className="text-base pl-5 pt-2 cursor-pointer">
                    <span className="text-base"> + </span>
                    Tạo playlist mới
                </div>
            </div>


        </div >
    )
}
