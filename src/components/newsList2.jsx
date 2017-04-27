import React from 'react';

class NewsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                { tabName: '社会新闻', id: 1 },
                { tabName: '体育世界', id: 2 },
                { tabName: '娱乐圈', id: 3 },
            ],
            currentIndex: 1,
        };
    }
    componentDidMount() {

    }
    tabChoiced = (id) => {
        // tab切换到方法
        this.setState({
            currentIndex: id,
        });
    }
    render() {
        const isBox1Show = this.state.currentIndex === 1 ? 'block' : 'none';
        const isbox2Show = this.state.currentIndex === 2 ? 'block' : 'none';
        const isbox3Show = this.state.currentIndex === 3 ? 'block' : 'none';

        const tabList = this.state.tabs.map((res, index) => {
            // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            const tabStyle = res.id === this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
            return <li key={index} onClick={this.tabChoiced} className={tabStyle}>{res.tabName}</li>;
        });
        return (
            <div className="listWrap">
                <ul className="subNavWrap">
                    {tabList}
                </ul>
                <div className="newsList">
                    <div style={{ display: isBox1Show }} >
                        社会新闻
                    </div>
                    <div style={{ display: isBox2Show }}>
                        体育世界
                    </div>
                    <div style={{ display: isBox3Show }}>
                        娱乐圈
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsList;
