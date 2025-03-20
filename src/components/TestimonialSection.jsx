import React from "react";
import TestimonialCard from "./TestimonialCard";
function TestimonialSection() {
    return (
        <>
            <h2 className="flex items-center justify-center mt-30  text-xl font-lobster  tracking-wider text-white lg:mb-4 lg:text-4xl">Reviews</h2>
            <div className="flex flex-col gap-6  mt-10 p-2 md:flex-row md:w-auto">
                <TestimonialCard content="Something about a review , this will be two or three sentences long" />
                <TestimonialCard content="Something about a review , this will be two or three sentences long" />
                <TestimonialCard content="Something about a review , this will be two or three sentences long" />



            </div>
        </>
    )
}
export default TestimonialSection