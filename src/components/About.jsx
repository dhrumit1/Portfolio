import codeImg from "../assets/images/code.png";

function About() {
    return (
        <>
            <div className="main-container mt-10 pb-10 bg-gray-100">
                <h1 className="text-3xl pb-10 font-bold text-center">About Me</h1>
                <div className="flex items-center">
                    <div className="w-full flex justify-center">
                        <img className="w-fit" src={codeImg} alt="Dhrumit"></img>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="space-y-4 w-2/3">
                            <h1 className="text-2xl font-semibold">Web Devloper</h1>
                        <p>Proficient in Oracle databases, with hands-on experience in creating
 and managing functions, triggers, procedures, cursors, packages, and
 handling exceptions.</p>
                        <p>Currently contributing to innovative projects at Acty System India
 Pvt. Ltd., driven by a passion for problem-solving and continuous skill
 development.</p>
                        <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 bg-orange-500 shadow-lg rounded-full">Read More..</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default About;