import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { UsuarioContext } from '../context/UsuarioContext';
import { jsonRoute } from './json';

const ProtectedRoute = ({ children }) => {
    const { usuarioLogado, authLoading } = useContext(UsuarioContext);
    const location = useLocation();

    if (authLoading) return null;

    if (!usuarioLogado) {
        const path = location.pathname;

        if (!sessionStorage.getItem('intendedRoute')) {
            sessionStorage.setItem('intendedRoute', path + location.search + location.hash);
        }

        if (path.includes(jsonRoute.Empresarial_Area)) {
            return <Navigate to={`/${jsonRoute.Empresarial_Login}`} replace />;
        } else if (path.includes(jsonRoute.Entidade_Area)) {
            return <Navigate to={`/${jsonRoute.Entidade_Login}`} replace />;
        } else if (path.includes(jsonRoute.Prestador_Area)) {
            return <Navigate to={`/${jsonRoute.Prestador_Login}`} replace />;
        } else if (path.includes(jsonRoute.Consultor_Area)) {
            return <Navigate to={`/${jsonRoute.Consultor_Login}`} replace />;
        } else {
            return <Navigate to={`/${jsonRoute.Cliente_Login}`} replace />;
        }
    }

    return children;
};

export default ProtectedRoute;