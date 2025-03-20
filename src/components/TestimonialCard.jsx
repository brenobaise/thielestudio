import React from "react";

function TestimonialCard({
    img = "/nobg-logo.png",
    content = "", }) {
    return (
        <>
            <div className="flex flex-col mt-10 pt-10 items-center sm:min-w-[200px] ">
                <img src={img} className="w-30 object-contain " alt="Hair Treatment" />
                <div className="flex flex-col p-6 " >
                    <p className="mb-2 font-outfit tracking-wider  text-gray-400 lg:mb-4 lg:text-xl ">
                        {content}
                    </p>
                </div>
            </div >
        </>
    )
}
export default TestimonialCard