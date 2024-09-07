import DonutChart from './DonutChart';

function Tokenomics() {
    return (
        <div className="tbg md:p-20">
            <div className='max-w-[1400px] lg:h-[120vh] relative flex flex-col mx-auto'>
                <div className="flex flex-col gap-2">
                    <div data-aos="fade-left" className="text-4xl lg:text-5xl font-bold text-center">Tokenomics</div>
                    <div data-aos="fade-right" className="text-xl lg:text-2xl text-center">Total Supply</div>
                    <div data-aos="fade-down" className="text-xl lg:text-2xl text-center">
                        Max Supply: <span>1,000,000,000</span> PyjamaCoins
                    </div>
                </div>

                {/* Large Screen */}
                <div className="flex flex-col lg:flex-row p-8 lg:p-20 gap-8 lg:gap-2">
                    <div className="flex-[.5] order-2 lg:order-1 flex flex-col gap-2">
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <div className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#cb795b]">
                                <div>Presale:</div>
                                <div>35%</div>
                            </div>
                            <div className="lg:pl-5">350 million Pyjamacoins in the presale! Unsold tokens will be burned!</div>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <div className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#5c4ffe]">
                                <div>Gameplay Rewards:</div>
                                <div>30%</div>
                            </div>
                            <div className="lg:pl-5">300 million Pyjamcoins are set aside to reward players for in-game activities and achievements, boosting engagement and fun!</div>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <div className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#602eeb]">
                                <div>Dev & Team:</div>
                                <div>20%</div>
                            </div>
                            <div className="lg:pl-5">Vesting: 200 million tokens are locked up for 12 months after the presale, with 50% released each year to keep things fair and stable.</div>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <div className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#ed9c50]">
                                <div>Marketing:</div>
                                <div>4%</div>
                            </div>
                            <div className="lg:pl-5">40 million tokens guarantee continued marketing support.</div>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <div className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#63b4c9]">
                                <div>Exchange Listing:</div>
                                <div>4%</div>
                            </div>
                            <div className="lg:pl-5">40 million tokens are reserved for getting PyjamaCoins listed on exchanges, ensuring liquidity and easy access across platforms.</div>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col gap-2">
                            <div className="p-2 text-xl font-semibold rounded-r-full flex items-center justify-between bg-[#9ad960]">
                                <div>Airdrop Program:</div>
                                <div>7%</div>
                            </div>
                            <div className="lg:pl-5">70 million tokens are dedicated to rewarding active community members with 400 PyjamaCoins. Boost your reward by referring others to the airdrop.</div>
                        </div>
                    </div>

                    <div className="flex-[.5] lg:order-2 order-1 lg:p-20 flex items-center justify-center">
                        <DonutChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;
