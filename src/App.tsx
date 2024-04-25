import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import BeerCardsContainer from './components/MainContent/BeerCards/BeerCardsContainer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Home from './components/MainContent/Home/Home';
import { ChangeEvent, useEffect, useState } from 'react';
import { Beer } from './Data/types';
import RadioSearchBox from './components/MainContent/SearchBox/RadioSearchBox';
import BeerCardsInfo from './components/MainContent/BeerCards/BeerCardsInfo';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function App() {

  let url = `http://localhost:3333/v2/beers/?&per_page=80`;

  const [checkBeers, setCheckBeers] = useState<Beer[]>([]);
  const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

  let [checkABV, setCheckABV] = useState<boolean>(false);
  let [checkRange, setCheckRange] = useState<boolean>(false);
  let [checkAcidity, setCheckAcidity] = useState<boolean>(false);
  let [checkAll, setCheckAll] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(1);

  const handleIncrement = () => {
      if (counter === 5 || counter > 5) {
        setCounter(5);
      } else {
        setCounter(counter + 1);
      }
  };

  const handleDecrement = () => {
      if (counter === 1 || counter < 1) {
          setCounter(1);
        } else {
          setCounter(counter - 1);
      }
  };

  const getUsers = async (checkABV: boolean, checkRange: boolean, checkAcidity: boolean, checkAll: boolean, counter : number) => {   

    if(checkAll) {
      
      if(counter > 0 && counter <= 5) {
        url +=  `&page=${counter}`;
      }

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
    getUsers(checkABV, checkRange, checkAcidity, checkAll, counter);

    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });

  },[checkABV, checkRange, checkAcidity, checkAll, counter]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

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

        <section className='navigationMenu'>
          <NavigationMenu />
        </section>
        
        <Routes>
          
          <Route path='/' element={<Home />} />

          <Route path='/beers' element={
            <><section className='pagination'>
              <button className="pagination__decrement" aria-label="Navigate left" onClick={handleDecrement}><FaArrowLeft /></button>
              <h2 className='pagination__showPageNumber'>{"Page " + counter}</h2>
              <button className="pagination__increment" aria-label="Navigate right" onClick={handleIncrement}><FaArrowRight /></button>
            </section>

            <section className='checkbox__filter'>
              <RadioSearchBox onChange={onChangeABV} label={'High ABV (> 6%)'} selected={checkABV} />
              <RadioSearchBox onChange={onChangeRange} label={'Classic Range'} selected={checkRange} />
              <RadioSearchBox onChange={onChangeAcidity} label={'Acidic pH (< 4)'} selected={checkAcidity} />
              <RadioSearchBox onChange={onChangeAll} label={'Select All'} selected={checkAll} />
            </section>

            <section className='beer-cards'>
              <BeerCardsContainer beers={checkBeers} />
              {backToTopButton && <button className="backToTop" aria-label="Back to Top" onClick={scrollUp}>BACK TO TOP</button>}
            </section></>} />
            
            <Route path="/beers/:beerId" element={<BeerCardsInfo beers={checkBeers} />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
