import React from "react";
import { SidebarData } from './SideBarData';

function SideNav() {
    return (
        <div className="sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=>{
                            window.location.pathname=val.link
                        }}>
                            <div id="title">
                                {val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default SideNav;