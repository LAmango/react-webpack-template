import React from 'react';
import Layout from "../components/common/layout";

const Settings = props => {
    return (
        <Layout title="Settings" {...props}>
            <div className="w-64 p-6 text-2xl">test</div>
            <div className="w-full bg-purple-50 rounded-l-3xl p-6">
                test
            </div>
        </Layout>
    );
};

export default Settings;