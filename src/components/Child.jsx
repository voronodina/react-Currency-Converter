import React from "react";
const Child = (props) => {
    
    return(
        <div>
            <div>
                <h2>{props.alut.buy * props.name} {props.alut.base_ccy}</h2>
                <hr/>
                <h2>{props.alut.sale* props.name} {props.alut.base_ccy}</h2>
                <hr/>
            </div>
           
        </div>
    )
}

export default Child;