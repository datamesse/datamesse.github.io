import assets from '../data/assets';
import { githubURL, powerbiURL, tableauURL } from './data';

const { logo_github, logo_powerbi, logo_tableau } = assets;

export const LinkData=[
    {
        icon: logo_powerbi,
        link: powerbiURL
    },
    {
        icon: logo_github,
        link: githubURL 
    },
    {
        icon: logo_tableau,
        link: tableauURL
    }
];