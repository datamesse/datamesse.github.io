/* PROJECT DATA FOR PORTFOLIO.JS TILES */

import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
   logo_powerbi, logo_python, logo_react, logo_r, logo_tableau,logo_typescript, logo_visualstudio
 } from '../data/assets';
import img_portfoliowebsitereact from '../assets-portfolio/img-2021-09-portfolio-website-react.png';
import img_singaporerentpowerbi from '../assets-portfolio/img-2021-10-power-bi-quarterly-singapore-rental-prices-by-currency.png';

const portfolio = [
   {
      title: 'Singapore rental prices',
      description: 'Power BI report showing trends of Singapore rent by quarter, major currency, and flat type',
      stamp: '2021-10',
      stack: logo_powerbi,
      photo: img_singaporerentpowerbi,
      siteURL: 'https://app.powerbi.com/view?r=eyJrIjoiNzFjZTM5MmYtZWU4OC00MmE4LWFkMGQtOTE0NWI3MThhZWYyIiwidCI6IjM5MTA5NGVmLTAxN2YtNGUwMy1hM2NjLTQ1OGQ3N2I1YjBjZSJ9',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/blob/main/Singapore%20rental%20prices/Data%20visualisation%20code.md'
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