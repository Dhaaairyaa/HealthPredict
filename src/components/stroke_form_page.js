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
        <div style={backgroundImageStyle} className="flex flex-col justify-center items-center  ">
            <div className="w-[80%] border-md mx-auto rounded-xl p-20" >
                <Strokeform></Strokeform>
            </div>
        </div>
    )
}

export default StrokeFormPage;