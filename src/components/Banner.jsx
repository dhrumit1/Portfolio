import { useEffect, useRef } from "react";
import bannerImg from "../assets/images/Banner.png";
import Typed from "typed.js";

function Banner() {

    const el = useRef(null);
    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

    return (
        <div className="main-container flex items-center mt-5">
            {/* text */}
            <div className="w-full flex justify-center">
                <div className="w-2/3 ms-10">
                    <h3 className="text-2xl font-semibold">Hi, I am</h3>
                    <h1 className="mt-2 text-3xl font-bold">Dhrumit Parmar</h1>
                    <h2 className="mt-2 text-1xl font-semibold"><span ref={el}></span></h2>
                    <p className="mt-2">
                        A dedicated and detail-oriented Software Developer with expertise in
                         ASP.NET MVC, Oracle SQL, and Python. Skilled in designing and building
                       robust web applications, with additional experience in ASP.NET and PHP
                        Laravel.
                    </p>
                    <div className="icons-container mt-2 space-x-6 flex">
                        <a className="w-10 h-10 cursor-pointer hover:bg-amber-400 rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-2xl text-white fa-github"></i>
                        </a>
                        <a className="w-10 h-10 cursor-pointer hover:bg-amber-400 rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-2xl text-white fa-linkedin"></i>
                        </a>
                        <a className="w-10 h-10 cursor-pointer hover:bg-amber-400 rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-brands text-2xl text-white fa-hackerrank"></i>
                        </a>
                        <a className="w-10 h-10 cursor-pointer hover:bg-amber-400 rounded-full flex justify-center items-center bg-gray-800">
                            <i className="fa-solid text-2xl text-white fa-phone"></i>
                        </a>    
                    </div>
                    <br />
                    <a className="px-4 py-2 cusror-pointer hover:bg-amber-400 bg-orange-500 shadow-lg rounded-full" href="/downloadCv">Download CV</a>
                </div>
            </div>
            {/* image */}
            <div className="w-full flex justify-center">
                <img className="rounded-full shadow-lg w-fit" src={bannerImg} alt="Dhrumit" />
            </div>
        </div>
    );
}

export default Banner;