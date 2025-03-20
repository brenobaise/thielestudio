import React from "react";
function Footer() {
    return (
        <footer className="flex justify-between items-center m-10 ">
            <div className="mt-10 p-6 w-full">
                <hr className="border-1 border-accent opacity-10 mb-10" />
                <div className="flex flex-row items-center justify-between space-x-20 md:flex md:justify-center">
                    <img src="nobg-logo.png" className="w-32 object-cover  " alt="Thiele's Studio logo" />
                    <ul className="flex flex-col text-accent text-light">
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                    <div className="flex flex-col space-y-2 md:flex md:flex-row md:space-x-4 md:p-6">
                        <a href="">
                            <img src="/instagram.svg" className="w-10 md:w-10" alt="Instagram Logo" />
                        </a>
                        <a href="http://">
                            <img src="/facebook.svg" className="w-10 md:w-10" alt="Facebook Logo" />
                        </a>
                        <a href="http://">
                            <img src="/wpp.svg" className="w-10 md:w-10" alt="Whatsapp Logo" />

                        </a>
                    </div>

                </div>


            </div>
        </footer>
    )
}

export default Footer