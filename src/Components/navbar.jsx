

import { NavLink } from "react-router-dom";
import { Menu } from './menu';

function Navbar() {
    return (
        <>
        <div className="navbar">
            <NavLink to='/' activeClassName="activeLink" exact={true}><i className="fa fa-fw fa-home"></i> Inicio</NavLink>
            <NavLink to='/Contact' activeClassName="activeLink"><i className="fa fa-handshake-o"></i> Contacto</NavLink>
            <NavLink to='/Visits' activeClassName="activeLink"><i className="fa fa-comments-o"></i> Visitas</NavLink>
           

        </div> 
        <Menu  />
        </>
    );
}
export default Navbar;