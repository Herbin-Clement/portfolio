import { Children, cloneElement } from "react";

import BoldText from "../util/BoldText";

const ResumeItem = ({place, date, resume, children}) => {
    let c = Children.toArray(children);
    return(
        <div className="mb-10 text-white">
            {c.shift()}
            <div className="flex mb-2 text-xl">
                <div className="pr-4 border-r border-orange"><BoldText text={place}/></div>
                <div className="pl-4 ">{date}</div>
            </div>
            {c}
        </div>
    );
};

export default ResumeItem;