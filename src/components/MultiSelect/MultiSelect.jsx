import React from "react";
import Select, {components} from "react-select";

// Customizando o card das opções selecionadas
const MultiValue = (props) => {
    return (
      <components.MultiValue {...props}>
        <div style={{ backgroundColor: "#0d95d6", color: "white", padding: "2px 8px", borderRadius: "4px", margin: "2px" }}>
          {props.data.label}
        </div>
      </components.MultiValue>
    );
  };
  
  // Customizando a lista de opções
const Option = (props) => {
    return (
      <components.Option {...props}>
        <div style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
          {props.data.label}
        </div>
      </components.Option>
    );
  };

const handleChange = (selected) => {
    console.log(selected);
};

function MultiSelect({ options, placeholder, onChange }){
    return (
        <Select 
            options={options}
            onChange={onChange}
            placeholder={placeholder}
            isClearable
            isMulti
            components={{ MultiValue, Option }}
            closeMenuOnSelect={false} // não fecha ao selecionar
        />
    );
}

export default MultiSelect;