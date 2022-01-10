import { Element } from "react-scroll/modules";
import { useSpring, animated } from 'react-spring';

import './home.css';

const Home = () => {

    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}, delay: 1000, config: {duration: 1000} });

    return (
        <div className="home" id="home">
            <Element name="home"/>
            <animated.div style={props} className="name">
                    <span className="font-semibold">Herbin Clément</span>
            </animated.div>
            <animated.div style={props} className="description">
                <span className="font-semibold">Computer Science</span> student at <span className="font-semibold">Lille University</span>
            </animated.div>
        </div>
    );
};

export default Home;