import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "../Stepper/style.module.css";
import { useAtendimento } from "../../context";
import "../../assets/icons/css/all.css";

const Stepper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dadosAtendimento } = useAtendimento();

  const etapas = [
    {
      id: "dados-cliente",
      path: "/atendimento/dados-cliente",
      icon: "fas fa-search",
      nome: "Dados do Cliente",
    },
    {
      id: "contratos",
      path: "/atendimento/contratos",
      icon: "fas fa-file-contract",
      nome: "Contratos",
    },
    {
      id: "beneficiarios",
      path: "/atendimento/beneficiarios",
      icon: "fas fa-users",
      nome: "Beneficiários",
    },
    {
      id: "chamado",
      path: "/atendimento/chamado",
      icon: "fas fa-headset",
      nome: "Chamado",
    },
    {
      id: "resumo",
      path: "/atendimento/resumo",
      icon: "fas fa-file-alt",
      nome: "Resumo",
    },
  ];

  const etapaAtual = etapas.findIndex(
    (etapa) => location.pathname === etapa.path
  );

  const [progressoMaximo, setProgressoMaximo] = useState(() => {
    const saved = localStorage.getItem("atendimento-progresso-maximo");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    const progressoSalvo = localStorage.getItem("atendimento-progresso-maximo");
    const temProgressoSalvo = progressoSalvo && parseInt(progressoSalvo) > 0;

    const dadosForamPerdidos =
      temProgressoSalvo &&
      dadosAtendimento.nome === "Nenhum cliente selecionado" &&
      dadosAtendimento.contrato === "null";

    if (dadosForamPerdidos) {
      localStorage.removeItem("atendimento-progresso-maximo");
      setProgressoMaximo(0);

      if (location.pathname !== "/atendimento/dados-cliente") {
        navigate("/atendimento/dados-cliente", { replace: true });
      }
    }
  }, [dadosAtendimento, location.pathname, navigate]);

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem("atendimento-progresso-maximo");
      const novoProgresso = saved ? parseInt(saved) : 0;
      setProgressoMaximo(novoProgresso);
    };

    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(() => {
      const saved = localStorage.getItem("atendimento-progresso-maximo");
      const novoProgresso = saved ? parseInt(saved) : 0;
      if (novoProgresso !== progressoMaximo) {
        setProgressoMaximo(novoProgresso);
      }
    }, 500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, [progressoMaximo]);

  useEffect(() => {
    if (etapaAtual > progressoMaximo) {
      setProgressoMaximo(etapaAtual);
      localStorage.setItem(
        "atendimento-progresso-maximo",
        etapaAtual.toString()
      );
    }
  }, [etapaAtual, progressoMaximo]);

  const handleStepClick = (index, etapaPath) => {
    if (index === 0 || index <= progressoMaximo) {
      navigate(etapaPath);
    }
  };

  return (
    <div className={styles.Stepper}>
      {etapas.map((etapa, index) => {
        const isActive = index === etapaAtual;
        const isCompleted = index < progressoMaximo;
        const isVisitedButIncomplete =
          index === progressoMaximo && index !== etapaAtual;
        const isClickable = index === 0 || index <= progressoMaximo;
        const isDisabled = index > progressoMaximo && index !== 0;

        return (
          <React.Fragment key={etapa.id}>
            <div
              className={`${styles["page-icon"]} ${
                isActive ? styles.active : ""
              } ${isCompleted ? styles.completed : ""} ${
                isVisitedButIncomplete ? styles.visitedIncomplete : ""
              } ${isClickable ? styles.clickable : ""} ${
                isDisabled ? styles.disabled : ""
              }`}
              title={
                isDisabled
                  ? `${etapa.nome} - Complete as etapas anteriores primeiro`
                  : etapa.nome
              }
              onClick={() => handleStepClick(index, etapa.path)}
            >
              <i className={`${etapa.icon} ${styles.icon}`}></i>
            </div>

            {index < etapas.length - 1 && (
              <div
                className={`${styles.stepperLine} ${
                  index < progressoMaximo ? styles.lineCompleted : ""
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
