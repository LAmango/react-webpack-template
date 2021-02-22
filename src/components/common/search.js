import React from 'react';
import {FaSearch} from "react-icons/fa";

const Search = () => {
    return (
        <div className="focus-within:shadow text-purple-200 focus-within:text-purple-400 py-2 px-4 flex items-center rounded-lg space-x-4 bg-white w-64">
           <FaSearch />
        <input
            className="bg-transparent focus:outline-none text-black"
            placeholder="Search..."
        />
        </div>
    );
};

export default Search;