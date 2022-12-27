/* PROJECT DATA FOR PORTFOLIO.JS TILES */

import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
   logo_powerbi, logo_python, logo_react, logo_r, logo_sqlserver, logo_tableau,logo_typescript, logo_visualstudio
 } from '../data/assets';
import img_portfoliowebsitereact from '../assets-portfolio/img-2022-12-portfolio-website-react-v3.gif';
import img_singaporerentpowerbi from '../assets-portfolio/img-2021-10-power-bi-quarterly-singapore-rental-prices-by-currency.gif';
import img_followthesunpowerbi from  '../assets-portfolio/img-2021-11-power-bi-follow-the-sun-customer-support.gif';
import img_internationalmarketplacessis from '../assets-portfolio/img-2022-01-sql-server-integration-services-international-marketplace-trimmed.png';
import img_internationalmarketplacepowerbi from '../assets-portfolio/img-2022-04-power-bi-international-marketplace-python-deneb.gif';
import img_customercupportagentperformance from '../assets-portfolio/img-2022-06-excel-customer-support-agent-performance.gif';
import img_satellitelaunchoverview from '../assets-portfolio/img-2022-08-satellite-launch-overview.gif';
import img_internationalmarketplaceexcel from '../assets-portfolio/img-2022-10-excel-international-marketplace-profit-forecast.gif';
import img_appsourcedenebmaps from '../assets-portfolio/img-2022-11-power-bi-appsource-deneb-maps.gif';

const portfolio = [
   {
      title: 'AppSource Deneb maps report',
      description: 'Power BI report that demonstrates custom AppSource Deneb mapping using embedded geometry JSON data.',
      stamp: '2022-11',
      shortdate: 'NOV 2022',
      tech: 'POWER BI',
      stack: logo_powerbi,
      photo: img_appsourcedenebmaps,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/AppSource-Deneb-Maps/m-p/2930366',
      codeURL: 'https://datamesse.github.io/#/post/1669381200',
      tags: ["Power BI", "Deneb", "Vega-Lite", "Vega"]
   },
   {
      title: 'International marketplace profit dashboard',
      description: 'Excel dashboard that uses an OOTB exponential smoothing algorithm to forecast profit.',
      stamp: '2022-10',
      shortdate: 'OCT 2022',
      tech: 'EXCEL',
      stack: logo_excel,
      photo: img_internationalmarketplaceexcel,
      siteURL: 'https://datamesse.github.io/#/project/ExcelInternationalMarketplaceProfitForecast',
      codeURL: '',
      tags: ["Excel", "Power Pivot", "DAX", "Forecasting"]
   },
   {
      title: 'Satellite launch overview report',
      description: 'Power BI report showing actively monitored satellites using a custom Deneb scatterplot visual.',
      stamp: '2022-08',
      shortdate: 'AUG 2022',
      tech: 'POWER BI',
      stack: logo_powerbi,
      photo: img_satellitelaunchoverview,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Satellite-launch-overview/m-p/2730077',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Satellite%20launch%20overview',
      tags: ["Power BI", "Deneb", "Vega-Lite", "Power Query", "DAX"]
   },
   {
      title: 'Customer support agent performance dashboard',
      description: 'Excel dashboard that compares individual support staff KPIs. Includes a cell filter into Power Query to dynamically display photos.',
      stamp: '2022-06',
      shortdate: 'JUN 2022',
      tech: 'EXCEL',
      stack: logo_excel,
      photo: img_customercupportagentperformance,
      siteURL: 'https://datamesse.github.io/#/project/ExcelCustomerSupportAgentPerformance',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates',
      tags: ["Excel", "Power Query", "Power Pivot", "DAX"]
   },
   {
      title: 'International marketplace profit report',
      description: 'Power BI report that incorporates Python profit predictions and custom Deneb visualisations.',
      stamp: '2022-04',
      shortdate: 'APR 2022',
      tech: 'POWER BI',
      stack: logo_powerbi,
      photo: img_internationalmarketplacepowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/International-Marketplace-profit-report-using-Python-and-Deneb/m-p/2480550',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/blob/main/International%20Marketplace%20sales/Power%20Query%20and%20Deneb%20code.md',
      tags: ["Power BI", "Python", "Deneb", "Vega-Lite", "Power Query", "Forecasting"]
   },
   {
      title: 'International marketplace dataset',
      description: 'SQL Server Integration Services package that merges Microsoft and Tableau sample datasets into a single warehouse.',
      stamp: '2022-01',
      shortdate: 'JAN 2022',
      tech: 'SQL SERVER',
      stack: logo_sqlserver,
      photo: img_internationalmarketplacessis,
      siteURL: 'https://datamesse.github.io/#/post/1641906000',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/International%20Marketplace%20sales',
      tags: ["T-SQL", "ETL", "SQL Server Integration Services"]
   },
   {
      title: 'Follow the sun customer support report',
      description: 'Power BI report that summarises global customer service teamwork and performance. Incorporates dynamic daylight saving offsets.',
      stamp: '2021-11',
      shortdate: 'NOV 2021',
      tech: 'POWER BI',
      stack: logo_powerbi,
      photo: img_followthesunpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Follow-the-sun-customer-service-support/m-p/2168279',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates',
      tags: ["Power BI", "Power Query", "DAX"]
   },
   {
      title: 'Singapore rental prices report',
      description: 'Power BI report that shows trends of Singapore rent by quarter, flat type, and major currency conversions.',
      stamp: '2021-10',
      shortdate: 'OCT 2021',
      tech: 'POWER BI',
      stack: logo_powerbi,
      photo: img_singaporerentpowerbi,
      siteURL: 'https://community.powerbi.com/t5/Data-Stories-Gallery/Quarterly-Singapore-median-rental-prices-by-currency/m-p/2125424',
      codeURL: 'https://github.com/datamesse/data-visualisation-datasets/tree/main/Singapore%20rental%20prices',
      tags: ["Power BI", "Power Query", "DAX"]
   },
   {
      title: 'Website portfolio and blog',
      description: 'This website is coded from scratch using HTML, CSS, React.js and GitHub Pages.',
      stamp: '2021-09',
      shortdate: 'SEP 2021',
      tech: 'REACT.JS',
      stack: logo_react,
      photo: img_portfoliowebsitereact,
      siteURL: '',
      codeURL: 'https://github.com/datamesse/datamesse.github.io/',
      tags: ["HTML","CSS","React.js"]
   }
]

export default portfolio;