import { ChangeEventHandler } from "react";
import "./SearchBox.scss";

type RadioInputProps = {
    label: string;
    selected: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
};


const RadioSearchBox = ({ label, selected, onChange } : RadioInputProps ) => {

    return (

        <div className="checkbox__filter--output">
            <input type='checkbox' onChange={onChange} checked={selected} className="checkbox__filter--input" />
            <label htmlFor="" className="checkbox__filter--label">{label}</label>
        </div>

    )
}

export default RadioSearchBox;