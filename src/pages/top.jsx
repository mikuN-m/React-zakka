import React from "react";
import { Link } from "react-router-dom";

class Top extends React.Component {
    render(){
        return(
            <div>

                <div className="absolute top-0 left-0">
                    <p className="font-text">
                        出典:<Link to={"https://unsplash.com/ja"} target="_blank">unsplash</Link>
                    </p>
                </div>

                <div className="w-full h-screen bg-[url('top-img1.jpg')] bg-cover bg-center ">

                    <div className="grid place-items-center w-full h-full bg-[#fff]/20">
                        <div className="text-center">
                            <h1 className="text-6xl font-title text-title">
                                beachside clubhouse
                            </h1>
                        </div>
                    </div>

                </div>

                <div className="my-6 md:p-10">

                    <div className="flex justify-center text-2xl font-bold">
                        <div>
                            <h2 className="pb-2">穏やかな音楽と</h2>
                            <h2 className="pb-2 pl-4">美味しいコーヒーで</h2>
                            <h2 className="pl-10">至福のひとときを。</h2>
                        </div>
                    </div>

                    <p className="text-base font-bold mx-6 my-10 text-text text-left md:text-lg">
                        蒼い海に包まれて、特別な時間を演出。穏やかな波音と美味しいコーヒーを楽しんでください。<br/>
                        心地よい風と波の音色が心を満たす、贅沢なカフェ体験をご提供します
                    </p>

                    <div className="grid grid-cols-2 gap-3 m-6 md:grid-cols-4">

                        <div>
                            <img src="content1.jpg" />
                        </div>

                        <div>
                            <img src="content1.jpg" />
                        </div>

                        <div>
                            <img src="content1.jpg" />
                        </div>

                        <div>
                            <img src="content1.jpg" />
                        </div>

                    </div>

                </div>


                <div className="my-28 md:p-10">

                    <div className="text-center">
                        <h1 className="font-title text-3xl">Menu</h1>
                    </div>

                </div>

            </div>
        )
    }
}

export default Top