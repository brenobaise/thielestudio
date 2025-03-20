import React from "react";

function HorizontalCard({
    reverse = false,
    title = "No title",
    text = "no text" }) {
    return (
        <a href="#" className={`flex flex-col mt-10  ${reverse ? "flex-row-reverse" : "flex-row"}`}>
            <img src="/nobg-logo.png" className="w-50 object-contain" alt="Hair Treatment" />
            <div className="flex flex-col p-6 lg:w-[800px]">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white lg:mb-4 lg:text-4xl">{title}</h5>
                <p className="mb-2 font-normal  text-gray-400 lg:mb-4 lg:text-xl ">
                    {text}
                </p>
            </div>
        </a>
    );
}

export default HorizontalCard;