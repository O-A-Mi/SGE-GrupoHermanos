"use client";

import { useContext, useMemo } from 'react';
import styles from './Footer.module.css';
import { useNavigate } from 'react-router';
import { jsonRoute } from '../../utils/json';
import ModalTextoLogin from "../../components/ModalTextoLogin";
import { useBrand, useModal, UsuarioContext } from "../../context";
import PoliticaDePrivacidade from '../../mocks/politicaDePrivacidade';
import TermosDeServico from '../../mocks/termosDeServico';
import { useAtomValue } from 'jotai';
import { userInfoAtom } from '../../context/jotai';
import { link } from '../../mocks/links';

const AccessLinks = ({ handleNavigate, userType, usuarioLogado }) => (
  <>
    <section className={`${styles.footerSection} ${styles.AccessLinks}`}>
      <h2 className={styles.sectionTitle}>Acessos</h2>
      <nav className={styles.sectionList}>
        {usuarioLogado ? (
          <>
            {['S', 'D'].includes(userType) && (
              <>
                <nav className={styles.sectionList}>
                    <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Cliente_Area)}>Minha conta</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Cliente_BuscarConsultas)}>Buscar consultas</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Cliente_BuscarExames)}>Desconto em exames</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Cliente_BuscarPacotes)}>Pacotes de exames</button>
                    <button className={styles.linkButton} onClick={() => window.open('https://drhoje.com/auth/login/', '_blank')}>Pronto Atendimento Online 24h</button>
                </nav>
              </>
            )}
            {['P'].includes(userType) && (
              <>
                <nav className={styles.sectionList}>
                    <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Prestador_Area}/${jsonRoute.Prestador_ValidarToken}`)}>Validar Token</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Prestador_Area}/${jsonRoute.Prestador_ValidarPaciente}`)}>Validar Pacientes</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Prestador_Area}/${jsonRoute.Prestador_Atendimentos}`)}>Atendimentos</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Prestador_Area}/${jsonRoute.Prestador_Lotes}`)}>Lotes</button>
                    <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Prestador_Area}/${jsonRoute.Prestador_DadosDaConta}`)}>Dados da Conta</button>
                </nav>
              </>
            )}
            {['ENT'].includes(userType) && (
              <>
                <nav className={styles.sectionList}>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Entidade_Area}/${jsonRoute.Entidade_Entidade}`)}>Entidade</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Entidade_Area}/${jsonRoute.Entidade_Movimentacoes}`)}>Movimentações</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Entidade_Area}/${jsonRoute.Entidade_Clientes}`)}>Clientes</button>
                </nav>
              </>
            )}
            {['EMP'].includes(userType) && (
              <>
                <nav className={styles.sectionList}>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Empresarial_Area}/${jsonRoute.Empresarial_Empresa}`)}>Empresa</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Empresarial_Area}/${jsonRoute.Empresarial_Movimentacoes}`)}>Movimentações</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Empresarial_Area}/${jsonRoute.Empresarial_Beneficiarios}`)}>Clientes</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Empresarial_Area}/${jsonRoute.Empresarial_SaldoEmpresarial}`)}>Saldo Empresarial</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Empresarial_Area}/${jsonRoute.Empresarial_Consultas}`)}>Consultas</button>
                </nav>
              </>
            )}
            {['R'].includes(userType) && (
              <>
                <nav className={styles.sectionList}>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Consultor_Area}/${jsonRoute.Consultor_DadosDaConta}`)}>Dados da Conta</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Consultor_Area}/${jsonRoute.Consultor_EquipeVendas}`)}>Equipe de Vendas</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Consultor_Area}/${jsonRoute.Consultor_Acompanhamento}`)}>Acompanhamento</button>
                  <button className={styles.linkButton} onClick={() => handleNavigate(`${jsonRoute.Consultor_Area}/${jsonRoute.Consultor_MaterialApoio}`)}>Material de Apoio</button>
                </nav>
              </>
            )}
          </>
        ) : (
          <>
            <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Cliente_Home)}>Área do Cliente</button>
            <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Empresarial_Home)}>Área da Empresa</button>
            <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Entidade_Login)}>Área da Entidade</button>
            <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Prestador_Login)}>Área do Prestador</button>
            <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Consultor_Login)}>Área do Consultor</button>
          </>
        )}
      </nav>
    </section>
  </>
);

const TermsLinks = ({ openModal }) => (
    <section className={`${styles.footerSection} ${styles.TermsLinks}`}>
        <h2 className={styles.sectionTitle}>Termos</h2>
        <nav className={styles.sectionList}>
            <button className={styles.linkButton} onClick={() => openModal("modalTexto", {titulo: "Termos de Serviço", texto: TermosDeServico})}>Termos de uso</button>
            <button className={styles.linkButton} onClick={() => openModal("modalTexto", {titulo: "Política de Privacidade", texto: PoliticaDePrivacidade})}>Política de privacidade</button>
        </nav>
    </section>
);

const SocialButton = ({ icon, text, link }) => (
    <button className={styles.linkButton} onClick={() => window.open(link, "_blank")}>
        <span className={styles.socialIcon}><i className={`fa-brands fa-${icon}`}></i></span>
        <span className={styles.socialText}>{text}</span>
    </button>
);

const SocialLinks = () => (
  <section className={`${styles.footerSection} ${styles.SocialLinks}`}>
    <h2 className={styles.sectionTitle}>Redes Sociais</h2>
    <nav className={styles.sectionList}>
      <SocialButton icon="instagram" text="Instagram" link="https://www.instagram.com/dr.hoje/"/>
      <SocialButton icon="facebook" text="Facebook" link="https://www.facebook.com/doctorHoje"/>
      <SocialButton icon="linkedin" text="LinkedIn" link="https://br.linkedin.com/company/doutor-hoje"/>
    </nav>
  </section>
);

const ContactInfo = () => (
  <section className={`${styles.footerSection} ${styles.ContactInfo}`}>
    <h2 className={styles.sectionTitle}>Central de atendimento</h2>
    <p className={styles.contactDetails}>
      Brasília: (61) 3221-5350<br />
      Outras localidades: 0800 000 3507<br />
      E-mail: contato@doutorhoje.com.br
    </p>
    <p className={styles.schedule}>
      Atendimento de segunda a sexta, das 8h às 18h.
    </p>
    <div className={styles.whatsappWrapper}>
      <SocialButton icon="whatsapp" text="Whatsapp" link={link.whatsapp}/>
    </div>
  </section>
);

export default function FooterPadrao() {
  const navigate = useNavigate();
  
  const userInfo = useAtomValue(userInfoAtom);
  const userType = useMemo(() => userInfo?.tipo_usuario, [userInfo]);

  const { assets, brandName } = useBrand();
  const { openModal, closeModal, isModalOpen, modalContent } = useModal();
  const { usuarioLogado } = useContext(UsuarioContext);

  const handleNavigate = (link) => {
    navigate(link, { replace: true });
  }

  return (
    <>
      <footer className={styles.footerContainer}>
          <div className={styles.footerContent}>
              <div className={styles.footerDivider}>
                  <div className={`${styles.footerLogoField} ${styles.FooterLogo}`}>
                    <img src={assets?.logoAlternativa ? assets.logoAlternativa : assets.logo} alt={`Logo ${brandName}`} />
                  </div>
                  <AccessLinks {...{ handleNavigate }} userType={userType} usuarioLogado={usuarioLogado}/>
                  <TermsLinks openModal={openModal} />
                  <SocialLinks />
                  <ContactInfo />
              </div>
          </div>
      </footer>
      {isModalOpen("modalTexto") && ( 
        <ModalTextoLogin onClose={() => closeModal("modalTexto")} title={modalContent.titulo} text={modalContent.texto} />
      )}
    </>
  );
}