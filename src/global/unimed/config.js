import { jsonRoute } from '../../utils/json';
import logo from './assets/logo.svg';
import mochupCelular from './assets/mochupCelular.png'

export const unimedConfig = {
    brandKey: 'unimed',
    brandName: 'Unimed',
    assets: {
        logo: logo,
        favicon: '/src/global/unimed/assets/logo.svg',
        mochupCelular: mochupCelular,
    },
    routes: jsonRoute,
};
