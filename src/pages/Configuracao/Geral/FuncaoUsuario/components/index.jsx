import React, { useState, useEffect } from "react";
import styles from '../FuncaoUsuario.module.css';
import { UseInputPadrao } from "../../../../../components/InputPadrao";
import * as Icones from '../../../../../components/Icones'
import { useNavigate } from "react-router"
import FuncaoUsuario from './../index';
import { UseInputMask } from "../../../../../components/InputPadrao";

const FuncaoUsuarioInfo = (dataItem, type) => {
    const [text, setText, textRef] = UseInputMask();
    const [desc, setDesc, descRef] = UseInputMask();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      if(dataItem){
        const dataStatus = dataItem.data.status;
        const dataDesc = dataItem.data.nome;
        setText({ target: { value: dataStatus } });
        setDesc({ target: { value: dataDesc } });
      }
    }, [dataItem, setText, setDesc])

    return (
        <div className="header">
          <h1 className="title">
            Usuario
        </h1>
          <h2 className='Subtitle'>Adicione, remova ou edite as funções do usuario </h2>
          <div>
            <div className={styles.PesquisaEStatus}>
              <div>
                <div className={styles.status}>
                  <UseInputPadrao
                    label="Pesquisar"
                    value={text}
                    inputRef={textRef}
                    onChange={setText}
                    width={isMobile ? 100 : 75}
                  />           
                  <UseInputPadrao
                    label="Nome"
                    value={desc}
                    inputRef={descRef}
                    onChange={setDesc}
                    width={isMobile ? 100 : 75}
                  />
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default FuncaoUsuarioInfo;