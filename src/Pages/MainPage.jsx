import React from 'react';

// import Head from '../Components/Header';
import Portfolio from '../Components/Portfolio';
import About from '../Components/About';
// import Footer from '../Components/Footer';

import '../Styles/roadmapstyle.css';
import '../Styles/animations.css';

import '../Functions/main.js';
import '../Functions/about.js';
import '../Functions/portfolio.js';
import '../Functions/roadmap.js';

import { RoadMap } from '../Components/RoadMap';

import Head from '../Components/Header';

class MainPage extends React.Component {

    componentDidMount() {
        document.title = "Daniel";
    }

    render() {

        return (
            <>
                <div className="bodyContainer">

                    <Head
                        txt={[
                            "Daniel Orcha Lorenzo",
                            "Programador de software + Diseño de sistemas automatizados"
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