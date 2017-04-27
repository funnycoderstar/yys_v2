const React = require('react');
const ReactDOM = require('react-dom');

class TabsControl extends React.Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        };
    }

    check_tittle_index(index) {
        return index === this.state.currentIndex ? 'Tab_tittle active' : 'Tab_tittle';
    }

    check_item_index(index) {
        return index === this.state.currentIndex ? 'Tab_item show' : 'Tab_item';
    }

    render() {
        return (
            <div>
                {/* 动态生成Tab导航*/}
                <div className="Tab_tittle_wrap">
                    {React.Children.map(this.props.children, (element, index) => (
                            /* 箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={() => { this.setState({ currentIndex: index }); }} className={this.check_tittle_index(index)}>{element.props.name}</div>
                        ))}
                </div>
                {/* Tab内容区域*/}
                <div className="ab_item_wrap">
                    {React.Children.map(this.props.children, (element, index) => (
                            <div className={this.check_item_index(index)}>{element}</div>
                        ))}
                </div>
            </div>
        );
    }
}

class TabComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <TabsControl>
                    <div name="社会新闻">
                        社会新闻的内容
                    </div>
                    <div name="体育世界">
                        体育世界的内容
                    </div>
                    <div name="娱乐圈">
                        娱乐圈的内容
                    </div>
                </TabsControl>
            </div>
        );
    }
}

ReactDOM.render(<TabComponent />, document.getElementById('app'));
