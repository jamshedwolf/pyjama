import ReactPlayer from "react-player";
import img1 from "../assets/fb.svg";
import img2 from "../assets/tick.svg";
import img3 from "../assets/tel.svg";
import sol from "../assets/sol.svg";
import coin from "../assets/coin.svg";
import coing from "../assets/coing.svg";
import jup from "../assets/jup.svg";
import ph from "../assets/ph.svg";
import img4 from "../assets/insta.svg";
import img5 from "../assets/fb.svg";
import { useState, useEffect } from "react";
import { IoCopy } from "react-icons/io5";
import vid from "../assets/video.mp4";

const Home = () => {
  const imgLinks = [
    { id: 3, title: img3 },
    { id: 1, title: img1 },
    { id: 2, title: img2 },
    { id: 4, title: img4 },
    { id: 5, title: img5 },
  ];

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 10);

  // Wallet address for copying
  const walletAddress = "jasdfjkhasdfasdfasdfasdfasdfajkh;fhhwelfjkhalksdhasdfasfdfjkhalksdhfI";

  // Copy function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      alert("Wallet address copied to clipboard!");
    }).catch(() => {
      alert("Failed to copy wallet address.");
    });
  };

  return (
    <>
      <div className=" pb-20 relative lg:px-10 lg:py-10">
        <div className="p-4  flex-col lg:flex-row flex pb-20 justify-center gap-6 text-white font-inter font-weight">
          <div data-aos="fade-down" className="flex-[.7] flex flex-col px-4 lg:px-20 py-10 gap-5 bg-opacity-15 bg-[#BA45E3] rounded-2xl items-center justify-center ">
            <div className="text-4xl lg:text-5xl font-bold ">PYJAMACOIN GAME </div>
            <div  className="text-3xl element text-center lg:text-4xl font-bold stroke-black">JOIN THE PYJAMACOIN PRESALE !</div>
            <div className="">
              <video src={vid} className="rounded-lg" controls></video>
            </div>
            <div className="relative border overflow-hidden w-full h-[50px] rounded-full py-2">
              {/* Scrolling text */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={`flex uppercase absolute item item${index + 1} left-[-100px] px-4 gap-3 bg-green text-xl max-w-fit items-center justify-center`}>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <p>pyjamacoin</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-col lg:flex-row w-full justify-between p-2">
              <p className="flex items-center text-center lg:text-2xl justify-start">Join the Pyjama Community Now!</p>
              <div className="flex justify-center items-center gap-4">
                {imgLinks.map((t, id) => (
                  <a key={id} href={t.Path}>
                    <img className="w-[30px]" src={t.title} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Presale Section */}
          <div data-aos="zoom-in" className="border-[#787878] flex-[.4] rounded-2xl bg-[#BA45E3] bg-opacity-15 p-4">
            <div className="flex flex-col py-20 items-center justify-center space-y-8">
              <h1 className="text-5xl font-bold text-center">Presale Live Now!</h1>
              <h1 className="text-xl">Second Round</h1>
              {/* Timer */}
              <div>
                <CountdownTimer targetDate={targetDate} />
              </div>
              <div className="border p-1 w-[90%] rounded-2xl relative">
                <div className="bg-[#BA45E3] p-2 py-4 rounded-xl w-[40%]">
                  <div className="w-fit absolute right-6 top-2">35%</div>
                </div>
              </div>

              <h1>
                1 SOL = <span>~25,000 $PYJAMA COIN</span>
              </h1>

              {/* Wallet Section */}
              <div className="overflow-hidden lg:h-[40px] px-2 flex">
                <button className="font-semibold bg-[#BA45E3] px-2 py-1 rounded-l-lg">
                  Wallet Address
                </button>
                <div className="flex justify-center rounded-r-lg items-center border text-white">
                  <div className="text-ellipsis overflow-hidden w-[250px]">
                    {walletAddress}
                  </div>
                  <div className="cursor-pointer p-2" onClick={copyToClipboard}>
                    <IoCopy />
                  </div>
                </div>
              </div>

              <button className="bg-[#BA45E3] py-2 w-[90%] rounded-2xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center mx-20 flex-col lg:flex-row lg:absolute bottom-[-50px] lg:left-[130px] p-10 bg-[#3d1a6e] rounded-[30px] justify-center gap-10">
          <p className="text-3xl lg:text-4xl font-semibold">Our Partners</p>
          <img src={sol} alt="" className="w-[150px]" />
          <img src={coin} alt="" className="w-[150px]" />
          <img src={coing} alt="" className="w-[150px]" />
          <img src={jup} alt="" className="w-[150px]" />
          <img src={ph} alt="" className="w-[150px]" />
        </div>
      </div>
    </>
  );
};

// Countdown Timer Function
function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.days }}></span>
        </span>
        <div className="flex justify-center">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex mb-3 mt-2"></div>
        </div>
        days
      </div>

      <div className="flex items-center">:</div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.hours }}></span>
        </span>
        <div className="flex justify-center">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex mb-3 mt-2"></div>
        </div>
        hours
      </div>
      <div className="flex items-center">:</div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.minutes }}></span>
        </span>
        <div className="flex justify-center">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex mb-3 mt-2"></div>
        </div>
        min
      </div>
      <div className="flex items-center">:</div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeRemaining.seconds }}></span>
        </span>
        <div className="flex justify-center">
          <div className="w-8 border rounded-full border-[#F7F7F8] border-opacity-40 h-0 flex mb-3 mt-2"></div>
        </div>
        sec
      </div>
    </div>
  );
}

// Calculate time remaining for Countdown
function calculateTimeRemaining(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default Home;
