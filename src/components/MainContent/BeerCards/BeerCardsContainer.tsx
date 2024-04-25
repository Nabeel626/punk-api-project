import { FormEvent, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import BeerCards from './BeerCards';
import { Beer } from '../../../Data/types';

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

    return (
        <>
            <SearchBox label="Search Beer Name" searchTerm={searchTerm} handleInput={handleInput} />

            {filteredSearch.map((beer) => {
                return <BeerCards key={beer.id} image={beer.image_url} 
                name={beer.name} beers={beers} 
                desciption={beer.description} /> //This will map out the beer card so that it can return it
            })}
        
        </>
    )
}

export default BeerCardsContainer