import Myinput from "./input/input";
import React, { useState } from "react";
import Child from './Child'
const Dolar = (props) => {

    const [name, setName] = useState(1)

    const handleChange = (valuee) => {
      setName(valuee)
    }
  return (
    <div> <span>Долари: {name || '<введіть число>'}</span>

    <Myinput onChange={handleChange} />
    <div> 

    {props.copiDolar.map((alut) => 
        <Child name={name} alut={alut} key={alut.id}/>)}
    
    </div>
    
</div>
    );
};

export default Dolar;