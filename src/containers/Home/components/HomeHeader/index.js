import React, { Component } from 'react';
import './index.less';
import logo from '@/images/logo.png';
export default class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header">
                 <div className="header-bar">
                    <img src={logo} alt="LOGO"/>
                    <div className="header-icon">
                        <i className="iconfont icon-uilist"></i>
                        <i className="iconfont icon-guanbi"></i>
                    </div>
                 </div>   
                 <div className="header-menu">
                 
                 </div>
            </div>
        )
    }
}