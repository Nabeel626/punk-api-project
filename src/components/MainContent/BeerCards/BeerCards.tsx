import "./BeerCards.scss"
import { Beer } from "../../../Data/types";

type BeerData = {
    image: string;
    name: string;
    beers: Beer[];
    desciption: string;
};

const BeerCards = ({ image, name, beers, desciption } : BeerData) => {
  
    beers = [];

    return (
        <div className="beerCard__container">
            <img className="beerCard__image" src={image} alt="Beer Bottle"/>
            
            <h2 className="beerCard__name">{name}</h2>
            <hr className="beerCard__splitter"/>
            
            <p className="beerCard__desc">{desciption} </p>
        </div>
    )
}

export default BeerCards;