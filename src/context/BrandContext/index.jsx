import { createContext, useContext, useMemo, useEffect } from 'react';
import { getBrandKeyFromPath, getBrandConfig } from '../../global';

const BrandContext = createContext(null);

export const BrandProvider = ({ children }) => {
    const brandKey = useMemo(() => getBrandKeyFromPath(), []);
    const brandConfig = useMemo(() => getBrandConfig(brandKey), [brandKey]);

    useEffect(() => {
        const existingLink = document.getElementById('brand-theme');
        if (existingLink) {
            existingLink.remove();
        }

        import(`../../global/${brandKey}/styles.css`);

        const favicon = document.querySelector("link[rel~='icon']");
        if (favicon) {
            favicon.href = brandConfig.assets.favicon;
        }

        document.title = brandConfig.brandName;

    }, [brandKey, brandConfig]);


    return (
        <BrandContext.Provider value={brandConfig}>
            {children}
        </BrandContext.Provider>
    );
};

export const useBrand = () => {
    const context = useContext(BrandContext);
    if (!context) {
        throw new Error('useBrand deve ser usado dentro de um BrandProvider');
    }
    return context;
};
