import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner";
import CustomerSection from "./CustomerSection";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <div className="my-10">
            <CustomerSection/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;