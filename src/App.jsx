import { BrowserRouter, Routes, Route } from 'react-router';
import Status from './pages/Configuracao/Geral/Status';
import Home from './pages';
import { jsonRoute } from './utils/json';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path={jsonRoute.Configuracao_Geral_Status} element={<Status />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
