import { FormEventHandler } from 'react'
import "./SearchBox.scss";

type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({label, searchTerm, handleInput} : SearchBoxProps) => {

    const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
        <div className="search-box">
            <h2 className='search-box__heading'>Filter</h2>
            
            <label htmlFor={label} className="search-box__label"> {capitalizedLabel + ": "} </label>
            <input type="text" id={label} name={label} value={searchTerm} onInput={handleInput} className="search-box__input" /><br />
            
        </div>
  )
}

export default SearchBox;