import React from "react";
const ChildHed = (props) => {
    
    return(
        <div>
            <div className="block">
                <div className="fron">
                <p>{props.alut.txt} ({props.alut.cc}) </p>
                </div>
                
                <div className="bec">
                {props.alut.rate}
                </div>
            </div>
        </div>
    )
}

export default ChildHed;