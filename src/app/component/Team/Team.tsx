import React from "react";
import { TeamCard } from "./TeamCard";
const Team = () => {
    return (
        <div className="pt-[8rem] pb-[3rem]">
            <h1 className="heading">
                MEET Our expert <span className="text-red-600">Chefs</span>
            </h1>
            <div className="mt-[5rem] w-[80%] mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                {/* Team Card    */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
                <TeamCard
                    image="/images/t1.jpg"
                    name="Jacob"
                    position=" Kitchen Porter"
                />
                </div>
               <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
               <TeamCard
                    image="/images/t2.jpg"
                    name=" Charlotte"
                    position=" Executive Chef"
                />
               </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="600">
                <TeamCard image="/images/t3.jpg" name=" Ethan" position=" Head Chef" />
                </div>
            </div>
        </div>
    );
};

export default Team;

// /
