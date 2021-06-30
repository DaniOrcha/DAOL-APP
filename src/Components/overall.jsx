import { NavLink } from "react-router-dom";
import { Menu } from './menu';
// import { useLocation } from 'react-router-dom'

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <NavLink to='/' activeClassName="activeLink" exact={true}><i className="fa fa-fw fa-home fa-lg"></i> </NavLink>
                <NavLink to='/Contact' activeClassName="activeLink"><i className="fa fa-handshake-o fa-lg"></i> </NavLink>
                <NavLink to='/Visits' activeClassName="activeLink"><i className="fa fa-comments-o  fa-lg"></i> </NavLink>
                <a href="https://github.com/DaniOrcha/DAOL-APP" rel="noreferrer noopener" target="_blank"><i className="fa fa-github fa-lg"></i> </a>
            </div>
            <Menu />
        </>
    );
}

export function Head(props) {
    return (
        <div className="header">
            <h1>{props.txt[0]}</h1>
            <h2>{props.txt[1]}</h2>
        </div>
    )
}

export function Footer() {

    /* const location = useLocation();
    let test;
    location.pathname === '/' ?
        test = (
            <>
                <h4>Programmed with React. Last full APP coverage:</h4>
                <img src="../resources/fulltest.png" alt="err" /><i className="fa fa-github"></i>
            </>
        )
        :
        test = ""; */



    return (
        <div className="footer" >
            <h5>DAOL ELECTRONICS ®</h5>
            <a href="https://github.com/DaniOrcha/DAOL-APP" rel="noreferrer noopener" target="_blank">
                <img src="../resources/GitHub.png" alt="err" />
            </a>
            {/* {test} */}
        </div>
    );
}

