import React from "react";

function Header() {
    return (
        <header>
            <div className="flex justify-between items-center">
                <img src="nobg-logo.png" className="w-32 h-auto object-cover md:w-64 md:h-64" alt="Thiele's Studio logo" />
                <nav className="w-full">
                    <ul className="flex justify-end space-x-8 text-accent font-outfit tracking-widest text-lg p-10 sm:text-2xl  lg:justify-end ">
                        <li className=""><a href="#home" >Home</a></li>
                        <li className=""><a href="#about" >Services</a></li>
                        <li className=""><a href="#contact" >Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header