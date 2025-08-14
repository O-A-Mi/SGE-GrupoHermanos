import { InputPadrao } from "../../../../../components/InputPadrao";
import StatusSelect from "../../../../../components/StatusSelect";
import TogglePadrao from "../../../../../components/TooglePadrao";
import { useState } from "react";

const NovoAditivo = () => {
    const aparece = [
        {value: "ambos", label: "Ambos"},
        {value: "adesao", label: "Adesão"},
        {value: "empresarial", label: "Empresarial"},
    ]

    const [portal, setPortal] = useState(false);

    return(
        <>
            <div className="header">
                <h1 className="title">
                    Aditivo de Redução de Carência
                </h1>
            </div>

            <div className="container">
                <div className="content">
                    <div className="contentRow">
                        <div className="contentColumn">
                            <label className="label">Código</label>
                            <InputPadrao 
                                type="number"
                            />
                        </div>

                        <div className="contentColumn">
                            <label  className="label">V. no Portal do Corretor?</label>
                            <TogglePadrao checked={portal} onChange={setPortal}/>
                        </div>

                        <div className="contentColumn">
                            <label  className="label">Pesquisar</label>
                            <StatusSelect options={aparece} placeholder="Selecione..." onChange={(val) => console.log("Status: ",val)}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NovoAditivo;