import { cardData } from "../assets/card_data"
import Card from "./cards"
const Services = () => {
    return (
        <div className="bg-[#1b1818] pt-10 h-auto">

            <h1 className="text-center text-white text-5xl">Our Services</h1>
            <div className=" flex space-x-28 m-20">
                {cardData.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
            <div className="h-14"></div>
        </div>
    )
}
export default Services;