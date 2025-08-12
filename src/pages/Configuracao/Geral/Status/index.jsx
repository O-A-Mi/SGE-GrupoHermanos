import { UseInputMask, UseInputPadrao } from '../../../../components/InputPadrao';
import toastMessage from '../../../../assets/toast-ui/toast';

const Status = () => {
    const [cpfCnpj, handleCpfCnpjChange, cpfCnpjRef] = UseInputMask("999.999.999-99 | 99.999.999/9999-99", "number");

    function checkValidaCPFCNPJ() {
        if(cpfCnpj.length > 0){
            handleCpfCnpjChange({ target: { value: '' } });
            toastMessage(`CPF/CNPJ inválido.`, "warning");
        }
    }

    return (
        <>
            <div className="header">
                <div>
                    <h1 className="title">Status</h1>
                </div>
                <div>
                    <h2 className="subtitle">Página de Status cadastrados no sistema.</h2>
                </div>
            </div>
            <div className="container">
                <UseInputPadrao label={'CPF/CNPJ cadastrado'} required identifier="cpfCnpj" value={cpfCnpj} onBlur={checkValidaCPFCNPJ} onChange={handleCpfCnpjChange} inputRef={cpfCnpjRef} icon="fas fa-id-card"/>
            </div>
        </>
    )
}

export default Status;