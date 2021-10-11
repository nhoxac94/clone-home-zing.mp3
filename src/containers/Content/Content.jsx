import Header from 'containers/Header/Header'
import React, { useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import CardImg from './CardImg/CardImg'
import CardRadio from './CardRadio.jsx/CardRadio'


const slider = [{
    img: 'https://photo-zmp3.zadn.vn/banner/9/e/d/4/9ed43e634c21551d8c8c75cddf1c6798.jpg'
},
{
    img: 'https://photo-zmp3.zadn.vn/banner/7/8/f/1/78f1c907a57c026c8a63b6b2fe0f44ee.jpg'
},
{
    img: 'https://photo-zmp3.zadn.vn/banner/5/3/b/8/53b8685e09529f29a7c0ceab805509cb.jpg'
},
{
    img: 'https://photo-zmp3.zadn.vn/banner/f/f/5/f/ff5fc0db07c09e128a31b117a362bd51.jpg'
},
{
    img: 'https://photo-zmp3.zadn.vn/banner/a/d/d/9/add9c5f70640ac1199fcb5e79888ed3c.jpg'
},
{
    img: 'https://photo-zmp3.zadn.vn/banner/f/6/8/b/f68b037dd7e0eae67e2333a17408035b.jpg'
}]

const songView = {
    songRecent: [
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/6/0/4/0604b2039e6be2b7c8d4f3243b24594d.jpg',
            title: 'Những Bài Hát Hay Nhất Của Sơn Tùng M-TP',
            author: 'Sơn Tùng M-TP',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/c/4/c4c7326dac326089c6460892a992dca9_1286532097.jpg',
            title: 'Tình Khúc Thanh Tùng - Một Mình',
            author: 'Thanh Tùng',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/5/e/cb5e002141cbbda051bbbd01ab9803e2.jpg',
            title: 'Top 100 Nhạc V-Pop Hay Nhất',
            author: '',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/d/8/9/5d890d445e5ecff4d118a296440f1654.jpg',
            title: 'Top 100 Pop Âu Mỹ Hay Nhất',
            author: '',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/9/a/8/69a800bb3195f38724ad6b0f212e112a.jpg',
            title: 'US-UK Hôm Nay Nghe Gì?',
            author: 'Shawn Mendes,Justin Bieber,Troye Sivan',
        },],
    discoverySong: [
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/2/5/e/625eb87fe88f342859dd1197e60238ff.jpg',
            title: 'Trào Lưu Nhạc Hot',
            author: 'Nal,The Kid LAROI,Pháo',
        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg',
            title: 'Pop Ballad Việt Nổi Bật',
            author: 'ERIK,Hiền Hồ,Hương Ly',
        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/f/c/2/8fc20fdf75f3d819b5ed9c3c370a2be0.jpg',
            title: 'The Biggest Drop',
            author: '',
        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/2/6/5/1265e63c52f33a8075b143e2cd3e52ca.jpg',
            title: 'Song Ca Hay Nhất',
            author: 'Tăng Phúc,Hương Ly,Trịnh Thăng Bình,...',
        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            title: 'Nhạc Việt Hôm Nay Nghe Gì?',
            author: 'Quân A.P,Orange,Lê Bảo Bình',
        },
    ],
    hotSong: [
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/b/1/9/bb19d3533ae913605e676538c19364cb.jpg',
            title: 'Nhạc Việt Hôm Nay Nghe Gì?',
            author: 'Quân A.P,Orange,Lê Bảo Bình,...',
        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/0/4/b/604b8492359973ffa7ff6d2059e20e7e.jpg',
            title: 'Chạm: Đâu Ai Bình Thường Khi Yêu',
            author: 'HURRYKNG,dính,Phương Ly,...',

        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/3/8/9/0389d21f1cd10834593a3b8ac133f41d.jpg',
            title: 'Pop Chill',
            author: 'Olivia Rodrigo,Tate McRae,Khalid,...',

        },
        {
            img: '		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/d/8/b/ed8b6074b8bacbb40b3af6821e01b0ee.jpg',
            title: 'K-Pop Ballad',
            author: 'Mamamoo,AKMU,Davichi,...',

        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/2/d/0/72d067aa555641c89ac84ff9e3397c42.jpg',
            title: 'Rap Việt Ngày Nay',
            author: 'Tuimi,16 Typh,Đạt G,...',

        },
    ],
    xoneSong: [
        {
            img: '			https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/5/0/68500d96c5bde3f947bd1f60a641a71e.jpg',
            title: 'XONE Today\'s Hits',
            author: 'XONE RADIO',
        },
        {
            img: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/a/2/f/6a2fd608cf9d65735752ea3306c77b0e.jpg',
            title: 'XONE\'s Radar',
            author: 'XONE RADIO',

        },
        {
            img: '		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/f/8/e/3f8e25409ad8f440ef2f2c97db0ea96d.jpg',
            title: 'A\'s Flavour',
            author: 'XONE RADIO',

        },
        {
            img: '		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/1/6/9/01693aa27f33675b0d1b33b77e77f243.jpg',
            title: 'Pop Breaker',
            author: 'XONE RADIO',

        },
        {
            img: '		https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/e/1/4/ce14bd1c509de4019788035dd40c9b45.jpg',
            title: 'Asia Tune',
            author: 'XONE RADIO',

        },
    ],
    radioSong: [
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/7/6/2/a762aff660863c7a5ce6eae2055a2598.jpg',
            icon: '	https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg',
            title: 'Xone Radio',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/d/1/b/7d1b794cbab13d63bf7ac957065774e3.jpg',
            icon: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg',
            title: 'On Air',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/8/5/b/c85b1ed67eeff74065acade8929ad4e1.jpg',
            icon: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg',
            title: 'Chạm',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg',
            icon: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg',
            title: 'V-POP',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg',
            icon: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg',
            title: 'Bolero',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg',
            icon: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg',
            title: 'US-UK',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg',
            icon: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg',
            title: 'K-POP',
            listen: (Math.floor(Math.random() * 1000) + 100)
        },
    ],

    mixSong: [
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/s2/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDzimDv0KmGJtpxVsmnV017VFucCMWLQ6uu_XzG90brDZcA3rLrO3HdLBup70bHBIzvapeunJqn7wMA5qtjO0GkkSvcAV0L52wvhdCSjLaDPgJ-QbNq2G0xuQPgIBGCKNQK-oS0j1X4Dmcx8ca0F4WF4Oyw37af23u8ntSHA71HGs06Ua0in6rcRFvc3GqOhGePjuAjUMtXnp7q&cv=1&size=thumb/240_240',
            title: '',
            author: 'Sasha Alex Sloan,David Archuleta,Alex Goot,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/s1/mixtape?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqSW411K5cstHd4fN2bEVETIOJbXS0yevWyv210e4m6hKaq4B2Wx1PTYE6qnK0eStqyLP1MSPW3lamn9OBGpKOBB35afs3eaZif0MINPTbY2knHuVV0gVSFB1IKjy2vygf9CNGNvVnYxpa1H4BX3ERQASKXOzLvexzCC89Mq8sNGYVG&cv=1&size=thumb/240_240',
            title: '',
            author: 'B Ray,Han Sara,Great,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/mixtape?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqPm4LHK2cp_HpnjM2LUJQTkO4WPLKyGzsvaIN0C1cZVPpKjOL0APCec2Gni53jzWWia1KZOLs6orpqeFV02CD-FFJXqd0z4duvLEJoTPdIxzanL38mMJAVgUGHOY19Kfy9CTHtWAcIdoaqr1AXENQAQV2nCvLCC-yC1H9JiyW7aYVG&cv=1&size=thumb/240_240',
            title: '',
            author: 'B Ray,Đạt G,Masew,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/s1/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDzimDv0KmGJtpxVsmnV017VFucCMWLQ6uu_XzG90brDZcA3rLrO3HdLBup70bHBIzvapeunJqn7wMA5qtjO0GkkSvcAVGL32wvjdPLz0XGBg6F8nYqAHWsaC9cI9WmH2_8qmfKZ3qfPp6UJpqeFJrdDPPNP5qmPLOitXfv36ayAqH35tK4QGL6C&cv=1&size=thumb/240_240',
            title: '',
            author: 'Doja Cat,Lenka,Britney Spears,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/mixtape?src=HavwqN7EYmrDGr6VBegUMHOLKPiyqPa4KnLJcp_Hcnq23r2PQDF67GWB2iuoWfD83LeAp322maLG2bcJRDVPIKLRLTK-t98B36XEqZBhb41H8bk6QRsKH4DvMTiglST4G7aAn2cXaamMSrtDUVsM6q9pNCqZgyH5I748b2VynqPD8KUSPAtB01yo0CWo-vHQ8t5KoYdxY1iYVG&cv=1&size=thumb/240_240',
            title: '',
            author: 'B Ray,Han Sara,Great,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/s1/dailymix?src=HavwqN7EvKCI1oYSFOdq0r1DQfnlYQS30b9lq6EDfGC313Y6ETUlKWCAODK-qFbINWvXWMI0hGaJ0NFUQCR_0bX3EeOZahPL5GzzbsE6_4GL37tCOuMm7G9RUibiYBT0L5DxmMoCvq870IZ6QuxZHbHMUyGwaxy415ezbZ7O_KrR4MdVOPMn2afH9fLnbRaA6b4ks7A8uLuUKtsF8OtZ2qvMAuukXR08HLXwZtc5uGj43s7HROFjJHO4AfCatQOPNrLdtsFCvbWL5sVPOyZcNWeIVDmsph5VMq0ls66RjWvS5NkEDiks2byJBzzbpB51LbTuqtq&cv=1&size=thumb/240_240',
            title: '',
            author: 'Little Mix,Sasha Alex Sloan,Doja Cat,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/s2/dailymix?src=HavwqN7EvKCI1oYSFOdq0r5DEvmzYQG3KGC_WZxSfGjHLcdQQj-a2m80CurgqgvOK05Yq6YChb4V3N26PChyMbHFETuldhKD6GD-ps-C_qSPLtx6RzZeHWS5SSOzYkSJ1mKhcsVPi1jSLdpEFTctJrqAASqrp-qD2mPldpw4hqHKJJlMRidZ0qKDUvnzoRS370qlqYVUvGSRK7YETuZZ1nm7BeuasEDO7b5rsINSkLWU3pc2DuEr7am4Si1-tVvA1LK_Z3dClWfF7Z_SESE-MbbE9jWnmBi9NHqWZ6N1xGK47dM3QP3Z2WCQAurgaESJMGikWNq&cv=1&size=thumb/240_240',
            title: '',
            author: 'Binz,Touliver,PhucXP,...',
        },
        {
            img: 'https://photo-playlist-zmp3.zadn.vn/discover?src=HavXtNhExLS15dJ5VG&size=thumb/240_240&',
            title: '',
            author: 'Chưa nghe nhưng sẽ thích',
        },
    ],
    newSong: [
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/2/7/8/f27830be31413157bb742612d7333f9c.jpg',
            title: 'V-Pop Tháng 9/2021',
            author: 'Quân A.P,ERIK,Nal,...',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/d/3/c/dd3c70346504d939773e66a04709ae53.jpg',
            title: 'US-UK Tháng 9/2021',
            author: 'Troye Sivan,Little Mix,Imagine Dragons,...',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/7/3/e/473ed1e829c270f9164125085ea5e80b.jpg',
            title: 'Dance/Remix Tháng 9/2021',
            author: 'Alan Walker,R3hab,Riton,...',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/1/2/2/b122179fe35fee67fca535cf80b72fad.jpg',
            title: 'K-Pop Tháng 9/2021',
            author: 'LISA,HYUNA,LEE HI,...',
        },
        {
            img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/2/3/c/323cca01295abd69bbe845429ed32bde.jpg',
            title: 'C-Pop Tháng 9/2021',
            author: 'PANTHEPACK,Tiểu Điền Âm Nhạc Xã,PER6IX,...',
        },
    ]
}

export default function Content() {

    const [stateSlider, setSlider] = useState(["showFirst", "showSecond", "showThird", "hiddenFirst", "hiddenSecond", "hiddenThird"])

    const handlePre = () => {
        let [first, ...newStateSlider] = [...stateSlider]
        newStateSlider.push(first)
        setSlider(newStateSlider)
    }
    const handleNext = () => {
        let newStateSlider = [...stateSlider]
        let lengthSlider = newStateSlider.length
        let last = newStateSlider[lengthSlider - 1]
        newStateSlider.splice(newStateSlider.length - 1, 1)
        newStateSlider.unshift(last)
        setSlider(newStateSlider)
    }

    const handleScroll = e => {
        const header = e.target.previousElementSibling.style
        if (e.target.scrollTop > 100) {
            Object.assign(header, {
                backgroundColor: "#37075d"
            })
        } else {
            Object.assign(header, {
                backgroundColor: ""
            })
        }
    }


    return (
        <div className="content__wrap px-20 text-white" onScroll={e => handleScroll(e)}>
            <div className="gallery">
                <div className="slider relative top-24 overflow-hidden">
                    <div className="slider__prev"
                        onClick={() => { handlePre() }}>
                        <MdNavigateBefore className="slider__icon " />
                    </div>
                    <div className="relative">
                        {slider.map((img, idx) => {
                            return (<div key={idx} className={`slider__img absolute ${stateSlider[idx]}`}>
                                <img className="rounded-lg" src={img.img} alt="" />
                            </div>)
                        })}
                    </div>
                    <div className="slider__next"
                        onClick={() => handleNext()}>
                        <MdNavigateNext className="slider__icon " />
                    </div>
                </div>
            </div>
            <div className="songRecent">
                <h3>Nghe gần đây</h3>
                <div className="grid grid-cols-5 gap-5">
                    {songView.songRecent.map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>
            <div className="discoverySong">
                <h3>Có thể bạn sẽ thích đấy</h3>
                <div className="grid grid-cols-5 gap-5">
                    {songView.discoverySong.map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>
            <div className="hotSong">
                <h3>Nhạc hay nghe ngay</h3>
                <div className="grid grid-cols-5 gap-5">
                    {songView.hotSong.map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>
            <div className="xoneSong">
                <h3>XONE's CORNER </h3>
                <div className="grid grid-cols-5 gap-5">
                    {songView.xoneSong.map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>
            <div className="radioSong">
                <h3>Radio nổi bật</h3>
                <div className="grid grid-cols-7 gap-3">
                    {songView.radioSong.map(song => {
                        return <CardRadio song={song} />
                    })}

                </div>
            </div>
            <div className="mixSong">
                <h3>Mixtab yêu thích</h3>
                <div className="grid grid-cols-5 gap-5">
                    {songView.mixSong.slice(0, 5).map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>
            <div className="mixSongForYou">
                <h3>Mixtab riêng cho bạn</h3>
                <div className="flex gap-5">
                    {songView.mixSong.slice(5).map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>
            <div className="newSong">
                <h3>Nhạc mới mỗi ngày</h3>
                <div className="grid grid-cols-5 gap-5">
                    {songView.newSong.map(song => {
                        return <CardImg song={song} />
                    })}

                </div>
            </div>

        </div>
    )
}
