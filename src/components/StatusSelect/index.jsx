import React from "react";
import Select from "react-select";

function StatusSelect({ options, placeholder, onChange }){
    return (
        <Select 
            options={options}
            onChange={onChange}
            placeholder={placeholder}
            isClearable
        />
    );
}

export default StatusSelect;