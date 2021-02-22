import React from 'react';
import Layout from "../components/common/layout";
import Search from "../components/common/search";

const Storage = props => {
    return (
        <Layout title="Storage" {...props}>
            <div className="p-6">
                <h2 className="text-2xl mb-4">Storage</h2>
                <button aria-label="recents" className="focus:outline-none text-md text-blue-400">Recent</button>
                <button aria-label="recents" className="focus:outline-none text-md text-blue-400">Starred</button>
            </div>
            <div className="w-full bg-purple-50 rounded-l-3xl p-6">
                <Search/>
            </div>
        </Layout>
    );
};

export default Storage;