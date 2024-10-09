import bg_img from "../assets/bg.jpg";
import doctor_img from "../assets/doctor.png";
import { useEffect } from "react";
import Typed from 'typed.js';

const Intro = () => {
    useEffect(() => {
        const typeData = new Typed('.role', {
            strings: [
                'Predict Your Health',
                'Protect Your Future',

            ],
            loop: true,
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 1000,
        });

        return () => {
            typeData.destroy();
        };
    }, []);
    const backgroundImageStyle = {
        backgroundImage: `url(${bg_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <div>
            <div style={backgroundImageStyle} className="h-auto flex flex-col items-center justify-center">

                <div className="flex flex-row w-full">

                    <div className="pt-[50px] mr-[40px] flex flex-col space-y-7 w-1/2 justify-center items-center">
                        {/* {cardData.map((item, index) => (
                            <Card key={index} data={item} />
                        ))} */}
                        <img src="https://firebasestorage.googleapis.com/v0/b/healthpredict-pro.appspot.com/o/doctor.png?alt=media&token=4321bf00-4635-426c-be6b-b05a4175a53f"></img>
                    </div>

                    <div className="w-1/2 text-black mt-48">
                        <div className="text-[50px]">
                            <span className="role"></span>
                        </div>
                        <div className="w-1/2">
                            <p className="text-[20px]">Imagine a world where you could know before you fall ill, where proactive steps could shield you from the devastating impact of diseases like stroke, heart attack, or even lung cancer. This isn't science fiction; it's the potential of predictive healthcare, and our website aims to empower you to take charge of your health by predicting potential risks before they turn into full-blown illnesses.</p>
                        </div>
                    
                        <a 
                        href="mailto:dominic333sas@gmail.com"
                        target="blank" className=" mt-10 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black border-2 border-[#77d5ca] rounded-full hover:text-white group hover:bg-[#77d5ca]">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#77d5ca] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Connect</span>
                        </a>
                    </div>

                </div>

                <div className="h-[80px]"></div>
            </div>
        </div>
    );
};

export default Intro;
