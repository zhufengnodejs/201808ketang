import React, { Component } from 'react';
import './index.less';
import logo from '@/images/logo.png';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends Component {
    state = {
        menuShow:false
    }
    handleCategoryChange = (event)=>{
        let type = event.target.dataset.type;
        this.props.changeCurrentCategory(type);
        this.props.refreshLessons();
        this.setState({menuShow:false});
    }
    render() {
        let {menuShow} = this.state;
        let {currentCategory,changeCurrentCategory }  = this.props;
        let uiList = (
                <CSSTransition
                  timeout={500}
                  classNames="fade"
                >
                    <ul className="header-menu" onClick={this.handleCategoryChange}>
                            <li data-type="react" className={currentCategory=='react'?'active':''}>React课程</li>
                            <li data-type="vue" className={currentCategory=='vue'?'active':''}>Vue课程</li>
                    </ul>
                </CSSTransition>   
        )
        return (
            <div className="home-header">
                 <div className="header-bar">
                    <img src={logo} alt="LOGO"/>
                    <div className="header-icon" onClick={()=>this.setState({menuShow:!menuShow})}>
                    {
                        menuShow?<i className="iconfont icon-guanbi"></i>
                        :<i className="iconfont icon-uilist"></i>
                    }   
                    </div>
                 </div>  
                 <TransitionGroup>
                 {
                     menuShow&&uiList
                 } 
                  </TransitionGroup>
            </div>
        )
    }
}