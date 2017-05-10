import React, { Component } from 'react';
import {
    Tabs,
    Table,
} from 'antd';
import '../styles/heroSkill.less';

const TabPane = Tabs.TabPane;
const dataSource = [{
    key: '1',
    name: ' 蝠翼',
    four: ' 造成伤害的20%转化为自身生命',
    two: '15%攻击力',
}, {
    key: '2',
    name: '阴摩罗',
    four: '击杀获得3点鬼火',
    two: '15%攻击力',
}];

const columns = [{
    title: '名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '4件套属性',
    dataIndex: 'four',
    key: 'four',
}, {
    title: '2件套属性',
    dataIndex: 'two',
    key: 'two',
}];
class heroSkill extends Component {
    handleCallback = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="输出" key="1">
                        <Table dataSource={dataSource} columns={columns} pagination={false} />
                    </TabPane>
                    <TabPane tab="控制" key="2">
                        <Table dataSource={dataSource} columns={columns} pagination={false} />
                    </TabPane>
                    <TabPane tab="防御" key="3">
                        <Table dataSource={dataSource} columns={columns} pagination={false} />
                    </TabPane>
                    <TabPane tab="辅助" key="4">
                        <Table dataSource={dataSource} columns={columns} pagination={false} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default heroSkill;