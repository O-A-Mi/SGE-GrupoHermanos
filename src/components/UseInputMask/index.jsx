import { useState, useRef, useEffect } from "react";
import InputMask from "../InputMask";

const UseInputMask = (initialValue = "", pattern, type) => {
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);

    const handleChange = (e) => {
        if (type === "date") {
            setValue(e.target.value);
        } else {
            const rawValue = type === 'number' ? e.target.value.replace(/\D/g, "") : e.target.value;
            const maskedValue = pattern === null ? rawValue : InputMask(rawValue, pattern);
            setValue(maskedValue);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [value]);

    return [value, handleChange, inputRef];
};

export default UseInputMask;