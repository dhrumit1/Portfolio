function Footer() {
    return (
        <>
        <div className="py-5 bg-gray-100 px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center md:justify-between text-center md:text-left space-y-3 md:space-y-0">
                
                {/* Left Section */}
                <div>
                    <p className="text-sm">
                        &copy; 2023 Dhrumit Parmar <span>All Rights Reserved</span>
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-5 text-sm text-gray-800">
                    <a className="hover:underline cursor-pointer">About</a>
                    <a className="hover:underline cursor-pointer">Privacy Policy</a>
                    <a className="hover:underline cursor-pointer">Licensing</a>
                    <a className="hover:underline cursor-pointer">Contact</a>
                </div>

            </div>
        </div>
        </>
    );
}  

export default Footer;