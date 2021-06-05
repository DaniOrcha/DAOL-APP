import React from 'react';
 

class RoadMap extends React.Component {
    render() {
        return (
            <div id="RoadMapId" className="container animations">

                <div id="lineAnimRM" className="lineAnim"></div>
                <div className="fontHead">RoadMap</div>

                <div id="RoadMapTree" style={{ visibility: "hidden" }}>

                    <div id="boxData">
                        <div className="dragIco">
                            <img src="resources/slots/drag_ico.png" alt="err" />
                        </div>
                        <div id="boxDate">Ruta de aprendizaje
                            </div>
                        <div id="boxTitle">
                        </div>
                        <div id="boxDescription">
                        </div>
                    </div>

                    <div id="ico0" className="boxIcon">
                        <img src="resources/slots/react.png" className="imgIco" alt="err" />
                    </div>

                    <div id="ico1" className="boxIcon">
                        <img src="resources/slots/unity.png" className="imgIco" alt="err" />
                    </div>

                    <div id="ico2" className="boxIcon">
                        <img src="resources/slots/ethereum.png" className="imgIco" alt="err" />
                    </div>

                    <div id="ico3" className="boxIcon">
                        <img src="resources/slots/iot.png" className="imgIco" alt="err" />
                    </div>

                    <div id="ico4" className="boxIcon">
                        <img src="resources/slots/robot.png" className="imgIco" alt="err" />
                    </div>

                    <div id="ico5" className="boxIcon">
                        <img src="resources/slots/web.png" className="imgIco" alt="err" />
                    </div>

                    <div id="ico6" className="boxIcon">
                        <img src="resources/slots/spectrum.png" className="imgIco" alt="err" />
                    </div>

                </div>

            </div> 
        );
    }
}
export default RoadMap;