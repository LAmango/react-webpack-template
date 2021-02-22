import React from 'react';
import {FiArchive, FiFileText, FiSettings, FiUsers} from "react-icons/fi";
import IconButton from "../common/iconButton";
import { useNavigate } from "@reach/router";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="h-full p-4 text-white flex flex-col">
            <FiFileText className="text-3xl m-2"/>
            <div className="flex flex-col space-y-2 mt-16">
                <IconButton
                    label="storage"
                    className="group-hover:bg-purple-300 transition duration-300 p-2 rounded-lg"
                    Icon={<FiArchive className="text-3xl"/>}
                    onClick={() => navigate("storage")}
                />
                <IconButton
                    label="users"
                    className="group-hover:bg-purple-300 transition duration-300 p-2 rounded-lg"
                    Icon={<FiUsers className="text-3xl"/>}
                />
                <IconButton
                    label="settings"
                    className="group-hover:bg-purple-300 transition duration-300 p-2 rounded-lg"
                    Icon={<FiSettings className="text-3xl"/>}
                    onClick={() => navigate("settings")}
                />
            </div>
        </div>
    );
};

export default NavBar;