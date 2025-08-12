import { createContext, useCallback, useEffect, useState } from 'react';
import { defaultUserInfo, userInfoAtom ,dadosClienteAtom, assinaturaAtom, defaultAssinatura } from '../../context/jotai';
import { useAtom } from 'jotai';
import { useBrand } from '../BrandContext';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
    const { brandKey } = useBrand();
    const [usuarioLogado, setUsuarioLogado] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [userInfo, setUserInfo] = useAtom(userInfoAtom);
    const [, setDadosCliente] = useAtom(dadosClienteAtom);
    const [, setAssinaturaSelecionada] = useAtom(assinaturaAtom);

    const handleLogout = useCallback((navigateFunction, redirectTo = '/') => {
        setUsuarioLogado(false);
        setUserInfo({ ...defaultUserInfo });
        sessionStorage.removeItem('usuarioLogado');
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('brandKey');
        setDadosCliente({});
        setAssinaturaSelecionada(defaultAssinatura);
        if (navigateFunction) {
            navigateFunction(redirectTo, { replace: true });
        } else {
            window.location.href = redirectTo;
        }
    }, [ setUserInfo, setDadosCliente ]);

    const handleLogin = () => {
        setUsuarioLogado(true);
        sessionStorage.setItem('usuarioLogado', 'true');
        sessionStorage.setItem('brandKey', brandKey);
    };

    useEffect(() => {
        const storedUserIsLoggedIn = sessionStorage.getItem('usuarioLogado') === 'true';
        const storedBrand = sessionStorage.getItem('brandKey');

        if (storedUserIsLoggedIn) {
            if (storedBrand && storedBrand !== brandKey) {
                setUsuarioLogado(false);
                setUserInfo({ ...defaultUserInfo });
                sessionStorage.removeItem('usuarioLogado');
                sessionStorage.removeItem('userInfo');
                sessionStorage.removeItem('brandKey');
                setDadosCliente({});
                setAssinaturaSelecionada(defaultAssinatura);
                return;
            }
            setUsuarioLogado(true);
        }

        setAuthLoading(false);
    }, [brandKey, handleLogout]);

    return (
        <UsuarioContext.Provider value={{
            usuarioLogado,
            userInfo,
            setUserInfo,
            handleLogin,
            handleLogout,
            authLoading
        }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioContext, UsuarioProvider };
