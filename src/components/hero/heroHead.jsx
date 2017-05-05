import React, { Component } from 'react';
import '../../styles/heroHead.less';

class heroHead extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }
    handleSearch = () => {
        console.log(this.context.router.history.push('/search'));
    }

    render() {
        return (
            <div className="heroHead">
                <div className="searchInput" onClick={this.handleSearch}>
                    <i className="icon iconSearch">&#xe62c;</i>
                    <p className="searchHero">搜索式神</p>
                </div>
            </div>
        );
    }
}

export default heroHead;
