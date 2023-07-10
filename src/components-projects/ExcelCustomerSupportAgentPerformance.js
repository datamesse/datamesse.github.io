import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { logo_excel } from '../data/assets';

export default function ExcelCustomerSupportAgentPerformance() {

    const script = document.createElement("script");

    script.src = "https://onedrive.live.com/embed?resid=DA6E81822ACC224B%21116&authkey=%21AM967yoy5TdZEY8&em=3&wdItem=%22'Dashboard'!A%3AXFD%22&wdDivId=%22myExcelDiv%22&wdActiveCell=%22'Dashboard'!B10%22&wdAllowInteractivity=1&wdAllowTyping=1&action=embedview&wdbipreview=true";
    script.async = true;

    document.body.appendChild(script);

    return (
        <div className='container'>
       
            <div className="interface">
                <Header mp3credit='♪♪♪ Now playing: Time Flows by Evgeny_Bardyuzha @ pixabay.com' mp3='https://github.com/datamesse/datamesse.github.io/raw/main/src/assets-theme/music-evgeny-bardyuzha-time-flows.mp3' />

                <div className='post'>
                    <div className='post-panel'>
                        <div className='post-overlay'></div>
                        <div className='post-title-banner'></div>
                        <div className='post-title'>
                            <p>Excel project: Customer Support Agent Performance Dashboard</p>
                        </div>
                        <div className='separator-glow'></div>
                        <div className='post-date'>
                            <p>20 June 2022</p>
                        </div>
                        <div className='post-body'>



                            <p>You can download this Excel report from here:</p>
                                <ul>
                                    <li>
                                        <a href='https://github.com/datamesse/data-visualisation-datasets/raw/main/Support%20ticket%20updates/Customer%20Support%20Agent%20Performance%20Dashboard.xlsx?raw=true'>
                                        https://github.com/datamesse/data-visualisation-datasets/raw/main/Support%20ticket%20updates/Customer%20Support%20Agent%20Performance%20Dashboard.xlsx
                                        </a>
                                    </li>
                                </ul>

                                <p>It connects to my GitHub repository data, so please click "Enable content" to access that External Data Connection.</p>

                                <p>
                                    <img src='https://github.com/datamesse/datamesse.github.io/blob/main/src/assets-portfolio/img-2022-06-excel-customer-support-agent-performance.gif?raw=true'></img>
                                </p>

                                <p>This Excel report is a redux of my "Follow the sun customer support" Power BI report, the latter you can find here:</p>

                                <ul>
                                    <li>
                                        <a href='https://community.powerbi.com/t5/Data-Stories-Gallery/Follow-the-sun-customer-service-support/m-p/2168279'>
                                        https://community.powerbi.com/t5/Data-Stories-Gallery/Follow-the-sun-customer-service-support/m-p/2168279
                                        </a>
                                    </li>
                                </ul>

                                <br></br>

                                <p>Most of the code used is similar to my Power BI report, except most of the DAX measures now include USERELATIONSHIP due to a data model improvement. You can find some of that code in my Github here:</p>

                                <ul>
                                    <li>
                                        <a href='https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates#excel-report-model'>
                                        https://github.com/datamesse/data-visualisation-datasets/tree/main/Support%20ticket%20updates#excel-report-model
                                        </a>
                                    </li>
                                </ul>

                                <br></br>

                                <p>The Excel report is also embedded below using the OneDrive free version.</p>
                                <p>Due to OneDrive's restrictions with External Data Connections and Camera Tools, the report cannot dynamically display support agent images nor refresh its data connection.
                                So it is recommended you download the file and open it from a desktop version of Excel.
                                </p>

                                <br></br>
                                <br></br>

                                <p><b>References</b></p>
                                <p>These resources were used to create this Excel report:</p>
                                <ul>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=gK2yBpiITvI'>YouTube Tutorial on how to map an Excel cell value as an input parameter for Power Query by ExcelIsFun</a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=6qOL69bIQz8'>YouTube Tutorial on how to create a Call Center Performance Dashboard in Excel by Other Level's</a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=T4sZSXdQ4Vg&t=1395s'>YouTube Tutorial on how to dynamically display photos ased on slicer selection in Excel by Other Level's</a>
                                    </li>
                                    <li>
                                        <a href='https://www.youtube.com/watch?v=uvA-U9FKgPw&t=385s'>YouTube Tutorial on how to embed Excel workbook to web via OneDrive Personal free version by MyOnlineTrainingHub</a>
                                    </li>
                                    <li>
                                        <a href='https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx'>Stackoverflow Question on how to run HTML script tag equivalents inside a React component</a>
                                    </li>
                                </ul>

                                <br></br>

                                <div id="myExcelDiv" className='embedded-excel'></div>



                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            <div className="bg-beige">
                <div className="bg-beige-tiles">
                    <center>
                        <div className='gear-beige-1 gear-1-spin'></div>
                        <div className='gear-beige-2 gear-2-spin'></div>
                    </center>
                </div>
            </div>

        </div>
    )
}
