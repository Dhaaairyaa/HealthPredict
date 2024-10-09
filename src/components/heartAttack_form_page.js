import HeartAttackForm from "./HeartAttackForm"
import bg_img from "../assets/bg.jpg";
const backgroundImageStyle = {
    backgroundImage: `url(${bg_img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
};

const heartAttack_form_page = () => {
    return (
        <div style={backgroundImageStyle} className="flex flex-col justify-center items-center  ">
            <div className="w-[80%] border-md mx-auto rounded-xl p-20" >
                <HeartAttackForm></HeartAttackForm>
            </div>
        </div>
    )
}

export default heartAttack_form_page;