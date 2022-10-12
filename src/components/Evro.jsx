import React, { useState } from "react";
import Child from './Child'
import Myinput from "./input/input";
const Evro = (props) => {
    const [name, setName] = useState(1)

  const handleChange = (valuee) => {
    setName(valuee)
  }
  return (
        <div> <span>Євро: {name || '<введіть число>'}</span>

                <Myinput onChange={handleChange} />
                <div> 

                {props.copi.map((alut) => 
                    <Child name={name} alut={alut} key={alut.id}/>)}
                
                </div>
                
        </div>
    );
};

export default Evro;