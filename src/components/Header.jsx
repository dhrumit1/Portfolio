import { useState } from "react";
import { Link } from "react-scroll";

function Header() {
    const [brandName, setBrandName] = useState("Dhrumit Parmar");
    const [menuOpen, setMenuOpen] = useState(false);
    const menulinks = [
                        { title: "Home", link: "home", id: 1 },
                        { title: "About", link: "about", id: 2 },
                        { title: "Skills", link: "skills", id: 3 },
                        { title: "Projects", link: "project", id: 4 },
                        { title: "Contact", link: "contact", id: 5 },
                    ];

    return (
        <>

        <div className="main fixed top-0 left-0 w-full h-15 flex justify-between items-center px-6 md:px-16 bg-gray-100 shadow-md z-50">
            {/* Brand Name */}
            <div>
                <h1 className="text-2xl font-bold">{brandName}</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                {menulinks.map((link) => (
                    <Link to={link.link} smooth={true} duration={500} spy={true} offset={-70} activeClass="text-orange-600" key={link.id} className="hover:text-orange-600 cursor-pointer">
                        {link.title}
                    </Link>                    
                ))}
            </div>
        
            {/* User Icon button */}
            <div className="hidden md:block">
                <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 bg-orange-500 shadow rounded-full">
                    <i className="fa-solid text-1xl text-white fa-user"></i>
                </a> 
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="fixed top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-40">
                {menulinks.map((link) => (
                    <Link key={link.id} to={link.link} smooth={true} duration={500} spy={true} offset={-70} activeClass="text-orange-600" className="hover:text-orange-600 cursor-pointer text-lg" onClick={() => setMenuOpen(false)} >
                        {link.title}
                    </Link>
                ))}
                <a className="px-4 py-2 cursor-pointer hover:bg-amber-400 bg-orange-500 shadow rounded-full">
                    <i className="fa-solid text-1xl text-white fa-user"></i>
                </a>
            </div>
        )}

        </>
   );
}

export default Header;