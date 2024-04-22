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
  const [checkABVBoolean, setABVCheckBoolean] = useState<boolean>(false);
  const [checkRangeBoolean, setCheckRangeBoolean] = useState<boolean>(false);

  const getUsers = async (checkABVBoolean: boolean, checkRangeBoolean: boolean) => {   

    if(checkABVBoolean === true) {
      url += `&abv_gt=6`;
      console.log(url);
    } else {
      console.log("NOTHING");
    }

    if(checkRangeBoolean === true) {
      url += `&brewed_before=2010`;
      console.log(url);
    } else {
      console.log("NOTHING");
    }

    const res = await fetch(url);
    const data: Beer[] = await res.json();

    setCheckBeers(data);
  };

  useEffect(() => {
    getUsers(checkABVBoolean, checkRangeBoolean);
  },[checkABVBoolean, checkRangeBoolean]);

  const onChangeRadio = (event : ChangeEvent<HTMLInputElement>) => {
    let radioCheck = Boolean(event.currentTarget.value);
    let radioCheck2 = Boolean(event.currentTarget.value);
    
    if(checkABVBoolean === true) {
        radioCheck = false;
        radioCheck2 = true;     

    } else if(checkRangeBoolean === true) {
        radioCheck = true;
        radioCheck2 = false; 

    } else {
        radioCheck = true;
        radioCheck2 = true; 
    }
    
    setCheckRangeBoolean(radioCheck2)
    setABVCheckBoolean(radioCheck);
    console.log(checkABVBoolean);
    console.log(checkRangeBoolean);
    
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
              <RadioSearchBox selected={checkABVBoolean || checkRangeBoolean} onChange={onChangeRadio} />
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
