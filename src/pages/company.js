import React from 'react';
import {useState, useActions} from "../overmind"
import {FiFileText, FiArchive, FiUsers, FiSettings} from "react-icons/fi"
import IconButton from "../components/common/iconButton";
import Layout from "../components/common/layout";

const Company = props => {
    return (
        <Layout {...props}/>
    );
};

export default Company;