import { FormEvent, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import BeerCards from './BeerCards';
import { Beer } from '../../../Data/types';
import { Link} from 'react-router-dom';

type BeerData = {
    beers: Beer[];
};

const BeerCardsContainer = ({ beers } : BeerData) => {
  
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleInput = (event : FormEvent<HTMLInputElement>) => {
        const cleanedInput = event?.currentTarget.value.toLowerCase();
        setSearchTerm(cleanedInput);
    }

    const filteredSearch = beers.filter((user) => {    
        return user.name.toLowerCase().includes(searchTerm);
    });

    const keyID = beers.find((beer) => beer.id);

    return (
        <>
            <SearchBox label="Search Beer Name" searchTerm={searchTerm} handleInput={handleInput} />
        
            <div className='beer-cards__cardMapping' key={Number(keyID)}>
                {filteredSearch.map((beer) => {
                    return <Link to={`/beers/${beer.id}`}><BeerCards image={beer.image_url ?? "https://images.punkapi.com/v2/keg.png"} 
                    name={beer.name} beers={beers} /></Link> //This will map out the beer card so that it can return it
                })}
            </div>        
        </>
    )
}

export default BeerCardsContainer;