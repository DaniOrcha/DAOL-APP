 
import Navbar from '../Components/navbar'; 

function Head(props) {
    var head;

    if (props.lines === "2") {
        head = (
            <>
                < Navbar />
                <div className="Shadow">
                    <h1>{props.line1}</h1>
                    <h2>{props.line2}</h2>
                </div>
            </ >
        );
    }
    else {
        head = (
            <>
                < Navbar />
                <div className="Shadow">
                    <h1>{props.line1}</h1>
                </div>
            </>
        );
    }

    return (head);
}
export default Head;
 