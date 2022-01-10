import AboutInfoItem from './AboutInfoItem';

import './about.css';

const AboutInfo = () => {
    return(
        <div className="aboutInfo">
            <div className="aboutTitle">Profile</div>
            <AboutInfoItem title="Age" content={[20]}/>
            <AboutInfoItem title="E-Mail" content={["clement.herbin@hotmail.com"]}/>
            <AboutInfoItem title="City" content={["Lille"]}/>
            <AboutInfoItem title="Languages" content={["Frensh - C2", "English - B1", "Spanish - A2"]}/>
        </div>
    );
};

export default AboutInfo;