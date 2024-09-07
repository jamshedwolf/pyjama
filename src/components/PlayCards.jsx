import React from 'react'
import cat1 from "../assets/cat1.svg"
import cat2 from "../assets/cat2.svg";
import cat3 from "../assets/cat3.svg";
import cat4 from "../assets/cat4.svg";
import cat5 from "../assets/cat5.svg";
import cat6 from "../assets/cat6.svg";
import cat7 from "../assets/cat7.svg";
import cat8 from "../assets/cat8.svg";
import mobile from "../assets/phone.svg";
import mob from "../assets/mob.svg";
import e1 from "../assets/e1.svg";
import e2 from "../assets/cry.svg";
import sleep from "../assets/sleeping.svg";

import e4 from "../assets/4.svg";
import e5 from "../assets/e5.svg";
import cartoon from "../assets/cartoon.mp4"


function PlayCards() {
    return (
        <div className='bgplay'>
            <div className="max-w-[1400px] text-white grid  p-10  px-10 mx-auto">

                <div className="flex flex-col gap-10 py-10 ">
                    <p data-aos="zoom-in" className="text-4xl lg:text-5xl font-bold text-center">How to earn Pyjamacoins </p>
                    <p data-aos="zoom-in" className="text-center">Dive into four fun mini-games: play fetch, cook up treats, give your pet a stylish makeover, and <br />keep them cozy in bed.
                    </p>


                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-4 ">

                        <div className="rounded-lg bg-[#b945e362] flex items-center flex-col gap-6 p-4 justify-center" data-aos="fade-left">
                            <p className="w-full  font-bold">Step 1</p>
                            <img src={e1} alt="" className="w-[100px]" />
                            <p className="text-xl font-semibold text-center">Track Steps</p>
                            <p className="text-center">
                                Take your pet for walks, track your steps, and earn rewards for keeping active.
                            </p>
                        </div>
                        <div className="rounded-lg bg-[#b945e362] flex items-center flex-col gap-4 p-4 justify-center" data-aos="fade-left">
                            <p className="w-full  font-bold">Step 2</p>
                            <img src={e2} alt="" className="w-[100px]" />
                            <p className="text-xl font-semibold text-center">Pet Emotions</p>
                            <p className="text-center">
                                Monitor your pet’s mood—sad, okay, happy. A happy pet earns the most Pyjama Coins during sleep.
                            </p>
                        </div>
                        <div className="rounded-lg bg-[#b945e362] flex items-center flex-col gap-5 p-4 justify-center" data-aos="fade-left">
                            <p className="w-full mb-2  font-bold">Step 3</p>
                            <img src={sleep} alt="" className="w-[100px]" />
                            <p className="text-xl font-semibold text-center">Sleeping Rewards</p>
                            <p className="text-center">
                                Dress your pet in pajamas and ensure it's happy to maximize your coin earnings overnight.
                            </p>
                        </div>
                        <div className="rounded-lg bg-[#b945e362] flex items-center flex-col gap-4 p-4 justify-center" data-aos="fade-left">
                            <p className="w-full  font-bold">Step 4</p>
                            <img src={e4} alt="" className="w-[100px]" />
                            <p className="text-xl font-semibold text-center">Engage in Activities</p>
                            <p className="text-center">
                                Maintain your pet's happiness through various activities, boosting their well-being and your earnings.
                            </p>
                        </div>
                        <div className="rounded-lg bg-[#b945e362] flex items-center flex-col gap-4 p-4 justify-center" data-aos="fade-left">
                            <p className="w-full  font-bold">Step 5</p>
                            <img src={e5} alt="" className="w-[100px]" />
                            <p className="text-xl font-semibold text-center">Emotion Based Earnings</p>
                            <p className="text-center">
                                Understand that your earnings depend on your pet's emotions; keep them happy to earn the most!
                            </p>
                        </div>



                    </div>
                    <div className="flex gap-2 flex-col md:flex-row my-10">
                        <div className="grid  flex-[.5] grid-cols-1 md:grid-cols-2 place-content-center gap-8">


                            <div data-aos="zoom-in" className="bg-[#b945e362] p-4 rounded-lg flex items-center justify-center">

                                <img src={cat2} alt="" className="" />
                            </div>

                            <div data-aos="zoom-in" className="bg-[#b945e362] relative   p-4 rounded-lg flex items-center justify-center">
                                <div className="absolute  w-full h-full flex items-center justify-center text-2xl backdrop-blur-[5px]  rounded-lg font-semibold">Comming Soon</div>
                                <img src={cat4} alt="" className="" />
                            </div>

                            <div data-aos="zoom-in" className="bg-[#b945e362] relative p-4 rounded-lg flex items-center justify-center">
                                <div className="absolute  w-full h-full flex items-center justify-center text-2xl backdrop-blur-[5px]  rounded-lg font-semibold">Comming Soon</div>
                                <img src={cat6} alt="" className="" />
                            </div>
                            <div data-aos="zoom-in" className="bg-[#b945e362] relative p-4 rounded-lg flex items-center justify-center">
                                <div className="absolute  w-full h-full flex items-center justify-center text-2xl backdrop-blur-[5px]  rounded-lg font-semibold">Comming Soon</div>
                                <img src={cat7} alt="" className="" />
                                <div className=" absolute z-50 top-0 left-0 bottom-0 w-full h-full   "></div>
                            </div>

                        </div>
                        <div className="flex-[.5]  flex justify-center ">
                            <img data-aos="zoom-in" src={mobile} alt="" className="lg:h-[600px]  h-[300px]" />
                            <video src={cartoon}></video>
                            <img data-aos="zoom-in" src={mobile} alt="" className="mt-20 lg:h-[600px] h-[300px]" />


                        </div>







                    </div>

                </div>







            </div>












        </div>
    )
}

export default PlayCards