function Skills() {

    const skills = [
    "Asp.Net Mvc",
    "C#",
    "Python",
    "PHP Laravel",
    "Oracle SQL",
    "HTML",
    "CSS",
    "JavaScript",
  ];

    return (
        <>
        <div id="skills" className="main-container mt-10 mb-10 px-6 md:px-16">

            <h1 className="text-3xl md:text-4xl pb-10 font-bold text-center">
                Skills
            </h1>

            {/* <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-300 hover:bg-amber-400 font-semibold rounded-full px-4 py-2 md:px-6 md:py-3 flex justify-center items-center text-sm md:text-base">
                        {skill}
                    </div>
                ))}
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-stretch">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-300 hover:bg-amber-400 font-semibold rounded-full px-4 py-2 md:px-6 md:py-3 flex justify-center items-center text-sm md:text-base">
                    {skill}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Skills;