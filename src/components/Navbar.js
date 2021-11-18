import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand text-white font-weight-bold" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars shadow-none" style={{color:'white'}}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">Market</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Industry</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Politics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Wealth</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Tech</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Jobs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">Openion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">NRI</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white">ET NOW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
