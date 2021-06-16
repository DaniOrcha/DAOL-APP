import React from 'react';
 
import Portfolio from '../Components/Portfolio';
import About from '../Components/About'; 

import '../Styles/roadmapstyle.css';
import '../Styles/animations.css';
 

import { RoadMap } from '../Components/RoadMap';

import Head from '../Components/Header';

class MainPage extends React.Component {

    render() {

        let docTitle = (document.title = "Daniel");

        return (
            <>
                {docTitle}

                <div className="bodyContainer">

                    <Head
                        txt={[
                            "Daniel Orcha Lorenzo",
                            "Programador de software & Diseño de sistemas automatizados"
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