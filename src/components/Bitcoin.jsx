import React, { useState } from "react";
import Myinput from "./input/input";
import Child from './Child'
const Bitcoin = (props) => {

    const [name, setName] = useState(1)

    const handleChange = (valuee) => {
      setName(valuee)
    }
  return (
        <div> <span>Біткойн: {name || '<введіть число>'} </span>

        <Myinput onChange={handleChange} />
         
                <div> 
                {props.copiBitcoin.map((alut) => 
                    <Child name={name} alut={alut} key={alut.id}/>)}
                
                </div>
                
        </div>
    );
};

export default Bitcoin;