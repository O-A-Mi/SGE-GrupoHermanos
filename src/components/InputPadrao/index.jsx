import styles from './styles.module.css';
import { useState, useRef } from "react";
import Select  from '../../assets/select-ui';

const applyMask = (value, pattern) => {
  const patterns = pattern.split("|").map(p => p.trim());
  const numericValue = value.replace(/\D/g, "");
  const selectedPattern = patterns.find(p => {
    const countDigits = (p.match(/9/g) || []).length;
    return numericValue.length <= countDigits;
  }) || patterns[patterns.length - 1];
  let maskedValue = "";
  let valueIndex = 0;
  for (let i = 0; i < selectedPattern.length; i++) {
    if (valueIndex >= numericValue.length) break;
    const patternChar = selectedPattern[i];
    const currentChar = numericValue[valueIndex];
    if (patternChar === "9" && /\d/.test(currentChar)) {
      maskedValue += currentChar;
      valueIndex++;
    } else if (patternChar === "A" && /[a-zA-Z]/.test(currentChar)) {
      maskedValue += currentChar;
      valueIndex++;
    } else if (patternChar !== "9" && patternChar !== "A") {
      maskedValue += patternChar;
    }
  }
  return maskedValue;
};

const UseInputMask = (pattern = null, type = "text", initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef(null);
    const handleChange = (e) => {
        let input = e.target.value;
        if (type === "both") {
            const hasLetter = /[a-zA-Z]/.test(input);
            if (hasLetter) {
                setValue(input);
            } else if (pattern) {
                const rawValue = input.replace(/\D/g, "");
                const maskedValue = applyMask(rawValue, pattern);
                setValue(maskedValue);
            } else {
                setValue(input);
            }
        } else if (type === "number") {
            const rawValue = input.replace(/\D/g, "");
            const maskedValue = pattern ? applyMask(rawValue, pattern) : rawValue;
            setValue(maskedValue);
        } else {
            setValue(input);
        }
    };
    return [value, handleChange, inputRef];
};

const InputField = ({width, gap, identifier, label, required, children, fieldStyle = {}}) => {
    const getFieldStyle = () => ({
        ...(width && { maxWidth: `calc(${width}% - ${gap || gap == 0 ? gap : 0.5}rem)` }),
        ...fieldStyle
    });
    return (
        <div className={styles.inputField} style={getFieldStyle()}>
            {label === false ? null : <label className={styles.inputLabel}>
                {label} {required && <span className={styles.required}>*</span>}
            </label>}
            {children}
        </div>
    );
};

const InputPadrao = ({ type = "text", icon, value, onChange, inputRef, placeholder, required, identifier, containerStyle = {}, inputStyle = {}, iconStyle = {}, options = [], upperCase, lowerCase, readOnly, disabled, defaultSelect = true, searchable, onBlur, multiple, inputButtonLeft, inputButtonRight, ...props }) => {
    const defaultIcons = {
        text: "",
        email: "fas fa-envelope",
        password: "fas fa-lock",
        number: "fas fa-hashtag",
        tel: "fas fa-phone",
        date: "fas fa-calendar-days",
        'datetime-local': "fas fa-calendar-days",
        time: "fas fa-clock",
        select: "fas fa-chevron-down",
        search: "fas fa-search",
        file: "fas fa-file"
    };
    const getIcon = () => {
        if (icon) return icon;
        return defaultIcons[type] || defaultIcons.text;
    };
    const getContainerStyle = () => ({
        ...containerStyle
    });
    const getInputStyle = () => ({
        ...(upperCase && { textTransform: 'uppercase' }),
        ...(lowerCase && { textTransform: 'lowercase' }),
        ...(['text', 'date', 'number'].includes(type) && { width: '100%' }),
        ...(icon != false && { paddingRight: '2.5rem' }),
        ...inputStyle
    });
    const getIconStyle = () => ({
        ...iconStyle
    });
    const [inputVisible, setInputVisible] = useState(false);
    const handleInputVisible = () => {
        setInputVisible(!inputVisible)
    }
    return (
        <div className={styles.inputPadraoField} style={getContainerStyle()}>
            {type === "select" ? (
                <Select
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    options={options}
                    placeholder={placeholder}
                    disabled={disabled}
                    identifier={identifier}
                    inputStyle={getInputStyle()}
                    containerStyle={{ width: '100%', ...containerStyle }}
                    defaultSelect={defaultSelect}
                    icon={getIcon()}
                    iconStyle={getIconStyle()}
                    searchable={searchable}
                    onBlur={onBlur} 
                    multiple={multiple}
                    {...props}
                />
            ) : type === "password" ? (
                <>
                    <input
                        type={inputVisible ? "text" : "password"}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        id={identifier}
                        ref={inputRef}
                        className={styles.inputPadrao}
                        readOnly={readOnly}
                        disabled={disabled}
                        style={getInputStyle()}
                        onBlur={onBlur}
                        {...props}
                    />
                    <div className={styles.iconsContainer}>
                        <i className={`fas fa-${inputVisible ? "eye-slash" : "eye"} ${styles.eyeIcon}`} onClick={handleInputVisible}/>
                        {icon != false && <i className={getIcon()} style={getIconStyle()} />}
                    </div>
                </>
            ) : type === 'textarea' ? (
                <>
                    <textarea
                        value={value}
                        onChange={onChange}
                        required
                        id={identifier}
                        ref={inputRef}
                        className={styles.inputPadrao}
                        style={{ lineBreak: "anywhere", padding: '0.5rem 1rem', height: 'auto', minHeight: '100px', overflow: 'hidden', lineHeight: '1rem' }}
                        onBlur={onBlur}
                        {...props}
                    />
                </>
            ) : type === 'file' ? (
                <>
                    <input
                        type="file"
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        id={identifier}
                        ref={inputRef}
                        className={styles.inputPadrao}
                        readOnly={readOnly}
                        disabled={disabled}
                        style={getInputStyle()}
                        onBlur={onBlur}
                        {...props}
                    />
                    {icon != false && <i className={getIcon()} style={getIconStyle()} />}
                </>
            ) : (
                <>
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        id={identifier}
                        ref={inputRef}
                        className={styles.inputPadrao}
                        readOnly={readOnly}
                        disabled={disabled}
                        style={getInputStyle()}
                        onBlur={onBlur}
                        {...props}
                    />
                    {icon != false && <i className={getIcon()} style={getIconStyle()} />}
                </>
            )}
        </div>
    );
};
const UseInputPadrao = ({label, identifier, required, width, gap, type = "text", value, onChange, inputRef, fieldStyle = {}, ...props}) => {
    return (
        <InputField label={label} identifier={identifier} required={required} width={width} gap={gap} fieldStyle={fieldStyle}>
            <InputPadrao
                type={type}
                value={value}
                onChange={onChange}
                identifier={identifier}
                inputRef={inputRef}
                {...props}
            />
        </InputField>
    )
}
export { UseInputPadrao, InputField, InputPadrao, UseInputMask };