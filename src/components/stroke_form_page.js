import Strokeform from "./stroke_form"
import bg_img from "../assets/bg.jpg";
const backgroundImageStyle = {
    backgroundImage: `url(${bg_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
};

const StrokeFormPage = () => {
    return (
        <div style={backgroundImageStyle} className="flex flex-col justify-center items-center pt-20 pb-20 bg-">
            <div className="w-auto border-md mx-auto rounded-xl bg-slate-500 p-20" >
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
                    Don't Worry just say All is Well !!!
                </h4>
                <Strokeform></Strokeform>
            </div>
        </div>
    )
}

export default StrokeFormPage;