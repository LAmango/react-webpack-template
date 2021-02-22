import React from 'react';
import NavBar from "../navigation/navBar";
import {useState} from "../../overmind"

const Layout = props => {
    const state = useState()
    return (
            <div className="bg-purple-400 h-full flex">
                <NavBar/>
                <div className="w-full bg-white rounded-l-3xl flex">
                    {props.children}
                </div>
            </div>
    );
};

export default Layout;