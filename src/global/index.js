import { drhojeConfig } from './drhoje/config';
import { unimedConfig } from './unimed/config';

const themes = {
  drhoje: drhojeConfig,
  unimed: unimedConfig,
};

const DEFAULT_BRAND = 'drhoje';

export const getBrandKeyFromPath = () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const brandKey = pathSegments[0] || DEFAULT_BRAND;

    return themes[brandKey] ? brandKey : DEFAULT_BRAND;
}

export const getBrandConfig = (brandKey) => {
    return themes[brandKey] || themes[DEFAULT_BRAND];
}
