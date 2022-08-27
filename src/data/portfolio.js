/* PROJECT DATA FOR PORTFOLIO.JS TILES */

import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
   logo_powerbi, logo_python, logo_react, logo_r, logo_sqlserver, logo_tableau,logo_typescript, logo_visualstudio
 } from '../data/assets';
import img_portfoliowebsitereact from '../assets-portfolio/img-2022-05-portfolio-website-react.gif';
import img_singaporerentpowerbi from '../assets-portfolio/img-2021-10-power-bi-quarterly-singapore-rental-prices-by-currency.gif';
import img_followthesunpowerbi from  '../assets-portfolio/img-2021-11-power-bi-follow-the-sun-customer-support.gif';
import img_internationalmarketplacessis from '../assets-portfolio/img-2022-01-sql-server-integration-services-international-marketplace.png';
import img_internationalmarketplacepowerbi from '../assets-portfolio/img-2022-04-power-bi-international-marketplace-python-deneb.gif';
import img_customercupportagentperformance from '../assets-portfolio/img-2022-06-excel-customer-support-agent-performance.png';
import img_satellitelaunchoverview from '../assets-portfolio/img-2022-08-satellite-launch-overview.gif';

const portfolio = [
   {
      title: 'Satellite launch overview report',
      description: 'A Power BI report showing actively monitored satellites using a custom Deneb scatterplot visual.',
      stamp: '2022-08',
      shortdate: 'AUG 2022',
      stack: logo_powerbi,
      photo: img_satellitelaunchoverview,
      siteURL: 'https://app.powerbi.com/view?r=eyJrIjoiYzI0OWMwNTUtYWY3ZS00Nzg3LThlYzUtN2NiOTNkYzQ3MTM0IiwidCI6IjM5MTA5NGVmLTAxN2YtNGUwMy1hM2NjLTQ1OGQ3N2I1YjBjZSJ9',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Satellite%20launch%20overview',
      tags: ["Power BI", "Deneb", "Vega-Lite", "Power Query", "DAX"]
   },
   {
      title: 'Customer support agent performance dashboard',
      description: 'An Excel dashboard comparing overall team and individual staff KPIs. Includes a cell filter into Power Query and dynamically displays photos.',
      stamp: '2022-06',
      shortdate: 'JUN 2022',
      stack: logo_excel,
      photo: img_customercupportagentperformance,
      siteURL: 'https://datamesse.github.io/#/project/ExcelCustomerSupportAgentPerformance',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates',
      tags: ["Excel", "Power Query", "Power Pivot", "DAX"]
   },
   {
      title: 'International marketplace profit report',
      description: 'A Power BI report incorporating Python profit predictions and custom Deneb (JSON-based) visualisations.',
      stamp: '2022-04',
      shortdate: 'APR 2022',
      stack: logo_powerbi,
      photo: img_internationalmarketplacepowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/International-Marketplace-profit-report-using-Python-and-Deneb/m-p/2480550',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/blob/main/International%20Marketplace%20sales/Power%20Query%20and%20Deneb%20code.md',
      tags: ["Power BI", "Python", "Deneb", "Vega-Lite", "Power Query"]
   },
   {
      title: 'International marketplace dataset',
      description: 'An SQL Server Integration Services package that merges different Microsoft and Tableau sample sales datasets into a single data warehouse.',
      stamp: '2022-01',
      shortdate: 'JAN 2022',
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
      shortdate: 'NOV 2021',
      stack: logo_powerbi,
      photo: img_followthesunpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Follow-the-sun-customer-service-support/m-p/2168279',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates',
      tags: ["Power BI", "Power Query", "DAX"]
   },
   {
      title: 'Singapore rental prices report',
      description: 'A Power BI report showing trends of Singapore rent by quarter, flat type, and major currency conversions.',
      stamp: '2021-10',
      shortdate: 'OCT 2021',
      stack: logo_powerbi,
      photo: img_singaporerentpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Quarterly-Singapore-median-rental-prices-by-currency/m-p/2125424',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Singapore%20rental%20prices',
      tags: ["Power BI", "Power Query", "DAX"]
   },
   {
      title: 'Website portfolio and blog',
      description: 'My portfolio website coded using HTML, CSS, and JavaScript with React.js and GitHub Pages.',
      stamp: '2021-09',
      shortdate: 'SEP 2021',
      stack: logo_html,
      photo: img_portfoliowebsitereact,
      siteURL: 'https://datamesse.github.io/',
      codeURL: 'https://github.com/datamesse/datamesse.github.io/',
      tags: ["HTML","CSS","React.js"]
   }
]

export default portfolio;