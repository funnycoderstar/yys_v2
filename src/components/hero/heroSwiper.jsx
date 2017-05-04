import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../../styles/heroSwiper.less';

class heroSwiper extends Component {
    render() {
        return (
            <div className="heroSwiper">
                <Carousel autoplay dots="false">
                    <div><img src={require('../../assets/banner1.jpg')}alt="" /></div>
                    <div><img src={require('../../assets/banner2.jpg')}alt="" /></div>
                    <div><img src={require('../../assets/banner3.jpg')}alt="" /></div>
                    <div><img src={require('../../assets/banner4.jpg')}alt="" /></div>
                </Carousel>
            </div>
        );
    }
}

export default heroSwiper;