import { Children, cloneElement } from "react";

import "./resume.css";

const ResumeItem = ({place, date, resume, children}) => {
    let c = Children.toArray(children);
    return(
        <div className="resumeItem">
            {c.shift()}
            <div className="resumeItemContent">
                <div className="resumeItemPlace">{place}</div>
                <div className="resumeItemDate">{date}</div>
            </div>
            {c}
        </div>
    );
};

export default ResumeItem;