import { logo_aws, logo_azure, logo_css, logo_excel, logo_html, logo_javascript, logo_mongodb, logo_nodejs,
         logo_powerbi, logo_python, logo_react, logo_r, logo_tableau,logo_typescript, logo_visualstudio
       } from '../data/assets';

const portfolio = [
    {
        title: 'data_messe Portfolio',
        description: 'My portfolio site which I designed and built from scratch using React.js and GitHub Pages package.',
        stack: { logo_react },
        siteURL: 'https://datamesse.github.io/',
        codeURL: 'https://github.com/datamesse/datamesse.github.io/'
    },
    {
        title: 'Test 1',
        description: 'This is a test sentence.',
        stack: { logo_react },
        siteURL: 'https://datamesse.github.io/',
        codeURL: 'https://github.com/datamesse/datamesse.github.io/'
    },
    {
        title: 'Test 2',
        description: 'This is another test sentence. The quick bron fox ran away from the hungry dog.',
        stack: { logo_react },
        siteURL: 'https://datamesse.github.io/',
        codeURL: 'https://github.com/datamesse/datamesse.github.io/'
    }
]

function Projects() {
  return (
    <div className='projects'>
        <center>
        <h2>Projects</h2>
            <div className='project-set'>
            {
                portfolio.map(function(port, index){
                    return (
                        <div key={index} className='project-tile'> 
                            <h3>{port.title}</h3>
                            <p>{port.description}</p>
                            <a href={ port.siteURL } target="_blank">SITE</a>
                            <a href={ port.codeURL } target="_blank">CODE</a>
                        </div>
                    )
                })
            }
            </div>
        </center>
    </div>
  )
}

export default Projects