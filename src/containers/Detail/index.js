import React, { Component,Fragment } from 'react';
import {Redirect} from 'react-router-dom';
import './index.less'
import NavHeader from '@/components/NavHeader';
export default class Detail extends Component {
    render() {
        let lesson = this.props.location.state;
        return (
            <Fragment>
                <NavHeader title="课程详情"/>
                {
                     lesson?(
                        <div className="lesson-detail">
                          <img src={lesson.poster} />
                          <p>{lesson.title}</p>
                         <p>{lesson.price}</p>
                       </div>
                    ):<Redirect to="/"/>
                }
            </Fragment>
        )
    }
}