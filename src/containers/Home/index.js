import React, { Component } from 'react';
import HomeHeader from './components/HomeHeader';
import {connect} from 'react-redux';
import actions from '@/store/actions/home';
class Home extends Component{
    render(){
        let {currentCategory,changeCurrentCategory}  = this.props;
        return (
            <div className="home">
                <HomeHeader
                  currentCategory={currentCategory}
                  changeCurrentCategory={changeCurrentCategory}
                />
            </div>
        )
    }
}
export default connect(
    state=>state.home,
    actions
)(Home);