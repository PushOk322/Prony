import React from "react";
import { useState, useEffect } from 'react';
import Dashboard from "./Dashboard";
const SideBar = ({ components, setCurrentComponent }) => {

    const [currentNav, setCurrentNav] = useState(1);


    const [settingsDrop, setSettingsDrop] = useState(false);

    return (
        <>
            <div className="sidebar">
                <img src="./img/main-logo.svg" alt="" className="sidebar__logo" />
                <div className="sidebar__nav">
                    <div className={components === 0 ? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(0) }}>
                        <img src="./img/nav-icon-1.svg" alt="" className={components === 0 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Dashboard
                        </div>
                    </div>
                    <div className={components === 1 ? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(1)}}>
                        <img src="./img/nav-icon-2.svg" alt="" className={components === 1 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Boards
                        </div>
                    </div>
                    <div className={components === 2 ? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(2) }}>
                        <img src="./img/nav-icon-3.svg" alt="" className={components === 2 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Posts
                        </div>
                    </div>
                    <div className={components === 3 ? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(3) }}>
                        <img src="./img/nav-icon-4.svg" alt="" className={components === 3 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Statuses
                        </div>
                    </div>
                    <div className={components === 4 ? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(4) }}>
                        <img src="./img/nav-icon-5.svg" alt="" className={components === 4 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Users
                        </div>
                    </div>
                    <div className={components === 5? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(5) }}>
                        <img src="./img/nav-icon-6.svg" alt="" className={components === 5 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Changelog
                        </div>
                    </div>
                    <div className={settingsDrop === true ? "sidebar__nav-box drop-active" : "sidebar__nav-box"} >
                        <div className="sidebar__preview" onClick={() => { if (settingsDrop === true) { setSettingsDrop(false) } else { setSettingsDrop(true) } }}>
                            <img src="./img/nav-icon-7.svg" alt="" className={settingsDrop === true ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                            <div className="sidebar__nav-text">
                                Settings
                            </div>

                            <img src="./img/dropdown-arrow.svg" alt="" className={settingsDrop === true ? "sidebar__arrow active" : "sidebar__arrow"} />
                        </div>

                        <div className={settingsDrop === true ? "sidebar__dropdown active" : "sidebar__dropdown"}>
                            <div className={components === 6 ? "sidebar__drop-row active" : "sidebar__drop-row"} onClick={() => { setCurrentComponent(7) }}>
                                Settings 1
                            </div>
                            <div className={components === 7 ? "sidebar__drop-row active" : "sidebar__drop-row"} onClick={() => { setCurrentComponent(8) }}>
                                Settings 2
                            </div>
                            <div className={components === 8 ? "sidebar__drop-row active" : "sidebar__drop-row"} onClick={() => { setCurrentComponent(9) }}>
                                Settings 3
                            </div>
                        </div>
                    </div>
                    <div className={components === 9 ? "sidebar__nav-box active" : "sidebar__nav-box"} onClick={() => { setCurrentComponent(10) }}>
                        <img src="./img/nav-icon-8.svg" alt="" className={components === 9 ? "sidebar__nav-icon active" : "sidebar__nav-icon"} />
                        <div className="sidebar__nav-text">
                            Integrations
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SideBar;