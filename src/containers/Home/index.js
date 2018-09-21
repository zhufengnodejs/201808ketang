import React, { Component,Fragment } from 'react';
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import HomeLessons from './components/HomeLessons';
import { connect } from 'react-redux';
import actions from '@/store/actions/home';
import {loadMore,downRefresh} from '@/utils';
import './index.less'
class Home extends Component {
    componentDidMount(){
        this.props.getSliders();
        this.props.getLessons();
        loadMore(this.mainContent,this.props.getLessons);
        downRefresh(this.mainContent,this.props.refreshLessons);
    }
    render() {
        let { currentCategory, changeCurrentCategory,sliders,lessons } = this.props;
        return (
            <Fragment>
                <HomeHeader
                    currentCategory={currentCategory}
                    changeCurrentCategory={changeCurrentCategory}
                    refreshLessons={this.props.refreshLessons}
                />
                <div className="main-content" ref={ref=>this.mainContent=ref}>
                    <HomeSwipe sliders={sliders}/>
                    <HomeLessons lessons={lessons} getLessons={this.props.getLessons}/>
                </div>
            </Fragment>
        )
    }
}
export default connect(
    state => state.home,
    actions
)(Home);