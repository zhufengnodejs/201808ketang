import React, { Component } from 'react';
import './index.less'
export default class HomeLessons extends Component {
    render() {
        let {list,hasMore,loading} = this.props.lessons;
        return (
            <div className="home-lessons">
                <div>
                    <i className="iconfont icon-kecheng-copy"></i>
                    <span>全部课程</span>
                </div>
                {
                    list.map((item,index)=>(
                        <div key={index} className="lesson">
                            <img src={item.poster} alt={item.title}/>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}