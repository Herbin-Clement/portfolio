import BoldText from "../util/BoldText";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col w-100p h-100v bg-sea bg-cover text-white">
            <div className="m-6 text-7xl">
                <BoldText text={"Herbin Clément"}/>
            </div>
            <div className="text-xl">
                <BoldText text={"Computer Science"}/> student at <BoldText text={"Lille University"}/>
            </div>
        </div>
    );
};

export default Home;