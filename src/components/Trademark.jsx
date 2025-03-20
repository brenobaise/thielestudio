import React from "react";
function Trademark() {
    return (
        <div className="w-full text-slate-100 py-2 text-center  text-xs ">
            <p>© {new Date().getFullYear()} <span className="font-bold ">@brenobaise</span>. All rights reserved.</p>
            <p className="mt-2 text-xs">
                Contact for services | <a href="https://yourwebsite.com" className="text-blue-400 hover:underline">Portfolio</a>
            </p>
        </div>
    );
}

export default Trademark