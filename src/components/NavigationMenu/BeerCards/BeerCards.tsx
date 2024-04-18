import "./BeerCards.scss"
import { Beer } from "../../../Data/types";

type BeerData = {
    name: string;
    beers: Beer[];
    desciption: string;
};

const BeerCards = ({ name, beers, desciption } : BeerData) => {
  
    return (
        <div className="beerCard__container">
            <h2 className="beerCard__name">{name}</h2>
            <hr className="beerCard__splitter"/>
            <p className="beerCard__desc">{desciption} </p>
        </div>
    )
}

export default BeerCards;