import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Card = ({ data }) => {
    const { Title, Aim, Model, btn_data, image,url } = data;
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`relative w-auto h-auto bg-[#ceece6]  text-black p-4 rounded-lg transition-transform ${isHovered ? 'transform scale-110' : ''
                } flex flex-col items-center space-y-3 shadow-2xl shadow-blue-500/20`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={image} alt={Title} className="w-98 h-48 rounded-t-lg" />

            <h1 className={`text-center text-[25px] pb-2 underline ${isHovered ? 'text-[#2a4d40]' : 'text-[#000000]'}`}>
                {Title}
            </h1>
            <p className="text-center text-[20px]"><span className={`${isHovered ? 'text-[#000000]' : 'text-[#000000]'}`}>Need : </span>{Aim}</p>
            <p className="mt-2 text-grey text-center text-[20px]"><span className={`${isHovered ? 'text-[#]' : 'text-[#000000]'}`}>Approach Used : </span>{Model}</p>
            <Link to={url} className=" mt-10 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-[#77d5ca] rounded-full hover:text-white group hover:bg-[#77d5ca]">
                <span className="absolute left-0 block w-full h-0 transition-all bg-[#77d5ca] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative">{btn_data}</span>
            </Link >

            <div className="h-[30px]"></div>
        </div>
    );
};
export default Card;


