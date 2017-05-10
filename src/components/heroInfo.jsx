import React, { Component } from 'react';

class heroInfo extends Component {

    render() {
        return (
            <div className="heroInfo">
                <div className="heroWrap">
                    <div className="heroImg">
                        <img src={require('../assets/hei.jpg')} />
                    </div>
                    <p>黑童子</p>
                </div>
                <div className="heroWrap">
                    <div className="heroImg">
                        <img src={require('../assets/hei.jpg')} />
                    </div>
                    <p>黑童子</p>
                </div>
                <div className="heroWrap">
                    <div className="heroImg">
                        <img src={require('../assets/hei.jpg')} />
                    </div>
                    <p>黑童子</p>
                </div>
            </div>
        );
    }
}

export default heroInfo;