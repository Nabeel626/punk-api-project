import React, { FormEventHandler } from 'react'


type SearchBoxProps = {
    label: string;
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({label, searchTerm, handleInput} : SearchBoxProps) => {

    const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
        <div className="search-box">
            <label htmlFor={label} className="search-box__label"> {capitalizedLabel + ": "} </label>
            <input type="text" id={label} name={label} value={searchTerm} onInput={handleInput} className="search-box__input" />
        </div>
  )
}

export default SearchBox;