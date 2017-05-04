import React, { Component } from 'react';
import '../styles/alert.less';

class alert extends Component {
    render() {
        return (
            <div className="alertContainer">
                <div className="alertContent">
                    <div className="content">
                        {this.props.alertcontent}
                    </div>
                    <div className="alertBtn">
                        <p onClick={this.props.handleClick}>取消</p>
                        <p onClick={this.props.handleDelete}>确定</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default alert;