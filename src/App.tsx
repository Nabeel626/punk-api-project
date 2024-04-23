import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import BeerCardsContainer from './components/MainContent/BeerCards/BeerCardsContainer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Home from './components/MainContent/Home/Home';
import { ChangeEvent, useEffect, useState } from 'react';
import { Beer } from './Data/types';
import RadioSearchBox from './components/MainContent/SearchBox/RadioSearchBox';

function App() {

  let url = `http://localhost:3333/v2/beers/?`;

  const [checkBeers, setCheckBeers] = useState<Beer[]>([]);

  let [checkABV, setCheckABV] = useState<boolean>(false);
  let [checkRange, setCheckRange] = useState<boolean>(false);
  let [checkAcidity, setCheckAcidity] = useState<boolean>(false);

  const getUsers = async (checkABV: boolean, checkRange: boolean) => {   

    if(checkABV === true && checkRange === false) {
      url += `abv_gt=6`;
    } 
    
    if (checkRange === true && checkABV === false) {
      url += `&brewed_before=12-2009`;
    }

    const res = await fetch(url);
    const data: Beer[] = await res.json();

    setCheckBeers(data);
  };

  useEffect(() => {
    getUsers(checkABV, checkRange);
  },[checkABV, checkRange]);

  const onChangeABV = (event : ChangeEvent<HTMLInputElement>) => {    
    let radioCheck = event.currentTarget.checked;
    
    if(radioCheck === true) {
      checkABV = true;
      console.log(checkABV);
      
    } else {
      checkABV = false;
      console.log(checkABV);
    }
    
      setCheckABV(radioCheck);
  }

  
  const onChangeRange = (event : ChangeEvent<HTMLInputElement>) => {    
    let radioCheck = event.currentTarget.checked;
    
    if(radioCheck === true) {
      checkRange = true;
      console.log(checkRange);
      
    } else {
      checkRange = false;
      console.log(checkRange);
    }
    
    setCheckRange(radioCheck);
  }

  
  const onChangeAcidity = (event : ChangeEvent<HTMLInputElement>) => {    
    let radioCheck = event.currentTarget.checked;
    
    if(radioCheck === true) {
      checkAcidity = true;
      console.log(checkAcidity);
      
    } else {
      checkAcidity = false;
      console.log(checkAcidity);
    }
    
    setCheckAcidity(radioCheck);
  }

  return (
    <>
      <BrowserRouter>

        <section>
          <NavigationMenu />
        </section>
        
        <Routes>
          
          <Route path='/' element={<Home />} />

          <Route path='/beers' element={
            <section className='beer-cards'>
              <RadioSearchBox  onChange={onChangeABV} label={'High ABV (> 6%)'} selected={checkABV} />
              <RadioSearchBox  onChange={onChangeRange} label={'Classic Range'} selected={checkRange}/>
              <RadioSearchBox  onChange={onChangeAcidity} label={'Avidic pH (< 4)'} selected={checkAcidity}/>
              <BeerCardsContainer beers={checkBeers} />
            </section>} 
          />

        </Routes>

      </BrowserRouter>
      {/* <div className="background-container">

        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>    */}
    </>
  )
}

export default App;
