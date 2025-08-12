import { jsonRoute } from '../../utils/json';
import logo from './assets/logo.svg';
import logoBranca from './assets/logoBranco.png';
import mochupCelular from './assets/mochupCelular.png'

export const drhojeConfig = {
    brandKey: 'drhoje',
    brandName: 'Dr. Hoje',
    assets: {
        logo: logo,
        logoAlternativa: logoBranca,
        favicon: '/src/global/drhoje/assets/logo.svg',
        mochupCelular: mochupCelular,
    },
    routes: jsonRoute,
};
