
import { Card } from '../Components/cards';
import cardsJson from '../storage/portfolio.json';
import React, { useEffect, useRef } from 'react';

import MainControler from '../Classes/mainControler';


function Portfolio() {

    let refPortfolio = useRef();
    let refComponent = useRef();
    let refLine = useRef();


    useEffect(() => {
        const animatorLinePF = new MainControler(refPortfolio, refComponent, refLine, "linePF");
        animatorLinePF.init();
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