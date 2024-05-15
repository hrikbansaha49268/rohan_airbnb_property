import { Link, useSearchParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import Hero from "../components/KYPComps/Hero";
import Description from "../components/KYPComps/Description";
import PropertyView from "../components/KYPComps/PropertyView";
import Restrictions from "../components/KYPComps/Restrictions";
import FacilitiesAvailed from "../components/KYPComps/FacilitiesAvailed";
import TouristPlaces from "../components/KYPComps/TouristPlaces";
import MapLocation from "../components/KYPComps/MapLocation";
import { useEffect } from "react";

export default function KnowYourPlace() {

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.size > 0) {
            let elem = document.getElementById(searchParams.get("section"));
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <main className="flex flex-col gap-y-32 mb-32">
            <div className="flex flex-col gap-y-16">
                <div className="container mx-auto">
                    <Link
                        to="/"
                        className="goHomeBtn flex gap-x-2 items-center font-inter text-base font-normal text-[#5e5e5e] border-2 text-center justify-center w-32 h-10 rounded-md mt-16
                     hover:bg-[#5e5e5e] hover:text-white peer duration-300 ease-in-out hover:scale-105">
                        <IconContext.Provider value={{ color: "#5e5e5e", className: "left-arrow" }}>
                            <FaArrowLeft size={16} />
                        </IconContext.Provider>
                        Home
                    </Link>
                </div>
                <Hero />
            </div>
            <Description />
            <PropertyView />
            <Restrictions />
            <FacilitiesAvailed />
            <TouristPlaces />
            <MapLocation />
        </main>
    )
};