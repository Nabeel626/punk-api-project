import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import BeerCardsContainer from './components/MainContent/BeerCards/BeerCardsContainer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Home from './components/MainContent/Home/Home';
import { ChangeEvent, useEffect, useState } from 'react';
import { Beer } from './Data/types';
import RadioSearchBox from './components/MainContent/SearchBox/RadioSearchBox';

function App() {

  let url = `http://localhost:3333/v2/beers/?&per_page=80`;

  const [checkBeers, setCheckBeers] = useState<Beer[]>([]);

  let [checkABV, setCheckABV] = useState<boolean>(false);
  let [checkRange, setCheckRange] = useState<boolean>(false);
  let [checkAcidity, setCheckAcidity] = useState<boolean>(false);
  let [checkAll, setCheckAll] = useState<boolean>(true);

  const getUsers = async (checkABV: boolean, checkRange: boolean, checkAcidity: boolean, checkAll: boolean) => {   

    if(checkAll) {

      if(checkABV) {
        url +=  `&abv_gt=6`;
      }
  
      if (checkRange) {
        url += `&brewed_before=12-2009`;
      } 
  
      const res = await fetch(url);
      const data: Beer[] = await res.json();
  
      if(checkAcidity) {
        
        const filteredsearch = data.filter((user) => {
  
          if(user.ph < 4) {
            return user.ph;
          }
        });
  
        setCheckBeers(filteredsearch);
      } else {  
        setCheckBeers(data);
      }

    } else {
      setCheckBeers([]);
    }

  };

  useEffect(() => {
    getUsers(checkABV, checkRange, checkAcidity, checkAll);
  },[checkABV, checkRange, checkAcidity, checkAll]);

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

  const onChangeAll = (event : ChangeEvent<HTMLInputElement>) => {    
    let radioCheck = event.currentTarget.checked;
    
    if(radioCheck === true) {
      checkAll = true;
      console.log(checkAll);
      
    } else {
      checkAll = false;
      console.log(checkAll);
    }
    
    setCheckAll(radioCheck);
  }

  return (
    <>
      <BrowserRouter>

        <section>
          <div className="background__graphic"></div>
          <div className="background__graphic background__graphic--vector1"></div>
          <div className="background__graphic background__graphic--vector2"></div>
        </section>

        <section>
          <NavigationMenu />
        </section>
        
        <Routes>
          
          <Route path='/' element={<Home />} />

          <Route path='/beers' element={
            
            <><section className='checkbox__filter'>
              <RadioSearchBox onChange={onChangeABV} label={'High ABV (> 6%)'} selected={checkABV} />
              <RadioSearchBox onChange={onChangeRange} label={'Classic Range'} selected={checkRange} />
              <RadioSearchBox onChange={onChangeAcidity} label={'Acidic pH (< 4)'} selected={checkAcidity} />
              <RadioSearchBox onChange={onChangeAll} label={'Select All'} selected={checkAll} />
            </section>

            <section className='beer-cards'>
                <BeerCardsContainer beers={checkBeers} />
            </section></>} />

        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App;
