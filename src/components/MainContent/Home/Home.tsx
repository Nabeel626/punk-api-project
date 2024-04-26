import "./Home.scss";

const Home = () => {
  
  const beerimage = new URL("./src/assets/beerImage/png", import.meta.url).href;
  
  return (
    <div className="welcome">
      <h2 className="welcome__heading">WELCOME TO THE BEER BREWERY APP</h2>

      <h2 className="welcome__heading--description">This App can help in filtering Beers to 
      find the perfect type and certain ranges. Click the Beers tab in the navigation bar
      to get started. </h2>
      
      <img className="welcome__image" src={beerimage}/>
    </div>
  )
}

export default Home;