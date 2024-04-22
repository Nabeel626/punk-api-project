import { ChangeEventHandler } from "react";
import "./SearchBox.scss";

type RadioInputProps = {
    selected: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
};


const RadioSearchBox = ({selected, onChange} : RadioInputProps) => {
    
    return (
        <div className='search-box__filter'>

            <input id="abv" type='checkbox' checked={selected} onChange={onChange}/>
            <label htmlFor="abv">High ABV &gt;6%</label><br />

            <input id="classicRange" type='checkbox' checked={selected} onChange={onChange}/>
            <label htmlFor="classicRange">Classic Range</label><br />

            {/* <input id="acidity" type='checkbox' checked={selected} onChange={onChange}/>
            <label htmlFor="acidity">Acidic (ph &lt; 4)</label> */}

        </div>
    )
}

export default RadioSearchBox;