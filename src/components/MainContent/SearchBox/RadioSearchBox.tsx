import { ChangeEventHandler, useState } from "react";
import "./SearchBox.scss";

type RadioInputProps = {
    label: string;
    selected: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
};


const RadioSearchBox = ({ label, selected, onChange } : RadioInputProps ) => {

    return (
        <div className='search-box__filter'>

            <input type='checkbox' onChange={onChange} checked={selected}/>
            <label htmlFor="">{label}</label><br />

        </div>
    )
}

export default RadioSearchBox;