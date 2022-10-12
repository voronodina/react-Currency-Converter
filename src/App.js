import Cantor from './components/cantor/Cantor'
import './App.css';
import Bitcoin from './components/Bitcoin'
import Dolar from './components/Dolar'
import Hed from './components/Hed'
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Evro from './components/Evro'
import Cop from './components/input/Cop'
function App() {
  const [Valutee, setValutee] = useState([])
    useEffect(() => {
        fetchValut()
    }, [])
    async function fetchValut() {
        const valut = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        setValutee(valut.data)
    };
  const [data, setdata] = useState([])  
    useEffect(() => {
      fetchValut1()
  }, [])
    async function fetchValut1() {
      const valut = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      setdata(valut.data)
  };
    const copi = Valutee.slice(1, -1)
    const copiDolar = Valutee.slice(0, -2);
    const copiBitcoin = Valutee.slice(2);
    const copivel = Valutee
  return (
    <div className="App">
      <select>
				{copivel.map((currencyItem) => {
					return <option>{currencyItem.ccy}</option>
				})}
			</select>
      <Hed data={data}/>
      <div className='calc'>
      <Dolar copiDolar={copiDolar}/>
      <Evro copi={copi}/>
      <Bitcoin copiBitcoin={copiBitcoin}/>
      </div>
      <Cantor/>
      <Cop/>
    </div>
  );
}

export default App;
