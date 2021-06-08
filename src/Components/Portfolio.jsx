
import { Card } from '../Components/cards';
import PortofioData from '../storage/portfolio.json';

function Portfolio() {
    return (
        <div id="portfolioId" className="container animations">
            <div id="lineAnimPF" className="lineAnim"></div>
            <div className="fontHead">
                Portfolio
                </div>
            <div id="framesContainer" className="flex center hide">

                <Card
                    link={PortofioData.Unity.link}
                    src={PortofioData.Unity.src}
                    tittle={PortofioData.Unity.tittle}
                    description={PortofioData.Unity.description}
                />
                <Card
                    link={PortofioData.Eth.link}
                    src={PortofioData.Eth.src}
                    tittle={PortofioData.Eth.tittle}
                    description={PortofioData.Eth.description}
                />
                <Card
                    link={PortofioData.IoT.link}
                    src={PortofioData.IoT.src}
                    tittle={PortofioData.IoT.tittle}
                    description={PortofioData.IoT.description}
                />
                <Card
                    link={PortofioData.Autom.link}
                    src={PortofioData.Autom.src}
                    tittle={PortofioData.Autom.tittle}
                    description={PortofioData.Autom.description}
                />
                <Card
                    link={PortofioData.Elec.link}
                    src={PortofioData.Elec.src}
                    tittle={PortofioData.Elec.tittle}
                    description={PortofioData.Elec.description}
                />

            </div>
        </div>
    );
}

export default Portfolio;