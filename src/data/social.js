import { avatar, background,
    icon_calendarlinespen, icon_charthistogram, icon_crosscircle, icon_diploma, icon_edit, icon_magicwand, icon_menuburger, icon_paperplane, 
    logo_github, logo_linkedin, logo_powerbi, logo_tableau, logo_twitter, 
    logoblue_github, logoblue_linkedin, logoblue_powerbi, logoblue_tableau, logoblue_twitter
} from '../data/assets';
import { displayName, ascii0, ascii1, ascii2, ascii3, ascii4, bannerDescription, githubURL, powerbiURL, tableauURL, twitterURL } from '../data/data';

export const SocialData=[
    {
        platform: "LinkedIn",
        icon: logo_linkedin,
        link: ascii0 + ascii3 + ascii4
    },
    {
        platform: "GitHub",
        icon: logo_github,
        link: githubURL 
    },
    {
        platform: "Twitter",
        icon: logo_twitter,
        link: twitterURL
    },
    {
        platform: "Power BI",
        icon: logo_powerbi,
        link: powerbiURL
    },
    {
        platform: "Tableau",
        icon: logo_tableau,
        link: tableauURL
    }
];