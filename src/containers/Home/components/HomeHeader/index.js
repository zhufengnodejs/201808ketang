import React, { Component } from 'react';
import './index.less';
import logo from '@/images/logo.png';
export default class HomeHeader extends Component {
    state = {
        menuShow:false
    }
    render() {
        let {menuShow} = this.state;
        let uiList = (
            <ul className="header-menu">
                    <li>React课程</li>
                    <li>Vue课程</li>
            </ul>
        )
        return (
            <div className="home-header">
                 <div className="header-bar">
                    <img src={logo} alt="LOGO"/>
                    <div className="header-icon">
                    {
                        menuShow?<i className="iconfont icon-guanbi"></i>
                        :<i className="iconfont icon-uilist"></i>
                    }   
                    </div>
                 </div>  
                 {
                     menuShow&&uiList
                 } 
                 
            </div>
        )
    }
}