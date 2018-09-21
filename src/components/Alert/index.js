import React, { Component } from 'react';
import './index.less'
import {connect} from 'react-redux';
class Alert extends Component {
    render() {
        return (
            this.props.success?
            <div className="alert alert-success">
                {this.props.success}
            </div>:this.props.error?<div className="alert alert-error">
                {this.props.error}
            </div>:null
        )
    }
}
export default connect(
    state=>state.session
)(Alert);