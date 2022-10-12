import React, { useState } from 'react';
import Select from 'react-select'


 function Cantor() {
    const [options, setOption]= useState()
  return(
    <div>
        
    <select options={options}  onChange={e=>setOption(e.target.value)}>
        <option>USD</option>
        <option>EUR</option>
        <option>BTC</option>
    </select>   
    </div>
  );
}
export default Cantor;