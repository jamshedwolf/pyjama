import circle from "../assets/circle.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Roadmap() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for the animations
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="">
      <div className="bgg py-20 rbg flex flex-col gap-5">
        <p className="text-6xl font-semibold text-center" data-aos="fade-right">Our Roadmap</p>

        {/* Desktop view */}
        <div className="gap-2 justify-center mt-20 hidden lg:flex">
          {/* Left column */}
          <div className="flex-[.4] flex flex-col pt-60 gap-20">
            <div className="relative flex lg:w-[500px] border rounded-2xl bg-[#7a33b85b] flex-col p-10 gap-2" data-aos="fade-up">
              <div className="flex justify-between items-center">
                <p>Phase 2</p>
                <p>AUG To SEP</p>
              </div>
              <div className="font-bold text-xl">Presale and Airdrop</div>
              <ul className="disc">
                <li>Start Marketing</li>
                <li>Smartcontract finalising & audit</li>
                <li>Community building</li>
                <li>Presale in 3 Phases</li>
                <li>Finalising the Pyjamacoin Game</li>
                <li>Preparation listing</li>
              </ul>
              <div className="absolute w-[135px] top-1/2 h-[1px] right-[-135px] bg-white"></div>
              <img src={circle} alt="" className="absolute top-[137px] right-[-145px]" />
            </div>

            <div className="relative mt-[100px] flex lg:w-[500px] border rounded-2xl bg-[#7a33b85b] flex-col p-10 gap-2" data-aos="fade-up">
              <div className="flex justify-between items-center">
                <p>Phase 4</p>
                <p>DEC To JAN</p>
              </div>
              <div className="font-bold text-xl">Game Launch and Introduction</div>
              <ul className="disc">
                <li>Community building for a successful 2025</li>
                <li>Further development of the NFT marketplace</li>
                <li>More listing on exchanges</li>
                <li>Game development</li>
              </ul>
              <div className="absolute w-[135px] top-[146px] h-[1px] right-[-135px] bg-white"></div>
              <img src={circle} alt="" className="absolute top-[137px]  right-[-145px]" />
            </div>
          </div>

          {/* Middle line */}
          <div className="h-[730px] mt-[140px] border  w-[2px]" data-aos="zoom-in"></div>

          {/* Right column */}
          <div className="flex-[.4] flex flex-col gap-20 justify-start items-end">
            <div className="relative flex lg:w-[500px] border rounded-2xl bg-[#7a33b85b] flex-col p-10 gap-2" data-aos="fade-up">
              <div className="flex justify-between items-center">
                <p>Phase 1</p>
                <p>MAY To JULY</p>
              </div>
              <div className="font-bold text-xl">Concept & Development</div>
              <ul className="disc">
                <li>Idea, Team formation</li>
                <li>Initial game design and mechanics planning</li>
                <li>Creation of digital pet assets and animations</li>
                <li>Private Sale 0,006 Dollar + 10 % Bonus</li>
                <li>Start Airdrop</li>
              </ul>
              <div className="absolute w-[135px] top-[140px] h-[1px] left-[-135px] bg-white"></div>
              <img src={circle} alt="" className="absolute z-10 top-[137px] left-[-145px]" />
            </div>

            <div className="relative flex lg:w-[500px] mt-20 border rounded-2xl bg-[#7a33b85b] flex-col p-10 gap-2" data-aos="fade-up">
              <div className="flex justify-between items-center">
                <p>Phase 3</p>
                <p>OCT To NOV</p>
              </div>
              <div className="font-bold text-xl">Smart Contract Development Audit</div>
              <ul className="disc">
                <li>Deploy of the Smartcontract on Solana</li>
                <li>Launch of the Pyjamacoin Game</li>
                <li>Listing on Exchanges</li>
                <li>Integration of the NFT marketplace</li>
                <li>Further development of the game</li>
              </ul>
              <div className="absolute w-[135px] top-[145px] h-[1px] left-[-135px] bg-white"></div>
              <img src={circle} alt="" className="absolute z-10 top-[137px] left-[-145px]" />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex lg:hidden flex-col gap-5" data-aos="fade-up">
          <div className="flex gap-5 flex-col justify-end px-5 mt-10">
            <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#7a33b85b] flex-col" data-aos="fade-up">
              <p className="text-xl text-[#ffffff]">
                <div className="flex justify-between items-center">
                  <p className="">Phase 1</p>
                  <p>MAY To JULY</p>
                </div>
              </p>
              <p className="text-xl font-bold">Concept & Development</p>
              <div>
                <ul style={{ listStyleType: 'disc' }} className="text-[#ffffff]">
                  <li>Idea, Team formation</li>
                  <li>Initial game design and mechanics planning</li>
                  <li>Creation of digital pet assets and animations</li>
                  <li>Private Sale 0,006 Dollar + 10 % Bonus</li>
                  <li>Start Airdrop</li>
                </ul>
              </div>
            </div>

            <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#7a33b85b] flex-col" data-aos="fade-up">
              <div className="flex justify-between items-center">
                <p>Phase 2</p>
                <p>AUG To SEP</p>
              </div>
              <p className="text-xl font-bold">Presale and Airdrop</p>
              <div>
                <ul style={{ listStyleType: 'disc' }} className="text-[#ffffff]">
                  <li>Start Marketing</li>
                  <li>Smartcontract finalising & audit</li>
                  <li>Community building</li>
                  <li>Presale in 3 Phases</li>
                  <li>Finalising the Pyjamacoin Game</li>
                  <li>Preparation listing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-5 flex-col justify-start px-5" data-aos="fade-up">
            <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#7a33b85b] flex-col">
              <div className="flex justify-between items-center">
                <p>Phase 3</p>
                <p>OCT To NOV</p>
              </div>
              <p className="text-xl font-bold">Smart Contract Development Audit</p>
              <div>
                <ul style={{ listStyleType: 'disc' }} className="text-[#ffffff]">
                  <li>Deploy of the Smartcontract on Solana</li>
                  <li>Launch of the Pyjamacoin Game</li>
                  <li>Listing on Exchanges</li>
                  <li>Integration of the NFT marketplace</li>
                  <li>Further development of the game</li>
                </ul>
              </div>
            </div>

            <div className="relative flex p-5 rounded-[20px] px-10 gap-5 bg-[#7a33b85b] flex-col">
              <div className="flex justify-between items-center">
                <p>Phase 4</p>
                <p>DEC To JAN</p>
              </div>
              <p className="text-xl font-bold">Game Launch and Introduction</p>
              <div>
                <ul style={{ listStyleType: 'disc' }} className="text-[#ffffff]">
                  <li>Community building for a successful 2025</li>
                  <li>Further development of the NFT marketplace</li>
                  <li>More listing on exchanges</li>
                  <li>Game development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
