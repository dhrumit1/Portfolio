import { useState } from "react";

function Header() {
    const [brandName, setBrandName] = useState("Dhrumit Parmar");
    const [menulinks, setMenuLinks] = useState([
        {
            title: "Home",
            link: "/home",
            id: 2,
        },
        {
            title: "About",
            link: "/about",
            id: 3,
        },
        {
            title: "Skills",
            link: "/skills",
            id: 4,
        },
        {
            title: "Projects",
            link: "/project",
            id: 5,
        },
        {
            title: "Contact",
            link: "/contact",
            id: 6,
        },
    ]);

    return (  
        <>
        <div className="main h-15 flex justify-between items-center px-16 bg-gray-100">
            <div>
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>
            <div className="space-x-6">
                {menulinks.map((link) => (
                    <a href={link.link} key={link.id} className="hover:text-orange-600">
                        {link.title}
                    </a>
                ))}
            </div>
            <div>
                <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 bg-orange-500 shadow rounded-full">
                    <i className="fa-solid text-1xl text-white fa-user"></i>
                </a> 
            </div>
        </div>
        </>
   );
}

export default Header;