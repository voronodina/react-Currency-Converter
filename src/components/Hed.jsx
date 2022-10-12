import '../App.css';
import React from "react";
import ChildHed from './ChildHed'
const Hed = (props) => {

  return (
        <div>
                <div className="hedpos"> 
                {props.data.map((alut) => 
                    <ChildHed alut={alut} key={alut.id}/>)}
                
                </div>
                
        </div>
    );
};

export default Hed;