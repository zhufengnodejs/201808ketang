import React, { Component } from 'react';
import profile from '@/images/profile.png';
import './index.less';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="profile_bg">
                    <img src={profile}/>
                    {
                        this.props.user?this.props.user.username: <Link to="/login">登录</Link>
                    }
                   
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state.session
)(Profile);