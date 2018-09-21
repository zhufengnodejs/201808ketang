import React, { Component } from 'react';
import './index.less'
import {withRouter} from 'react-router-dom';
//this.props.history
//只有当一个组件是通过路由Route渲染出来的才会有history属性,一般组件是没有这个属性的
//如果想让一个任意的普通 组件，拥有history属性的话，需要用这个组件包裹在withRouter里
class NavHeader extends Component {
    render() {
        return (
            <div className="navheader">
                <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}></i>
                {this.props.title}
            </div>
        )
    }
}
export default withRouter(NavHeader);