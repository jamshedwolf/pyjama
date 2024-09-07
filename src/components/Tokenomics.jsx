import DonutChart from './DonutChart';

function Tokenomics() {
    return (
        <div className="tbg md:p-20">
            <div className='max-w-[1400px]   lg:h-[120vh] relative  flex flex-col  mx-auto'>

              <div className="flex flex-col gap-2">
              <div data-aos="fade-left" className="text-4xl lg:text-5xl font-bold text-center">Tokenomics</div>
                <div data-aos="fade-right" className="text-xl lg:text-2xl text-center"> Total Supply</div>
                <div data-aos="fade-down" className="text-xl lg:text-2xl text-center">Max Supply: <span className="">1,000,000,000</span> PyjamaCoins</div>
              </div>




                {/* large screen */}

                <div className="flex flex-col lg:flex-row p-8 lg:p-20  gap-8  lg:gap-2">

                    <div className="flex-[.5] order-2 lg:order-1 flex flex-col gap-2">
                        <div  data-aos="fade-down"className="flex flex-col gap-2">
                            <p className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#cb795b]">
                                <p className="">Presale:</p>
                                <p className="">35%</p>
                            </p>
                         <p className="lg:pl-5">350 million Pyjamacoins in the presale! Unsold tokens will be burned !</p>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <p className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#5c4ffe]">
                                <p className="">Gameplay Rewards: </p>
                                <p className="">30%</p>
                            </p>
                         <p className="lg:pl-5">300 million Pyjamcoins are set aside to reward players for in-game activities and achievements, boosting engagement and fun !</p>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <p className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#602eeb]">
                                <p className="">Dev & Team:</p>
                                <p className="">
                                    20%</p>
                            </p>
                         <p className="lg:pl-5">Vesting: 200 million tokens are locked up for 12 months after the presale, with 50% released each year to keep things fair and stable.</p>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <p className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#ed9c50] ">
                                <p className="">Marketing:</p>
                                <p className="">4%</p>
                            </p>
                         <p className="lg:pl-5">40 million tokens guarantee continued marketing support </p>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <p className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#63b4c9] ">
                                <p className="">Exchange Listing: </p>
                                <p className="">4%</p>
                            </p>
                         <p className="lg:pl-5">40 million tokens are reserved for getting PyjamaCoins listed on exchanges, ensuring liquidity and easy access across platforms.</p>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <p className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#9ad960]">
                                <p className="">Airdrop Program:  </p>
                                <p className="">7%</p>
                            </p>
                         <p className="lg:pl-5">70 million token are dedicated to reward active community members to play the game with 400 Pyjamacoins. Boost your reward with referring the aidrdrop</p>
                        </div>


                    </div>
                    <div className="flex-[.5] lg:order-2 order-1 lg:p-20 flex items-center justify-center "><DonutChart /></div>






                </div>

            </div>
        </div>
    );
}

export default Tokenomics;
