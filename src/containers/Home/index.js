import React, { Component,Fragment } from 'react';
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import { connect } from 'react-redux';
import actions from '@/store/actions/home';
import './index.less'
class Home extends Component {
    componentDidMount(){
        this.props.getSliders();
    }
    render() {
        let { currentCategory, changeCurrentCategory,sliders } = this.props;
        return (
            <Fragment>
                <HomeHeader
                    currentCategory={currentCategory}
                    changeCurrentCategory={changeCurrentCategory}
                />
                <div className="main-content">
                    <HomeSwipe sliders={sliders}/>
                </div>
            </Fragment>
        )
    }
}
export default connect(
    state => state.home,
    actions
)(Home);