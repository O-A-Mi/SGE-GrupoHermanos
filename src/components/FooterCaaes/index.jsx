"use client";

import { useState, useCallback, useContext, useMemo } from 'react';
import styles from './styles.module.css';
import Logo from '/img/home_caaes/logo.svg';
import LogoDrOnline from '/img/home_caaes/dronline.png';
import LogoDrHoje from '/img/home_caaes/drhoje.svg';
import { useNavigate } from 'react-router';
import { jsonRoute } from '../../utils/json';
import ModalTextoLogin from "../../components/ModalTextoLogin";
import { BackscreenContext, useModal, UsuarioContext } from "../../context";
import PoliticaDePrivacidade from '../../mocks/politicaDePrivacidade';
import TermosDeServico from '../../mocks/termosDeServico';
import { useAtomValue } from 'jotai';
import { userInfoAtom } from '../../context/jotai';
import { link } from '../../mocks/links';

const AccessLinks = ({ handleNavigate}) => (
  <>
    <section className={`${styles.footerSection} ${styles.AccessLinks}`}>
      <h2 className={styles.sectionTitle}>Serviço oferecido por:</h2>
      <nav className={styles.sectionList}>
          <>
            <button className={styles.linkButton} onClick={() => handleNavigate(jsonRoute.Cliente_Home)}>Dr. Hoje em parceria com a Dr. Online</button>
          </>
      </nav>
    </section>
  </>
);

const TermsLinks = ({ openModalTextoLogin }) => ( 
    <section className={`${styles.footerSection} ${styles.TermsLinks}`}>
        <h2 className={styles.sectionTitle}>Termos</h2>
        <nav className={styles.sectionList}>
            <button className={styles.linkButton} onClick={() => openModalTextoLogin("Adquirir serviço", AdquirirServiço)}>Adquirir serviço</button>
            <button className={styles.linkButton} onClick={() => openModalTextoLogin("Perguntas frequentes", PerguntasFrequentes)}>Perguntas frequentes</button>
            <button className={styles.linkButton} onClick={() => openModalTextoLogin("Termos de Serviço", TermosDeServico)}>Termos de uso</button>
            <button className={styles.linkButton} onClick={() => openModalTextoLogin("Política de Privacidade", PoliticaDePrivacidade)}>Política de privacidade</button>
        </nav>
    </section>
);

const SocialButton = ({ icon, text, link }) => (
    <button className={styles.linkButton} onClick={() => window.open(link, "_blank")}>
        <span className={styles.socialIcon}><i className={`fa-brands fa-${icon}`}></i></span>
        <span className={styles.socialText}>{text}</span>
    </button>
);

const ContactInfo = () => (
  <section className={`${styles.footerSection} ${styles.ContactInfo}`}>
    <h2 className={styles.sectionTitle}>Contato Dr. Hoje</h2>
    <div className={styles.whatsappWrapper}>
      <SocialButton icon="whatsapp" text="Whatsapp" link={link.whatsapp}/>
    <p className={styles.schedule}>
      Central de atendimento: 0800 000 3507
    </p>
    <p className={styles.contactDetails}>
      E-mail: contato@doutorhoje.com.br
    </p>
    </div>
  </section>
);

export default function FooterPadrao() {
  const navigate = useNavigate();
  
  const userInfo = useAtomValue(userInfoAtom);
  const userType = useMemo(() => userInfo?.tipo_usuario, [userInfo]);

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
                    <img className={styles.logos} src={Logo} alt="logo" />
                    <div className={styles.logosContainer}>
                      <img className={styles.logos} src={LogoDrOnline} alt="logo_DrOnline" />
                      <img className={styles.logos} src={LogoDrHoje} alt="logo_DrHoje" />
                    </div>
                  </div>
                  <AccessLinks {...{ handleNavigate }} userType={userType} usuarioLogado={usuarioLogado}/>
                  <TermsLinks openModalTextoLogin={() => openModal("textoLogin", modalContent.titulo, modalContent.texto)} />
                  <ContactInfo />
              </div>
          </div>
      </footer>
        {isModalOpen("textoLogin") && ( 
          <ModalTextoLogin
            onClose={() => closeModal("textoLogin")}
            title={modalContent.titulo}
            text={modalContent.texto}
          />
        )}
    </>
  );
}