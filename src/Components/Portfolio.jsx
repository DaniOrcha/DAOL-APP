
import { Card } from '../Components/cards';
import cardsJson from '../storage/portfolio.json';

import React, {  useEffect , useRef } from 'react';
import { initPortfolio } from '../Functions/portfolio';

function Portfolio() {

    let refPortfolio = useRef();
    let refCards = useRef();

    useEffect(() => { 
        initPortfolio(refPortfolio, refCards);
    }, []);



    return (
        <div ref={refPortfolio} className="container animations">
            <div id="lineAnimPF" className="lineAnim"></div>
            <div className="fontHead">
                Portfolio
                </div>
            <div ref={refCards} className="flex center hide">
 

            {cardsJson.map((card, index) =>
                <div key={index + "c"}>
                    <Card
                      link={card.link}
                      src={card.src}
                      tittle={card.tittle}
                      description={card.description}
                    />
                </div>
            )} 

            </div>
        </div>
    );
}

export default Portfolio;