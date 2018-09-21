import React, { Component } from 'react';
import NavHeader from '@/components/NavHeader';
import Alert from '@/components/Alert';
import profile from '@/images/profile.png';
import './index.less';
import {connect} from 'react-redux';
import actions from '@/store/actions/session';
import {Link} from 'react-router-dom';
class Login extends Component {
    handleReg=()=>{
        let username = this.username.value;
        let password = this.password.value;
        let user = {username,password};
        this.props.login(user);    
    }
    render() {
        return (
            <div className="login">
                <NavHeader title="登录"/>
                <div className="login-content">
                    <div className="login-logo">
                        <img src={profile}/>
                    </div>
                    <ul className="form">
                    <li><input ref={ref=>this.username=ref} placeholder="手机号"/></li>
                        <li><input ref={ref=>this.password=ref} placeholder="密码"/></li>
                        <li><Link to="/reg">前往注册</Link></li>
                        <li><button onClick={this.handleReg}>登录</button></li>
                    </ul>
                    <Alert/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Login);