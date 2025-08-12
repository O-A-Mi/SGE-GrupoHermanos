import React from "react";
import Select from "react-select";

function StatusSelect({ options, placeholder, onChange }){
    return (
        <Select 
            options={options}
            onChange={onChange}
            placeholder="Selecione..."
            isClearable
        />
    );
}

export default StatusSelect;