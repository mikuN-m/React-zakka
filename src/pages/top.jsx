import React from "react";
import { Link } from "react-router-dom";

class Top extends React.Component {
    render(){

        const handleSubmit = (e) => {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const data = e.target.data.value;

            window.alert(name,email,data);
        };

        return(
            <div>

                <div className="absolute top-0 left-0">
                    <p className="font-text">
                        出典:<Link to={"https://unsplash.com/ja"} target="_blank">unsplash</Link>
                    </p>
                </div>

                <div className="w-full h-[60vh] bg-[url('top-img1.jpg')] bg-cover bg-center ">

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

                    <p className="text-base font-bold mx-6 my-10 text-text text-left md:text-lg md:text-center">
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


                <div className="my-28 mx-6 md:p-10">

                    <div className="text-center">
                        <h1 className="font-title text-3xl">Menu</h1>
                    </div>

                    <div className="w-full my-5 grid grid-cols-1 md:grid-cols-2">

                        <div className="flex justify-center my-4">
                            <div className="w-1/3">
                                <img src="menu-coffee.jpg" />
                            </div>

                            <div className="w-2/3">
                                <h2 className="text-center">coffee</h2>

                                <ul className="text-center p-2">
                                    <li>アメリカーノ - 350円</li>
                                    <li>カフェラテ - 400円</li>
                                    <li>エスプレッソ - 300円</li>
                                    <li>カプチーノ - 450円</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex justify-center columns-2 my-4">
                            <div className="w-1/3">
                                <img src="menu-cake.jpg" />
                            </div>

                            <div className="w-2/3">
                                <h2 className="text-center">cake</h2>

                                <ul className="text-center p-2">
                                    <li>チョコレートケーキ - 500円</li>
                                    <li>ベリータルト - 450円</li>
                                    <li>チーズケーキ - 480円</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex justify-center columns-2 my-4">
                            <div className="w-1/3">
                                <img src="menu-food.jpg" />
                            </div>

                            <div className="w-2/3">
                                <h2 className="text-center">food</h2>

                                <ul className="text-center p-2">
                                    <li>サンドイッチセット（ハム＆チーズ） - 600円</li>
                                    <li>クロワッサンセット（コーヒー付き） - 550円</li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="my-16 mx-6 md:p-10 lg:px-48">

                    <div className="text-center">
                        <h1 className="font-title text-3xl mb-4">contact</h1>
                    </div>

                    <div className="w-full py-10 text-center border-dashed border rounded border-inherit">
                    
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <p htmlFor="email">name</p>
                                <input className="w-1/2 border-solid border rounded border-inherit" type="text" id="name" name="name" />
                            </div>

                            <div className="mb-10">
                                <p htmlFor="password">mail</p>
                                <input className="w-1/2 border-solid border rounded border-inherit" id="email" name="email" type="text" />
                            </div>

                            <div className="mb-10">
                                <textarea className="w-1/2 border-solid border rounded border-inherit" rows={5} name="data" type="text"></textarea>
                            </div>

                            <div>
                                <button type="submit" className="bg-emphasis hover:bg-[#D9D9D9] rounded-full border border-solid py-3 px-10">send</button>
                            </div>
                        </form>
                    
                    </div>

                </div>

            </div>
        )
    }
}

export default Top