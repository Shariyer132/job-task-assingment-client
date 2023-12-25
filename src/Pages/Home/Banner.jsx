import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    const handleViewTaskPage = () =>{
        navigate('/TaskManagementHome')
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-6xl font-bold">One app to replace them all</h1>
                    <h4 className="pt-6 text-2xl font-bold">Get everyone working in a single platform</h4>
                    <p className="font-semibold text-xl pb-6">designed to manage any type of work.</p>
                    <button onClick={handleViewTaskPage} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;