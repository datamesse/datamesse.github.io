/* PROJECT DATA FOR PORTFOLIO.JS TILES */

import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
   logo_powerbi, logo_python, logo_react, logo_r, logo_sqlserver, logo_tableau,logo_typescript, logo_visualstudio
 } from '../data/assets';
import img_portfoliowebsitereact from '../assets-portfolio/img-2021-09-portfolio-website-react.png';
import img_singaporerentpowerbi from '../assets-portfolio/img-2021-10-power-bi-quarterly-singapore-rental-prices-by-currency.png';
import img_followthesunpowerbi from  '../assets-portfolio/img-2021-11-power-bi-follow-the-sun-customer-support.png';
import img_internationalmarketplacessis from '../assets-portfolio/img-2022-01-sql-server-integration-services-international-marketplace.png';
import img_internationalmarketplacepowerbi from '../assets-portfolio/img-2022-04-power-bi-international-marketplace-python-deneb.png';

const portfolio = [
   {
      title: 'International marketplace report',
      description: 'A Power BI report incorporating Python profit predictions and custom Deneb (JSON-based) visualisations.',
      stamp: '2022-04',
      stack: logo_powerbi,
      photo: img_internationalmarketplacepowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/International-Marketplace-profit-report-using-Python-and-Deneb/m-p/2480550#M7154',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/blob/main/International%20Marketplace%20sales/Power%20Query%20and%20Deneb%20code.md',
      tags: ["Power BI", "Python", "Deneb", "Vega-Lite", "Power Query"]
   },
   {
      title: 'International marketplace dataset',
      description: 'An SQL Server Integration Services package that merges different Microsoft and Tableau sample sales datasets into a single data warehouse.',
      stamp: '2022-01',
      stack: logo_sqlserver,
      photo: img_internationalmarketplacessis,
      siteURL: 'https://datamesse.github.io/#/post/1641906000',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/International%20Marketplace%20sales',
      tags: ["T-SQL", "ETL", "SQL Server Integration Services"]
   },
   {
      title: 'Follow the sun customer support report',
      description: 'A Power BI report showing teamwork and performance for global customer service. Incorporates dynamic daylight saving offsets, which are not inherent in Power BI time intelligence (at the time of writing).',
      stamp: '2021-11',
      stack: logo_powerbi,
      photo: img_followthesunpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Follow-the-sun-customer-service-support/m-p/2168279',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates',
      tags: ["Power BI", "Power Query", "DAX", "Excel"]
   },
   {
      title: 'Singapore rental prices report',
      description: 'A Power BI report showing trends of Singapore rent by quarter, flat type, and major currency conversions.',
      stamp: '2021-10',
      stack: logo_powerbi,
      photo: img_singaporerentpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Quarterly-Singapore-median-rental-prices-by-currency/m-p/2125424',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Singapore%20rental%20prices',
      tags: ["Power BI", "Power Query", "DAX"]
   },
   {
      title: 'Website portfolio and blog',
      description: 'My portfolio website coded using HTML, CSS, and JavaScript with React.js and GitHub Pages',
      stamp: '2021-09',
      stack: logo_html,
      photo: img_portfoliowebsitereact,
      siteURL: 'https://datamesse.github.io/',
      codeURL: 'https://github.com/datamesse/datamesse.github.io/',
      tags: ["HTML","CSS","React.js"]
   }
]

export default portfolio;