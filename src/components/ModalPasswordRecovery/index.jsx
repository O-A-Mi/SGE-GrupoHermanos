import styles from './styles.module.css';
import { carregarLinks } from "../../db/carregarGeral.jsx";
import { UseInputMask, UseInputPadrao } from '../InputPadrao';
import { devBaseInf, prodBaseInf, baseInf} from "../../utils/json";
import { useState } from "react";
import { useLoader } from '../../context';
import toastMessage from '../../assets/toast-ui/toast';
import dialogMessage from '../../assets/dialog-ui/dialog.jsx';
import { validarCPFCNPJ, validarEmail, validarCampos } from "../../utils/functions.js";
import { getBaseConfig } from '../../utils/utilsConfig.js';

export default function ModalPasswordRecovery ({closeModal, tipoTela}) {
    const { baselink, companyId, endpoints } = getBaseConfig();
    const { showLoader, hideLoader } = useLoader();
    const [cpfCnpj, handleCpfCnpjChange, cpfCnpjRef] = UseInputMask("999.999.999-99 | 99.999.999/9999-99", "number");
    const [email, handleEmailChange, emailRef] = UseInputMask();
    const [tipoCliente, setTipoCliente] = useState('S');
    const [informativo, setInformativo] = useState(false);
    
    // Array para validar todos os campos
    const arrayCamposObrigatorios = tipoTela == 'C' ? [
      { valor: cpfCnpj, nome: "CPF/CNPJ", validacao: validarCPFCNPJ },
      { valor: email, nome: "E-mail", validacao: validarEmail },
      { valor: tipoCliente, nome: "Tipo Beneficiário" }
    ] : [
      { valor: cpfCnpj, nome: "CPF/CNPJ", validacao: validarCPFCNPJ },
      { valor: email, nome: "E-mail", validacao: validarEmail }
    ];

    const optionsTipoCliente = [
        { value: 'S', label: 'Segurado' },
        { value: 'D', label: 'Dependente' }
    ]
    
    const recuperarSenha = () => {
      if(validarCampos(arrayCamposObrigatorios)){
        showLoader();
        window.finalizarRecuperacao = finalizarRecuperacao;

        const params = {
          usuario: cpfCnpj,
          email: email,
          tipo_usuario: tipoTela == 'C' ? tipoCliente : tipoTela,
          cd_empresa: companyId
        }
        carregarLinks('finalizarRecuperacao', `${baselink}${endpoints.gravarEsqueciSenha}`, params, 'finalizarRecuperacao');
        return () => {
          delete window.finalizarRecuperacao;
        };
      }
    };

    function finalizarRecuperacao(dados){
      try{
        let resp = JSON.parse(dados);
        if (resp.status == 200) {
          toastMessage(resp.mensagem, "success");
          setInformativo(true);
        } else{
          dialogMessage(resp.mensagem, "error",{confirmButton: false});
        }
      } catch (error) {
        console.error(error)
      }
      hideLoader();
    }

    function checkValidaCPFCNPJ() {
      if(cpfCnpj.length > 0){
        if(!validarCPFCNPJ(cpfCnpj)){
          handleCpfCnpjChange({ target: { value: '' } });
          toastMessage(`CPF/CNPJ inválido.`, "warning");
        }
      }
    }

    function checkValidaEmail() {
      if(email.length > 0){
        if(!validarEmail(email)){
          handleEmailChange({ target: { value: '' } });
          toastMessage("E-mail inválido.", "warning");
        }
      }
    }
    
    return (
        <>
            {informativo ? (
                <div className={styles.modalPasswordRecoveryContainer}>
                    <div className={styles.modalPasswordRecovery}>
                        <div className={styles.modalPasswordHeader}>
                            <h1 className={styles.modalPasswordTitle}>Recuperação de Senha</h1>
                            <button className={styles.modalCloseButton} onClick={closeModal}>
                                <i className='fas fa-xmark'></i>
                            </button>
                        </div>
                        <p className={styles.modalPasswordInformative}>
                            Enviamos um e-mail com uma nova senha. <br />
                            Após fazer o login, você poderá cadastrar uma nova senha em Minha Conta.
                        </p>
                        <div className={styles.modalPasswordButtonField}>
                            <button type="button" className={styles.modalPasswordButton} onClick={closeModal}>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.modalPasswordRecoveryContainer}>
                    <div className={styles.modalPasswordRecovery}>
                        <div className={styles.modalPasswordHeader}>
                            <h1 className={styles.modalPasswordTitle}>Recuperação de Senha</h1>
                            <button className={styles.modalCloseButton} onClick={closeModal}>
                                <i className='fas fa-xmark'></i>
                            </button>
                        </div>
                        <p className={styles.modalPasswordDescription}>
                            Digite o seu CPF/CNPJ e e-mail cadastrado para recuperar sua senha.
                        </p>
                        <form className={styles.modalPasswordForm}>
                            <UseInputPadrao label={'CPF/CNPJ cadastrado'} required identifier="cpfCnpj" value={cpfCnpj} onBlur={checkValidaCPFCNPJ} onChange={handleCpfCnpjChange} inputRef={cpfCnpjRef} icon="fas fa-id-card"/>
                            <UseInputPadrao label="E-mail cadastrado" required identifier="email" value={email} onChange={handleEmailChange} onBlur={checkValidaEmail} inputRef={emailRef} type="email"/>
                            {tipoTela == 'C' && <UseInputPadrao type="select" options={optionsTipoCliente} required label="Tipo Beneficiário" identifier="tipo-cliente-signin" value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)} inputStyle={{width: '100%'}} autoComplete="tipo-cliente"/>}
                        </form>
                        <div className={styles.modalPasswordButtonField}>
                            <button onClick={recuperarSenha} className={styles.modalPasswordButton}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};