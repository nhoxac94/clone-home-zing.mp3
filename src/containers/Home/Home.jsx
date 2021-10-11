import Content from 'containers/Content/Content'
import Footer from 'containers/Footer/Footer'
import Header from 'containers/Header/Header'
import ListSong from 'containers/ListSong/ListSong'
import Navigation from 'containers/Navigation/Navigation'
import React from 'react'
import "./Home.scss"



export default function Home() {


    return (
        <div className="max-w-full min-h-screen max-h-screen bg-scroll bg-left-top bg-cover"
            style={{ backgroundImage: "url('https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/zma.svg')" }}

        >
            <div className="mp3Body flex">
                <Navigation />
                <Header/>
                <Content />
                <ListSong />
            </div>
            <Footer />
        </div>
    )
}
