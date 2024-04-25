import { useParams } from "react-router-dom";
import { Beer } from "../../../Data/types";
import "./BeerCards.scss";

type BeerData = {
    beers: Beer[];
};

const BeerCardsInfo = ({ beers } : BeerData) => {
    
    const {beerId} = useParams();
    const beer = beers.find((beer) => beer.id === Number(beerId));

    return (
        
        <article className="beer-info">

            <div className="beer-info__information">
                
                <div className="beer-info__images">
                    <img src={beer?.image_url ?? undefined} alt={beer?.name} className="beer-info__image"/>
                </div>

                <h2 className="beer-info__information--heading">{beer?.name}</h2><br/>
                <h2 className="beer-info__information--tagline">{beer?.tagline}</h2><br/><br/><br/>
                <h2 className="beer-info__information--description">{`Description: ${beer?.description}`}</h2><br/><br/>
                <h2 className="beer-info__information--filter1">{`Brewers Tips: ${beer?.brewers_tips}`}</h2><br/><br/>
                <h2 className="beer-info__information--filter2">{`First Brewed: ${beer?.first_brewed}`}</h2><br/>
                <h2 className="beer-info__information--filter3">{`Boil Volume: ${beer?.boil_volume.value} ${beer?.boil_volume.unit}`}</h2><br/>
                <h2 className="beer-info__information--filter4">{`ABV: ${beer?.abv} IBU: ${beer?.ibu} pH: ${beer?.ph}`}</h2><br/><br/>
            </div>

        </article>
    )
}

export default BeerCardsInfo;