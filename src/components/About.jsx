import codeImg from "../assets/images/code.png";

function About() {
    return (
        <>
            <div id="about" className="main-container mt-10 pb-10 bg-gray-100 px-6 md:px-16">

                {/* Section Title */}
                <h1 className="text-3xl md:text-4xl pb-10 font-bold text-center">
                    About Me
                </h1>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center md:space-x-10">

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                        <img className="w-48 md:w-80 rounded-lg shadow-lg object-cover" src={codeImg} alt="Dhrumit"></img>
                    </div>

                    {/* Text */}
                    <div className="w-full flex justify-center">

                        <div className="space-y-4 w-full md:w-2/3">

                            <h1 className="text-2xl md:text-3xl font-semibold">
                                Web Devloper
                            </h1>

                            <p className="text-sm md:text-base">
                                Proficient in Oracle databases, with hands-on experience in creating
                                and managing functions, triggers, procedures, cursors, packages, and
                                handling exceptions.
                            </p>

                            <p className="text-sm md:text-base">
                                Currently contributing to innovative projects at Acty System India
                                Pvt. Ltd., driven by a passion for problem-solving and continuous
                                skill development.
                            </p>

                            <a className="inline-block px-5 py-2 cursor-pointer text-white hover:bg-amber-400 bg-orange-500 shadow-lg rounded-full text-sm md:text-base font-medium">
                                Read More..
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default About;