import { Card } from '../Components/cards';
import cardsJson from '../storage/portfolio.json';
import React, { useEffect, useRef } from 'react';

import MainController from '../Classes/mainController';


function Portfolio() {

    const refPortfolio = useRef();
    const refComponent = useRef();
    const refLine = useRef();

    useEffect(() => {
        MainController.init("pf", refPortfolio, refComponent, refLine);
    });

    return (

        <div ref={refPortfolio} aria-label="container" aria-expanded="false" className="container animations">

            <div ref={refLine} aria-hidden="false" className="lineAnim"></div>

            <div className="container--txtHead">
                Portfolio
            </div>

            <div ref={refComponent} aria-hidden="true" className="flex center hide">

                {cardsJson.map((card, index) =>

                    <div key={index + "c"}>
                        <Card
                            {...card}
                        />
                    </div>

                )}

            </div>

        </div>
    );
}

export default Portfolio;