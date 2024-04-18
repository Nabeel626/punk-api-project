import "./BeerCards.scss"
import { Beer } from "../../../Data/types";

type BeerData = {
    image: string;
    name: string;
    tagline: string;
    beers: Beer[];
    desciption: string;
};

const BeerCards = ({ image, name, tagline, beers, desciption } : BeerData) => {
  
    return (
        <div className="beerCard__container">
            <img className="beerCard__image" src={image} alt="Beer Bottle"/>
            <h2 className="beerCard__name">{name}</h2>
            <h4 className="beerCard__tagline">{tagline}</h4>
            <hr className="beerCard__splitter"/>
            <p className="beerCard__desc">{desciption} </p>
        </div>
    )
}

export default BeerCards;