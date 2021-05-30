

import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <Link to='/'><i className="fa fa-fw fa-home"></i> Inicio</Link>
            <Link to='/Contact'><i className="fa fa-handshake-o"></i> Contacto</Link>
            <Link to='/Visits'><i className="fa fa-comments-o"></i> Visitas</Link>  
        </div>
    ); 
}
export default Navbar;