
import { Card } from '../Components/cards';
import cardsJson from '../storage/portfolio.json';
import React, { useEffect, useRef } from 'react';

import { AnimatorLine } from '../Class/linesAnimator';


function Portfolio() {

    let refPortfolio = useRef();
    let refCards = useRef();
    let refLine = useRef();

    const animatorLinePF = new AnimatorLine(refPortfolio, refCards, refLine, "pf");

    useEffect(() => {
        animatorLinePF.init();
    });

    return (

        <div ref={refPortfolio} className="container animations">

            <div ref={refLine} id="lineAnimPF" className="lineAnim"></div>

            <div className="fontHead">
                Portfolio
            </div>

            <div ref={refCards} className="flex center hide">

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