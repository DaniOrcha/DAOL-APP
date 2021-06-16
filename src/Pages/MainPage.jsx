import React from 'react';
 
import Head from '../Components/Header';
import { RoadMap } from '../Components/RoadMap';
import Portfolio from '../Components/Portfolio';
import About from '../Components/About'; 

import '../Styles/animations.css';
 


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