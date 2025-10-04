function Projects() {
    return (
        <div className="main-container mt-10 pb-10">
            <h1 className="text-3xl pb-10 font-bold text-center">Projects</h1>
            <div className="project-container space-y-5 flex mt-10 space-x-5 px-10">
                <div className="w-full mh-60 project1 shadow-lg rounded-xl space-y-4 bg-slate-200 p-5 text-center">
                    <h1 className="text-2xl bold-semibold">MADE 4 HOUSE (M4H)</h1>
                    <p>A simple reliable & on demand platform to use almost all kinds of household services.This platform will provide the connection between customer who will book the services & provider who will provide the services.</p>
                    <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 shadow-lg rounded-full bg-orange-500">Check</a>
                </div>
                <div className="w-full mh-60 project2 shadow-lg rounded-xl space-y-4 bg-slate-200 p-5 text-center">
                    <h1 className="text-2xl bold-semibold">Voice Assistant App</h1>
                    <p>Voice assistant app that can perform various tasks using voice commands.</p>
                    <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 shadow-lg rounded-full bg-orange-500">Check</a>
                </div>
                <div className="w-full mh-60 project3 shadow-lg rounded-xl space-y-4 bg-slate-200 p-5 text-center">
                    <h1 className="text-2xl bold-semibold">Expense Tracker</h1>
                    <p>An Expense Tracker App is a software application designed to assist users in monitoring, recording, and managing their financial expenditures.</p>
                    <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 shadow-lg rounded-full bg-orange-500">Check</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;