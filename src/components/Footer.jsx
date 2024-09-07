import React from "react";
import logo from "../assets/logo.svg";
import google from "../assets/playstore.svg";
import app from "../assets/applestore.svg";
import locat from "../assets/footer/location.svg";
import mail from "../assets/footer/mail.svg";
import glob from "../assets/footer/glob.svg";
import fb from "../assets/fb.svg";
import { Link } from "react-router-dom";

import insta from "../assets/insta.svg";
import ball from "../assets/footer/ball.svg";
import apple from "../assets/applestore.svg";
import play from "../assets/playstore.svg";
import twitter from "../assets/x.svg";
import tiktok from "../assets/tick.svg";
import tel from "../assets/tel.svg";
import lang from "../assets/lang.svg";
import yt from "../assets/yt.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="space-y-6 md:space-y-0 h-[130vh] lg:h-auto bg-[#5b007a] md:flex justify-around p-10 lg:p-20">
        <aside className="w-96 space-y-16">
          <div className="flex items-center">
            <img src={logo} alt="" />
            <div>
              <h1 className="text-3xl font-semibold">Pyjamagame Limited</h1>
              <h1>Company Number: 15915091</h1>
            </div>
          </div>

          <h1 className="hidden md:flex">Download the app by clicking the link below:</h1>
          <div className="hidden md:flex gap-4">
            <a href="#"></a>
            <img className="w-[174px] border rounded-lg" src={google} alt="" />
            <a href="#">
              <img className="border rounded-lg" src={app} alt="" />
            </a>
          </div>
        </aside>
        <nav className="space-y-8 flex flex-col ">
          <h6 className="font-semibold text-xl">Quick Links</h6>
          <a href="#" className="link link-hover" onClick={scrollToTop}>
            About
          </a>
          <a href="#" className="link link-hover" onClick={scrollToTop}>
            Presales
          </a>
          <Link to="/" className="link link-hover" onClick={scrollToTop}>
            Home
          </Link>
          <a href="#" className="link link-hover" onClick={scrollToTop}>
            Whitepaper
          </a>
        </nav>
        <nav className="grid space-y-8">
          <h6 className="font-semibold text-xl">Contact Info</h6>
          <a className="link link-hover items-center gap-2 flex" onClick={scrollToTop}>
            <img src={locat} alt="#" />
            <h1>128, City Road, London, EC1V 2NX UNITED KINGDOM</h1>
          </a>
          <a className="link link-hover items-center gap-2 flex" onClick={scrollToTop}>
            <img src={mail} alt="#" />
            <h1>info@pyjama-coin.co</h1>
          </a>
          <a className="link link-hover items-center gap-2 flex" onClick={scrollToTop}>
            <img src={glob} alt="#" />
            <h1>www.pyjama-coin.com</h1>
          </a>
        </nav>
        <nav className="grid space-y-8">
          <h6 className="font-semibold text-xl">Others</h6>
          <Link to="/privacy" className="link link-hover" onClick={scrollToTop}>
            Privacy
          </Link>
          <a className="link link-hover" onClick={scrollToTop}>
            Legal
          </a>
          <a className="link link-hover" onClick={scrollToTop}>
            Customer Support
          </a>
        </nav>
        <h1 className="md:hidden flex font-semibold">Download the app by clicking the link below:</h1>
        <div className="md:hidden flex gap-4 justify-between">
          <button className="border-none">
            <img src={apple} alt="" className="" />
          </button>
          <button className="border-none">
            <img src={play} alt="" className="" />
          </button>
        </div>
      </footer>
      <div className="w-[100%] border bg-[#5b007a] border-b-0 border-l-0 border-r-0">
        <div className="flex justify-between mx-16 items-center p-4">
          <p>
            &copy; {new Date().getFullYear()} Pyjama coin. All rights reserved.
          </p>
          <div className="flex items-center p-2 gap-2 justify-between">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img
                src={tel}
                alt="Telegram"
                className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75"
              />
            </a>
            <a href="https://x.com/pyjamacoin" target="_blank" rel="noopener noreferrer">
              <img
                src={twitter}
                alt="Twitter"
                className="cursor-pointer mt-2 w-10 transition-all hover:scale-110 duration-300 delay-75"
              />
            </a>
            <a href="https://www.instagram.com/pyjamacoin2024" target="_blank" rel="noopener noreferrer">
              <img
                src={insta}
                alt="Instagram"
                className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75"
              />
            </a>
            <a href="https://www.facebook.com/share/81U9uBLNLug27p2R" target="_blank" rel="noopener noreferrer">
              <img
                src={fb}
                alt="Facebook"
                className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75"
              />
            </a>
            <a href="https://www.tiktok.com/@pyjamap2e" target="_blank" rel="noopener noreferrer">
              <img
                src={tiktok}
                alt="TikTok"
                className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img
                src={yt}
                alt="YouTube"
                className="cursor-pointer w-8 transition-all hover:scale-110 duration-300 delay-75"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
