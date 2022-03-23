import React from "react";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import TestContainer from "./TestContainer";

function Content() {
    const { TabPane } = Tabs;
    function callback(key) {
        console.log(key);
    }

    const Demo = () => (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Releases" key="1">
                <TestContainer />
            </TabPane>
            <TabPane tab="Manage Releases" key="2">
                Manage Releases
            </TabPane>
            <TabPane tab="Content Releases" key="3">
                Content Releases
            </TabPane>
        </Tabs>
    );
    return <Demo />;
}

export default Content;
