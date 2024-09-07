import React from 'react'
import tick from "../assets/d1.svg"
import tick2 from "../assets/d2.svg"
import tick3 from "../assets/d3.svg"
import tick4 from "../assets/d4.svg"
import bushe from "../assets/bushe.svg"
import poly from "../assets/poly.svg"
import AOS from "aos";
import "aos/dist/aos.css";

function Download() {
    return (
        <div className='py-20 gradient px-10'>
            <div className="max-w-[1400px] mx-auto  ">
                <div className="p-10 flex flex-col gap-2">
                    <p   data-aos="fade-right"className="lg:text-5xl text-center font-bold text-4xl ">Download the Phantom Wallet</p>
                    <p  data-aos="fade-right" className="text-center text-xl"> A Simple Guide </p>

                </div>


              <div className="flex items-center justify-center gap-5 md:flex-row flex-col ">

<div className="flex flex-col gap-5  ">  
<div className="items-center justify-evenly flex p-2 bg-[#471E79] text-xl rounded-full"> A Simple Guide <img src={poly} alt="" className="" /></div>


    <img src={bushe} alt="" className="" />
    <div className="items-center justify-center flex p-2 bg-[#BA45E3] rounded-full"> Download Phantom Wallet</div>
</div>


              <div className="grid flex-[.7] gap-4 place-content-center lg:grid-cols-2 grid-cols-1">
                    <div   data-aos="fade-right" className="rounded-lg  bg-[#b945e362]  flex items-center flex-col gap-2 p-8 justify-center">
                        <p className="w-full  text-[#8A8A8A] font-bold py-5">Step 1</p>
                   
                        <p className="text-2xl font-bold ">Download Phantom Wallet</p>
                        <p className="">Start by downloading and installing Phantom Wallet from their official website. Follow the setup instructions provided.</p>


                    </div>
                    <div  data-aos="fade-right" className="rounded-lg bg-[#b945e362]  h-[350px] flex  flex-col gap-5  p-8 justify-center">
                        <p className="w-full  text-[#8A8A8A] font-bold py-5 h-">Step 2</p>
                      
                        <p className="text-2xl font-bold py-2 ">Set Up Your Wallet</p>
                        <p className="">Create your wallet and securely record your Seed Phrase - vital for wallet access later.
                        </p>


                    </div>
                    <div  data-aos="fade-left" className="rounded-lg bg-[#b945e362]  h-[350px] flex  flex-col gap-2 p-8 justify-center">
                        <p className="w-full  text-[#8A8A8A] font-bold py-5 h-">Step 3</p>
                      
                        <p className="text-2xl font-bold py-2">Fund Your Wallet</p>
                        <p className="">Add Solana (SOL) to your Phantom Wallet. Purchase SOL on exchanges like Binance or Coinbase and transfer it to your wallet.</p>


                    </div>
                    <div  data-aos="fade-left" className="rounded-lg bg-[#b945e362]  h-[350px] flex  flex-col gap-2 p-8 justify-evenly">
                        <p className="w-full  text-[#8A8A8A] font-bold py-5  ">Step 4</p>
                    
                        <p className="text-2xl font-bold  ">Connect to Presale</p>
                        <p className="">Head to the PyjamaCoin Presale page, click "Connect Wallet," and link your Phantom Wallet to participate.</p>


                    </div>
                   
                </div>
              </div>



            </div>




        </div>
    )
}

export default Download