import { BrowserRouter, Routes, Route } from 'react-router';
import Status from './pages/Configuracao/Geral/Status';
import PerguntasRespostas from './pages/Configuracao/Geral/PerguntasRespostas';
import Home from './pages';
import { jsonRoute } from './utils/json';
import Departamento from './pages/Configuracao/Geral/Departamento';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={jsonRoute.Configuracao}>
            <Route path={jsonRoute.Geral}>
              <Route path={jsonRoute.Configuracao_Geral_Status} element={<Status />} />
              <Route path={jsonRoute.Configuracao_Geral_PerguntasRespostas} element={<PerguntasRespostas />} />
              <Route path={jsonRoute.Configuracao_Geral_Departamento} element={<Departamento />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
