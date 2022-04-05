import React from 'react';
import "../Assets/css/style.css"
import "../Assets/css/style.css.map"
import "../Assets/css/skin-modes.css"
import "../Assets/css/transparent-style.css"
import "../Assets/css/icons.css"
import "../Assets/css/dark-style.css"
import "../Assets/css/animated.css"
import "../Assets/css/transparent-style.scss"
import { useState } from 'react'
import pic from "../Assets/images/users/0.jpg"
import { NavLink, useHistory, useParams } from "react-router-dom";

function Header(props) {
    const url = useParams();
    var history = useHistory();
    const [apps, setApps] = useState(false);
    const [driver, setDriver] = useState(false);
    const [cargo, setCargo] = useState(false);
    const [dashboard, setDashboard] = useState("1");
    const [linkId, setLinkId] = useState()
    const [lang, setLang] = useState()



    return <>
        <div className="app-header header sticky" style={{ marginBottom: "-74px" }}>
            <div className="container-fluid main-container">
                <div className="d-flex">
                    <a
                        aria-label="Hide Sidebar"
                        className="app-sidebar__toggle"
                        data-bs-toggle="sidebar"
                        onClick={props.onChange}
                        style={{ cursor: "pointer" }}
                    />
                    {/* sidebar-toggle*/}
                    <a className="logo-horizontal " >

                        <img
                            src={require("../Assets/images/brand/logo.png")}
                            className="header-brand-img desktop-logo"
                            alt="logo"
                        />
                        <div className='mobil-logo-center'>
                            <img
                                src={require("../Assets/images/brand/logo-rocoo.png")}
                                className="header-brand-img light-logo1"
                                alt="logo"
                                style={{ maxHeight: "100px" }}
                            />
                        </div>
                    </a>
                    {/* LOGO */}
                    <div className="d-flex order-lg-2 ms-auto header-right-icons">
                        <div className="d-flex country">
                            <a
                                className="nav-link icon text-center"
                                style={{ cursor: 'default' }}
                            >
                            </a>
                        </div>
                        <div className="d-flex order-lg-2">
                            <div className="dropdown d-flex profile-1">
                                <span className='text-capitalize'>username</span>
                                <img
                                    src={pic}
                                    alt="profile-user"
                                    className="avatar  profile-user brround cover-image"
                                    style={{ marginLeft: "15px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jumps-prevent" style={{ paddingTop: 74 }} />
        {/* /app-Header */} {/*APP-SIDEBAR*/}
        <div className="sticky is-expanded" style={{ marginBottom: "-74px" }}>

            <div
                className="app-sidebar__overlay active"
                data-bs-toggle="sidebar"
            />
            <div className="app-sidebar ps ps--active-y open" style={{ backgroundColor: '' }}>

                <div className="side-header">

                    <a className="header-brand1" >
                        <img
                            src={require("../Assets/images/brand/logo.png")}
                            className="header-brand-img desktop-logo"
                            alt="logo"
                        />
                        <img
                            src={require("../Assets/images/brand/logo-1.png")}
                            className="header-brand-img toggle-logo"
                            alt="logo"
                        />
                        <img
                            src={require("../Assets/images/brand/logo-rocoo.png")}
                            className="header-brand-img light-logo"
                            alt="logo"
                            style={{ height: "80px", width: "100px" }}
                        />
                        <img
                            src={require("../Assets/images/brand/logo-denebi.png")}
                            className="header-brand-img light-logo1"
                            alt="logo"
                            style={{ height: "40px", width: "110px" }}

                        />

                    </a>
                    {/* LOGO */}
                </div>
                <div className="main-sidemenu is-expanded" >

                    <div
                        className="slide-left disabled active is-expanded d-none"
                        id="slide-left"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >

                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                        </svg>
                    </div>

                    <ul className="side-menu open" style={{ marginLeft: 0, marginTop: "100px" }}>
                        <li className={(linkId === "1" ? " clicked-card card img-card is-expanded" : "card ")} onClick={e => setLinkId(e.target.id)}>
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/home"
                            >
                                <i className="fe fe-home me-3" style={{ color: 'orange' }} />
                                <span className="side-menu__label mb-1" id='1'>Home</span>
                            </NavLink>
                        </li>

                        <li className={(linkId === "2" ? " clicked-card card img-card is-expanded" : "card ")} onClick={e => setLinkId(e.target.id)}>
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/campaign"
                            >
                                <i className="fe fe-slack me-3" style={{ color: 'blue' }} />
                                <span className="side-menu__label mb-1" id="2"> Kampanyalar</span>
                            </NavLink>
                        </li>
                        <li className={(linkId === "3" ? " clicked-card card img-card is-expanded" : "card ")} onClick={e => setLinkId(e.target.id)}>
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/admin"
                            >
                                <i className="fe fe-users me-3" style={{ color: 'red' }} />
                                <span className="side-menu__label mb-1" id="3">Market </span>
                            </NavLink>
                        </li>

                        <li className={(linkId === "4" ? " clicked-card card img-card is-expanded" : "card ")} onClick={e => setLinkId(e.target.id)}>
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/admin"
                            >
                                <i className="fe fe-truck me-3" style={{ color: 'green' }} />
                                <span className="side-menu__label mb-1" id="4">Fişler</span>
                            </NavLink>
                        </li>
                        <li className="slide is-expanded" >
                            <NavLink
                                className="side-menu__item"
                                data-bs-toggle="slide"
                                to="/business"
                            >
                                <i className="side-menu__icon fe fe-log-out" />
                                <span className="side-menu__label" >Çıkış Yap </span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="slide-right" id="slide-right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#7b8191"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                        >

                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                        </svg>
                    </div>
                </div>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                    <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                    />
                </div>
                <div className="ps__rail-y" style={{ top: 0, height: 746, right: 0 }}>
                    <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 633 }}
                    />
                </div>
            </div>
            {/*/APP-SIDEBAR*/}
        </div>
        <div className="jumps-prevent" style={{ paddingTop: 74 }} />




    </>
}

export default Header;
