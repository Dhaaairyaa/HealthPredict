import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="bg-[#1b1818] h-[150px] text-white">
            <div className="flex items-center justify-between ml-[30px] text-[30px]">
                <div>
                    <Link to="/">HealthPredict</Link>
                </div>
                <div className="m-[50px] text-white text-[25px]">
                    <Link to="/" className="m-[20px]">About Us</Link>
                    <Link to="/" className="m-[20px]">Motto</Link>
                    <a href="mailto:dominic333sas@gmail.com" className="m-[20px]">Connect</a>
                    <Link to="/" className="m-[20px]">Services</Link>
                </div>
            </div>

        </div>
    );
};
export default Navbar;
