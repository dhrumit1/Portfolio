function Footer() {
    return (
        <>
        <div className="py-5 bg-gray-100 flex justify-between px-72">
            <div>
                <p>@2023 Dhrumit Pamar <span>All Rights Reserved</span></p>
            </div>
            <div className="space-x-5">
                <a className="hover:underline">About</a>
                <a className="hover:underline">Privacy Policy</a>
                <a className="hover:underline">Licensing</a>
                <a className="hover:underline">Contact</a>
            </div>
        </div>
        </>
    );
}  

export default Footer;