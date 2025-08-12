const applyMask = (value, pattern) => {
    let maskedValue = "";
    let valueIndex = 0;
  
    for (let i = 0; i < pattern.length; i++) {
      if (valueIndex >= value.length) break;
  
      if (pattern[i] === "9") {
        // Substitui "9" por um dígito
        if (/\d/.test(value[valueIndex])) {
          maskedValue += value[valueIndex];
          valueIndex++;
        }
      } else if (pattern[i] === "A") {
        // Substitui "A" por uma letra
        if (/[a-zA-Z]/.test(value[valueIndex])) {
          maskedValue += value[valueIndex];
          valueIndex++;
        }
      } else {
        // Adiciona caracteres fixos da máscara (como ".", "-", "/", etc.)
        maskedValue += pattern[i];
      }
    }
  
    return maskedValue;
};

export default applyMask