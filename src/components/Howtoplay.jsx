import React from 'react'
import apple from "../assets/applestore.svg"
import play from "../assets/playstore.svg"
import mob from "../assets/mobiles.svg"
import AOS from "aos";
import "aos/dist/aos.css";

function Howtoplay() {
    return (
        <div data-aos="flip-left"  className='p-4'>
            <div className="max-w-[1400px] bg-[#471e79] p-10 gap-2 flex flex-col lg:flex-row py-20 rounded-[40px] mx-auto">
                <div  data-aos="zoom-in-up" className="flex-[.5] lg:p-20 mt-10 flex flex-col gap-10 ">
                    <div className="flex flex-col justify-center    gap-5">
                        <p className="text-2xl lg:text-3xl font-bold ">Comming soon </p>
                        <p className="text-4xl lg:text-5xl font-bold ">Pyjama Game App ! </p>

                        <p className="">Real rewards, no fluff. At PyjamaCoin, we skip the hype  <br/>and deliver what matters: genuine rewards and a fun experience.<br/> No empty promises — just a team committed to keeping you happy!</p>
                    </div>
                    <div className="flex gap-2">
                       <button className=""> <img src={apple} alt="" className="" /></button>
                       <button className="">   <img src={play} alt="" className="" /></button>
                      
                    </div>

                </div>
                <div data-aos="zoom-in-up"  className="flex-[.5]  ">
                   <img src={mob} alt="" className="lg:min-w-[700px] w-[300px]" />

                </div>


            </div>



        </div>
    )
}

export default Howtoplay