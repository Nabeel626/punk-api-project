import "./BeerCards.scss"
import { Beer } from "../../../Data/types";

type BeerData = {
    image: string;
    name: string;
    beers: Beer[];
};

const BeerCards = ({ image, name, beers} : BeerData) => {

    beers = [];

    return (
        <div className="beerCard__container">
            <img className="beerCard__image" src={image} alt="Beer Bottle"/>
            <h2 className="beerCard__name">{name}</h2>
        </div>
    )
}

export default BeerCards;