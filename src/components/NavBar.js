import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    let location = useLocation();
    const [country, setcountry] = useState("INDIA")
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/INDIA">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to={`/${country}`}>Home</Link>
                            </li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to={`/${country}/business`}>Business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to={`/${country}/entertainment`}>Entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to={`/${country}/health`}>Health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`}to={`/${country}/science`}>Science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to={`/${country}/sports`}>Sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`}to={`/${country}/technology`}>Technology</Link></li>
                        </ul>
                        <div className="dropdown">
                            <Link className="btn btn-secondary btn-sm dropdown-toggle " style={{marginRight : "35px"}} to="/INDIA" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {country}
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/INDIA" onClick={()=>{setcountry("INDIA")}}>INDIA</Link></li>
                                <li><Link className="dropdown-item" to="/USA" onClick={()=>{setcountry("USA")}}>USA</Link></li>
                                <li><Link className="dropdown-item" to="/newzeland" onClick={()=>{setcountry("NEWZELAND")}}>NEWZELAND</Link></li>
                                <li><Link className="dropdown-item" to="/CANADA" onClick={()=>{setcountry("CANADA")}}>CANADA</Link></li>
                                <li><Link className="dropdown-item" to="/SouthAfrica" onClick={()=>{setcountry("SouthAfrica")}}>SouthAfrica</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
