import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/icons/css/all.css';
import Status from './pages/Configuracao/Geral/Status';
import PerguntasRespostas from './pages/Configuracao/Geral/PerguntasRespostas';
import Home from './pages';
import { jsonRoute } from './utils/json';
import Departamento from './pages/Configuracao/Geral/Departamento';
import NavBar from './components/Navigator';
import NovaPergunta from './pages/Configuracao/Geral/PerguntasRespostas/NovaPergunta';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={jsonRoute.Configuracao}>
            <Route path={jsonRoute.Geral}>
              <Route path={jsonRoute.Configuracao_Geral_Status} element={<Status />} />
              <Route path={jsonRoute.Configuracao_Geral_PerguntasRespostas} element={<PerguntasRespostas />} >
                <Route path={jsonRoute.Configuracao_Geral_NovaPergunta} element={<NovaPergunta />} />
              </Route>
              <Route path={jsonRoute.Configuracao_Geral_Departamento} element={<Departamento />} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
