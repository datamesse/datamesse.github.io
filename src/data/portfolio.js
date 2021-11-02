/* PROJECT DATA FOR PORTFOLIO.JS TILES */

import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
   logo_powerbi, logo_python, logo_react, logo_r, logo_tableau,logo_typescript, logo_visualstudio
 } from '../data/assets';
import img_portfoliowebsitereact from '../assets-portfolio/img-2021-09-portfolio-website-react.png';
import img_singaporerentpowerbi from '../assets-portfolio/img-2021-10-power-bi-quarterly-singapore-rental-prices-by-currency.png';
import img_followthesunpowerbi from  '../assets-portfolio/img-2021-11-power-bi-follow-the-sun-customer-support.png';


const portfolio = [
   {
      title: 'Follow the sun customer support',
      description: 'Power BI report showing teamwork and performance for global customer service',
      stamp: '2021-11',
      stack: logo_powerbi,
      photo: img_followthesunpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Follow-the-sun-customer-service-support/m-p/2168279',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates'
   },
   {
      title: 'Singapore rental prices',
      description: 'Power BI report showing trends of Singapore rent by quarter, major currency, and flat type',
      stamp: '2021-10',
      stack: logo_powerbi,
      photo: img_singaporerentpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Quarterly-Singapore-median-rental-prices-by-currency/m-p/2125424',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Singapore%20rental%20prices'
   },
   {
       title: 'Project portfolio',
       description: 'My portfolio website coded using HTML, CSS, and JavaScript with React.js and GitHub Pages',
       stamp: '2021-09',
       stack: logo_html,
       photo: img_portfoliowebsitereact,
       siteURL: 'https://datamesse.github.io/',
       codeURL: 'https://github.com/datamesse/datamesse.github.io/'
    }
]

export default portfolio;