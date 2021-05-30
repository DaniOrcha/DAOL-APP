 
import Navbar from '../Components/navbar'; 

function Head(props) {
    var head;

    if (props.lines === "2") {
        head = (
            <div>
                < Navbar />
                <div className="Shadow">
                    <h1>{props.line1}</h1>
                    <h2>{props.line2}</h2>
                </div>
            </div >
        );
    }
    else {
        head = (
            <div>
                < Navbar />
                <div className="Shadow">
                    <h1>{props.line1}</h1>
                </div>
            </div>
        );
    }

    return (head);
}
export default Head;

/*
                 <div className="Shadow">
                    <h1>Daniel Orcha Lorenzo</h1>
                    <h2>Programador de software & Diseño de sistemas automatizados</h2>
                </div>

 */