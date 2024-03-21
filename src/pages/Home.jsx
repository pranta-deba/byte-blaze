import Hero from "../components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <Hero/>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;