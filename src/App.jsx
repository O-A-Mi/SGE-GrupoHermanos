import { BrowserRouter, Routes, Route } from "react-router";
import "./assets/icons/css/all.css";
import { jsonRoute } from "./utils/json";
import "./index.css";

//Navbar
import NavBar from "./components/Navigator";

//Home
import Home from "./pages";

//Departamento
import Departamento from "./pages/Configuracao/Geral/Departamento";
import NovoDepartamento from "./pages/Configuracao/Geral/Departamento/NovoDepartamento";

//Status
import Status from "./pages/Configuracao/Geral/Status";
import NovoStatus from "./pages/Configuracao/Geral/Status/NovoStatus";
import EdicaoStatus from "./pages/Configuracao/Geral/Status/EdicaoStatus";

//Perguntas
import PerguntasRespostas from "./pages/Configuracao/Geral/PerguntasRespostas";
import NovaPergunta from "./pages/Configuracao/Geral/PerguntasRespostas/NovaPergunta";

//Reducao de Carencia
import AditivoDeReducaoDeCarencia from "./pages/Configuracao/Geral/AditivoDeReducaoDeCarencia";
import NovoAditivo from "./pages/Configuracao/Geral/AditivoDeReducaoDeCarencia/NovoAditivo";

//Tipo de Documento/Arquivo
import TipoDeDocumentoArquivo from "./pages/Configuracao/Geral/TipoDeDocumentoArquivo";
import NovoDocumentoArquivo from "./pages/Configuracao/Geral/TipoDeDocumentoArquivo/NovoDocumentoArquivo";

//Abre Botao Formulario
import AbreBotoesFormulario from "./pages/Configuracao/Geral/AbreBotoesFormulario";

//Combo Produtos/ Serviços
import ComboProdutoServico from "./pages/Administrativo/Manutenção/ComboProdutoServico";
import Combo from "./pages/Administrativo/Manutenção/ComboProdutoServico/CadastroComboProduto/Combo";
import CadastroComboProduto from "./pages/Administrativo/Manutenção/ComboProdutoServico/CadastroComboProduto";

//Função Usuário
import Funcao_Usuario from "./pages/Configuracao/Geral/FuncaoUsuario";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={jsonRoute.Configuracao}>
            <Route path={jsonRoute.Geral}>
              <Route
                path={jsonRoute.Configuracao_Geral_Status}
                element={<Status />}
              />
              <Route
                path={jsonRoute.Configuracao_Geral_EdicaoStatus}
                element={<EdicaoStatus />}
              />
              <Route
                path={jsonRoute.Configuracao_Geral_NovoStatus}
                element={<NovoStatus />}
              />

              <Route
                path={jsonRoute.Configuracao_Geral_PerguntasRespostas}
                element={<PerguntasRespostas />}
              >
                <Route
                  path={jsonRoute.Configuracao_Geral_NovaPergunta}
                  element={<NovaPergunta />}
                ></Route>
              </Route>

              <Route
                path={jsonRoute.Configuracao_Geral_Departamento}
                element={<Departamento />}
              >
                <Route
                  path={jsonRoute.Configuracao_Geral_NovoDepartamento}
                  element={<NovoDepartamento />}
                />
              </Route>

              <Route
                path={jsonRoute.Configuracao_Geral_AditivoDeReducaoDeCarencia}
                element={<AditivoDeReducaoDeCarencia />}
              >
                <Route
                  path={
                    jsonRoute.Configuracao_Geral_AditivoDeReducaoDeCarencia_NovoAditivo
                  }
                  element={<NovoAditivo />}
                />
              </Route>

              <Route
                path={jsonRoute.Configuracao_Geral_TipoDeDocumentoArquivo}
                element={<TipoDeDocumentoArquivo />}
              >
                <Route
                  path={jsonRoute.Configuracao_Geral_NovoDocumentoArquivo}
                  element={<NovoDocumentoArquivo />}
                />
              </Route>

              <Route
                path={jsonRoute.Configuracao_Geral_AbreBotoesFormulario}
                element={<AbreBotoesFormulario />}
              />
              <Route
                path={jsonRoute.Administrativo_Manutencao_ComboProdutoServico}
                element={<ComboProdutoServico />}
              />
              <Route
                path={jsonRoute.Cadastro_Combo_Produto_Servico}
                element={<Combo />}
              />
              <Route
                path={jsonRoute.Stepper_Cadastro_Combo_Produto_Servico}
                element={<CadastroComboProduto />}
              />
              <Route
                path={jsonRoute.Funcao_Usuario}
                element={<Funcao_Usuario />}
              />
              {/* <Route path={`${jsonRoute.Funcao_Usuario}/${jsonRoute.Funcao_Usuario_Novo}`} element={<Funcao_Usuario_Novo />} />
              <Route path={`${jsonRoute.Funcao_Usuario}/${jsonRoute.Funcao_Usuario_Edicao}`} element={<Funcao_Usuario_Edicao />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
