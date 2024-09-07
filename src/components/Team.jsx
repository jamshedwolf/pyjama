
import { useEffect } from "react";
import m1 from "../assets/lars.svg"
import m2 from "../assets/founder1.svg";
import m3 from "../assets/dev.svg";
import m4 from "../assets/designer.svg";
import m5 from "../assets/m5.svg";
import linkk from "../assets/linkk.svg";
import tw from "../assets/tw.svg";
import m6 from "../assets/ali1.svg";
import AOS from 'aos'
import 'aos/dist/aos.css';
function Team() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for the animations
          once: true, // Whether animation should happen only once or every time you scroll up and down
        });
      }, []);
    return (
        <div className='bggteam p-10'>
            <div className="max-w-[1400px]  flex items-center justify-center gap-10 flex-col  lg:py-20   mx-auto">
                <p className="text-6xl font-semibold text-center " data-aos='fade-down' >Our Team</p>
                <div className="flex items-center lg:flex-row flex-col  gap-4 md:px-40 justify-center">
                    <div className="flex flex-col gap-2 " data-aos='fade-right' >
                        <img loading='lazy' src={m1} alt="" className="" />

                       <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#FCFCFC]">Lars W.</p>
                                <p className="text-[#9B9FAF]">Founder & CEO</p>


                            </div>

                            <div className="flex p-2 rounded-lg bg-[#8523a846] gap-2 ">
                                <a href=""  target="blank" className=""><img src={linkk} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>
                                <a href="" target="blank" className=""><img src={tw} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>


                            </div>
                        </div>



                    </div>
                    <div className="flex flex-col gap-2" data-aos='fade-down' >
                        <img loading='lazy' src={m2} alt="" className="" />
                       
                       <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#FCFCFC]">Sascha S.</p>
                                <p className="text-[#9B9FAF]">Co-Founder and CMO</p>


                            </div>

                            <div className="flex p-2 rounded-lg bg-[#8523a846] gap-2 ">
                                <a href="https://www.linkedin.com/in/sascha-schlenzig" target="blank" className=""><img src={linkk} alt=""className="transition-all hover:scale-110 duration-300 delay-150" /></a>
                                <a href="" target="blank" className=""><img src={tw} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>


                            </div>
                        </div>



                    </div>
                    <div className="flex flex-col gap-2" data-aos='fade-left' >
                        <img src={m3} loading='lazy' alt="" className="" />
                      
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#FCFCFC]">Baber Raza</p>
                                <p className="text-[#9B9FAF]">Web3 Developer</p>


                            </div>

                            <div className="flex p-2 rounded-lg bg-[#8523a846] gap-2 ">
                                <a href="" target="blank" className=""><img src={linkk} alt="" className="transition-all hover:scale-110 duration-300 delay-150"/></a>
                                <a href="" target="blank" className=""><img src={tw} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>


                            </div>
                        </div>


                    </div>



                </div>
                <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3  md:px-40 justify-center">
                    <div  className="flex flex-col gap-2" data-aos='fade-right' >
                        <img loading='lazy' src={m4} alt="" className="" />
                       
                        
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#FCFCFC]">Karim Baig</p>
                                <p className="text-[#9B9FAF]">Web Designer</p>


                            </div>

                            <div className="flex p-2 rounded-lg bg-[#8523a846] gap-2 ">
                                <a href=""  target="blank"className=""><img src={linkk} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>
                                <a href=""  target="blank" className=""><img src={tw} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>


                            </div>
                        </div>



                    </div>
                    <div className="flex flex-col gap-2"data-aos='fade-up' >
                        <img  loading='lazy'src={m6} alt="" className="h-[430px]" />
                       
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-2xl text-[#FCFCFC]">Jamshed ALI</p>
                                <p className="text-[#9B9FAF]">Frontend-Developer</p>


                            </div>

                            <div className="flex p-2 rounded-lg bg-[#8523a846] gap-2 ">
                                <a href="www.linkedin.com/in/jamsheed-ali-frontend-developer" target="blank" className=""><img src={linkk} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>
                                <a href="https://x.com/jamsheedwolf"  target="blank" className=""><img src={tw} alt="" className="transition-all hover:scale-110 duration-300 delay-150" /></a>


                            </div>
                        </div>


                    </div>
                   



                </div>



            </div>




        </div>
    )
}

export default Team