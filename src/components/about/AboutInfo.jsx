import AboutInfoItem from './AboutInfoItem';

const AboutInfo = () => {
    return(
        <div className="w-35p">
            <div className="flex justify-center mb-2 text-3xl text-orange font-medium">Profile</div>
            <AboutInfoItem title="Age" content={[20]}/>
            <AboutInfoItem title="E-Mail" content={["clement.herbin@hotmail.com"]}/>
            <AboutInfoItem title="City" content={["Lille"]}/>
            <AboutInfoItem title="Languages" content={["Frensh - C2", "English - B1", "Spanish - A2"]}/>
        </div>
    );
};

export default AboutInfo;