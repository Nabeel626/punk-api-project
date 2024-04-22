import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import BeerCardsContainer from './components/MainContent/BeerCards/BeerCardsContainer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import beers from './Data/beers';
import Home from './components/MainContent/Home/Home';

function App() {

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
              <BeerCardsContainer beers={beers} />
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
