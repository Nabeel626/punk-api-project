import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import SearchBox from '../SearchBox/SearchBox'
import BeerCards from './BeerCards';
import { Beer } from '../../../Data/types';
import RadioSearchBox from '../SearchBox/RadioSearchBox';

type BeerData = {
    beers: Beer[];
};

const BeerCardsContainer = ({ beers } : BeerData) => {
  
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [checkBoolean, setCheckBoolean] = useState<boolean>(false);
    
    const handleInput = (event : FormEvent<HTMLInputElement>) => {
        const cleanedInput = event?.currentTarget.value.toLowerCase();

        setSearchTerm(cleanedInput);
    }

    const onChangeRadio = (event : ChangeEvent<HTMLInputElement>) => {
        let radioCheck = Boolean(event.currentTarget.value);
        
        if(checkBoolean === false) {
            radioCheck = true;
        } else {
            radioCheck = false;
        }

        setCheckBoolean(radioCheck);
        console.log(checkBoolean);
        
    }

    const filteredSearch = beers.filter((user) => {    
        
        if(!checkBoolean) {
            return user.name.toLowerCase().includes(searchTerm);
        } else {

            if(user.abv > 6) {
                return user.abv;
            }

        }

    });

    return (
        <>
            <SearchBox label="Search By Beer Name" searchTerm={searchTerm} handleInput={handleInput} />

            <RadioSearchBox selected={checkBoolean} onChange={onChangeRadio} />

            {filteredSearch.map((beer) => {
                return <BeerCards key={beer.id} image={beer.image_url} 
                name={beer.name} tagline={beer.tagline} beers={beers} 
                desciption={beer.description} /> //This will map out the beer card so that it can return it
            })}
        
        </>
    )
}

export default BeerCardsContainer