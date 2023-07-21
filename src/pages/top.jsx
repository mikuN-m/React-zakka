import React from "react";
import { Link } from "react-router-dom";

class Top extends React.Component {
    render(){
        return(
            <div>

                <div className="absolute top-0 left-0">
                    <p className="font-text">
                        出典:<Link to={"https://www.photo-ac.com/"} target="_blank">PhotoAC</Link>
                    </p>
                </div>

                <div className="w-full h-screen bg-[url('top-img1.jpg')] bg-cover bg-center">

                    <div className="text-center w-full h-full bg-[#fff]/30 pt-64">
                        <h1 className="text-6xl font-title text-title md:">
                            beachside clubhouse
                        </h1>
                    </div>

                </div>

                {/* <div className="md:flex md:px-10">

                    <div className="flex justify-center text-3xl pt-5 whitespace-nowrap md:w-full md:mt-9 md:text-4xl">
                        <h2 className="text-left text-sub_title">
                            穏やかな波音と<br/>美味しいコーヒーで<br/>
                            <span>至福のひとときを。</span>
                        </h2>   
                    </div>
                                     

                    <p className="p-5 text-sm md:w-full md:text-lg">
                        蒼い海に包まれて、特別な時間を演出。穏やかな波音と美味しいコーヒーを楽しんでください。<br/><br/>
                        こだわりの豆を使用した本格的なコーヒーやスイーツ、
                        自家製のオリジナルドリンクやヘルシーなフードメニューも取り揃えております。<br/>
                        デイリーランチやアフタヌーンティーセットなど、豊富なメニューで飽きることなくお楽しみください。<br/><br/>
                        心地よい風と波の音色が心を満たす、贅沢なカフェ体験をご提供します
                    </p>

                </div> */}

                {/* 

                <div className="introduction-content">

                    <div className="introduction-title">
                        <h2>
                            穏やかな波音と<br/>美味しいコーヒーで<br/>
                            <span>至福のひとときを。</span>
                        </h2>
                    </div>

                    <div className="introduction-text">
                        <p>
                        。蒼い海に包まれて、特別な時間を演出。穏やかな波音と美味しいコーヒーを楽しんでください。<br/><br/>
                        こだわりの豆を使用した本格的なコーヒーやスイーツ、
                        自家製のオリジナルドリンクやヘルシーなフードメニューも取り揃えております。<br/>
                        デイリーランチやアフタヌーンティーセットなど、豊富なメニューで飽きることなくお楽しみください。<br/><br/>
                        心地よい風と波の音色が心を満たす、贅沢なカフェ体験をご提供します
                        </p>
                    </div>

                </div>

                <div className="top-img-wrapper">

                    <div className="titel-box">

                        <div className="top-title">
                            <h1>beachside clubhouse</h1>
                        </div>

                        <div className="top-sub-titel">
                            <p>海の見えるカフェ</p>
                        </div>

                    </div>

                </div> */}

            </div>
        )
    }
}

export default Top