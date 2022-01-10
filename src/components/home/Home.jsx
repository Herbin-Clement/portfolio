import { Element } from "react-scroll/modules";
import { useSpring, animated } from 'react-spring';

const Home = () => {

    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}, delay: 1000, duration: 2500, config: {duration: 1000} });

    return (
        <div className="flex justify-center items-center flex-col w-100p h-100v bg-sea bg-cover text-white grayscale" id="home">
            <Element name="home"/>
            <animated.div style={props} className="m-6 text-7xl">
                    <span className="font-semibold">Herbin Clément</span>
            </animated.div>
            <animated.div style={props} className="text-xl">
                <span className="font-semibold">Computer Science</span> student at <span className="font-semibold">Lille University</span>
            </animated.div>
        </div>
    );
};

export default Home;