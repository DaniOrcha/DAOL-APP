import React from 'react';

import { Head } from '../Components/overall';
import { RoadMap } from '../Components/RoadMap';
import Portfolio from '../Components/Portfolio';
import About from '../Components/About';



class MainPage extends React.Component {

    render() {

        return (
            <>
                {document.title = "Daniel"}

                <div className="bodyContainer">

                    <Head
                        txt={[
                            "Daniel Orcha Lorenzo",
                            "Programador de software & Diseño de sistemas de producción automatizados"
                        ]}
                    />

                    <RoadMap
                    />

                    <Portfolio
                    />

                    <About
                    />

                </div>
            </>
        );
    }
}

export default MainPage;