import "./Home.scss";

const Home = () => {
  return (
    <div className="welcome">
      <h2 className="welcome__heading">WELCOME TO THE BEER BREWERY APP</h2>

      <h2 className="welcome__heading--description">This App can help in filtering Beers to 
      find the perfect type and certain ranges. Click the Beers tab in the navigation bar
      to get started. </h2>
      
      <img className="welcome__image" src="./src/assets/beerImage.png"/>
    </div>
  )
}

export default Home;