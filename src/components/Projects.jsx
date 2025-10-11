function Projects() {

    const projects = [
    {
      title: "MADE 4 HOUSE (M4H)",
      description:
        "A simple reliable & on-demand platform to use almost all kinds of household services. This platform connects customers with service providers.",
      link: "#",
    },
    {
      title: "Voice Assistant App",
      description:
        "Voice assistant app that can perform various tasks using voice commands.",
      link: "#",
    },
    {
      title: "Expense Tracker",
      description:
        "An Expense Tracker App designed to help users monitor, record, and manage their financial expenditures.",
      link: "#",
    },
  ];

    return (
        <div id="project" className="main-container mt-10 pb-10 px-6 md:px-16">

            <h1 className="text-3xl md:text-4xl pb-10 font-bold text-center">
                Projects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="w-full min-h-[15rem] shadow-lg rounded-xl space-y-4 bg-slate-200 p-5 text-center flex flex-col justify-between">
                    
                        <h2 className="text-2xl font-semibold">
                            {project.title}
                        </h2>

                        <p className="text-sm md:text-base">
                            {project.description}
                        </p>
            
                        <a href={project.link} className="px-4 py-2 cursor-pointer hover:bg-amber-400 shadow-lg rounded-full bg-orange-500 text-white font-medium">
                            Check
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Projects;