import { FaCalendarAlt, FaPhoneAlt,  } from "react-icons/fa";
import About from "../About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import { FaLocationDot } from "react-icons/fa6";
import Product from "./Product/Product";
import Team from "./Team/Team";
import Customer from "./Coustomer/Customer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br /><br />
            <About></About>
            <Services></Services>
            <br /><br />
            <div className="grid lg:grid-cols-3 gap-5 lg:h-[200px] p-16 text-white bg-black rounded-xl">
                <div className="flex">
                    <p className="text-4xl mt-3"><FaCalendarAlt /></p>
                    <div className="ml-4">
                        <p className="text-xl">We are open monday-friday</p>
                        <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className="flex">
                    <p className="text-4xl mt-3"><FaPhoneAlt /></p>
                    <div className="ml-4">
                        <p className="text-xl">Have a question?</p>
                        <h3 className="text-2xl font-bold">+2546 251 2658</h3>
                    </div>
                </div>
                <div className="flex">
                    <p className="text-4xl mt-3"><FaLocationDot/></p>
                    <div className="ml-4">
                        <p className="text-xl">Need a repair? our address</p>
                        <h3 className="text-2xl font-bold">Liza Street, New York</h3>
                    </div>
                </div>
            </div>
            <br /><br />
            <Product></Product>
            <br /><br />
            <Team></Team>
            <br /><br />
            <Customer></Customer>
            <br /><br />
        </div>
    );
};

export default Home;