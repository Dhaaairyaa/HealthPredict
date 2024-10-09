import TumorTissueAnalysis from "./tumorTissueAnalysis"
import bg_img from "../assets/bg.jpg";
const backgroundImageStyle = {
    backgroundImage: `url(${bg_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
};

const tumorTissuePage = () => {
    return (
        <div style={backgroundImageStyle} className="flex flex-col justify-center items-center  ">
            <div className="w-[80%] border-md mx-auto rounded-xl p-20" >
                <TumorTissueAnalysis></TumorTissueAnalysis>
            </div>
        </div>
    )
}

export default tumorTissuePage;