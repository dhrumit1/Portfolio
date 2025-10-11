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
        <div id="home" className="main-container flex flex-col-reverse md:flex-row items-center justify-between pt-10 px-4 md:px-8">

            {/* Left Text Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
                <div className="max-w-lg">

                    <h3 className="text-xl md:text-2xl font-semibold">
                        Hi, I am
                    </h3>

                    <h1 className="mt-2 text-3xl md:text-4xl font-bold">
                        Dhrumit Parmar
                    </h1>

                    <h2 className="mt-2 text-lg md:text-1xl font-semibold">
                        <span ref={el}></span>
                    </h2>
                    
                    <p className="mt-2 text-sm md:text-base">
                        A dedicated and detail-oriented Software Developer with expertise in
                        ASP.NET MVC, Oracle SQL, and Python. Skilled in designing and
                        building robust web applications, with additional experience in
                        ASP.NET and PHP Laravel.
                    </p>

                    {/* Social Icons */}
                    <div className="icons-container mt-4 space-x-4 flex flex-wrap justify-start">
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

                    {/* Download CV Button */}
                    <div className="mt-6">
                        <a className="px-5 py-2 text-white cusror-pointer hover:bg-amber-400 bg-orange-500 shadow-lg rounded-full text-sm md:text-base font-medium" href="/downloadCv">
                            Download CV
                        </a>
                    </div>
                    
                </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img className="rounded-full shadow-xl w-56 h-56 md:w-80 md:h-80 object-cover" src={bannerImg} alt="Dhrumit" />
            </div>

        </div>
    );
}

export default Banner;