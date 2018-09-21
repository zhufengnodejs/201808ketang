import React, { Component } from 'react';
import NavHeader from '@/components/NavHeader';
import profile from '@/images/profile.png';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '@/store/actions/session';
class Reg extends Component {
    handleReg=()=>{
        let username = this.username.value;
        let password = this.password.value;
        let user = {username,password};
        this.props.reg(user);    
    }
    render() {
        return (
            <div className="login">
                <NavHeader title="注册"/>
                <div className="login-content">
                    <div className="login-logo">
                        <img src={profile}/>
                    </div>
                    <ul className="form">
                        <li><input ref={ref=>this.username=ref} placeholder="手机号"/></li>
                        <li><input ref={ref=>this.password=ref} placeholder="密码"/></li>
                        <li><Link to="/login">前往登录</Link></li>
                        <li><button onClick={this.handleReg}>注册</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>state.session,
    actions
)(Reg);