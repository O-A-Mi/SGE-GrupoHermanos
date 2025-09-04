import StepperPadrao from "../../../../../components/StepperPadrao";
import { useCallback, useEffect, useState, useRef } from "react";
import Combo from "./Combo";
import ComboFaixaDependente from "./ComboFaixaDependente";

function CadastroComboProduto() {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepConditions, setStepConditions] = useState({});

  const steps = [
    { id: 0, name: "Combo", icon: "fa-solid fa-user", color: "#3b82f6" },
    {
      id: 1,
      name: "Faixa do Dependente por Idade",
      icon: "fa-solid fa-cog",
      color: "#10b981",
    },
  ];

  const handleStepChange = (stepId) => {
    setCurrentStep(stepId);
  };
  const getNextValidStep = () => {
    const visibleSteps = steps.filter(
      (step) => stepConditions[step.id] !== "invisible"
    );
    const currentIndex = visibleSteps.findIndex(
      (step) => step.id === currentStep
    );
    return currentIndex < visibleSteps.length - 1
      ? visibleSteps[currentIndex + 1].id
      : null;
  };

  // Função para encontrar o step anterior válido (não invisible)
  const getPreviousValidStep = () => {
    const visibleSteps = steps.filter(
      (step) => stepConditions[step.id] !== "invisible"
    );
    const currentIndex = visibleSteps.findIndex(
      (step) => step.id === currentStep
    );
    return currentIndex > 0 ? visibleSteps[currentIndex - 1].id : null;
  };

  const handleAnterior = () => {
    const prevStep = getPreviousValidStep();
    if (prevStep !== null) {
      setCurrentStep(prevStep);
    }
  };

  const handleProximo = () => {
    const nextStep = getNextValidStep();
    if (nextStep !== null) {
      setCurrentStep(nextStep);
    }
  };
  return (
    <>
      <div>
        <h1>Combo Produtos/ Serviços</h1>
      </div>
      <div>
        <StepperPadrao
          steps={steps}
          currentStep={currentStep}
          onStepChange={handleStepChange}
        >
          {currentStep === 0 && (
            <div>
              <Combo />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <ComboFaixaDependente />
            </div>
          )}
        </StepperPadrao>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={handleAnterior}
          disabled={getPreviousValidStep() === null}
        >
          Anterior
        </button>
        <button onClick={handleProximo} disabled={getNextValidStep() === null}>
          Próximo
        </button>
      </div>
    </>
  );
}

export default CadastroComboProduto;
