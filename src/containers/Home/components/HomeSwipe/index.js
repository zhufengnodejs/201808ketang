import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
export default class HomeSwipe extends Component {
    render() {
        let swipeOptions = {
            continuous:true //启用无缝轮播
        }
        let {sliders} = this.props;
        return (
            <div className="home-swipe">
               {
                   sliders.length>0?(
                    <ReactSwipe className="carousel" swipeOptions = {swipeOptions}>
                    {
                        sliders.map((item,index)=>(
                            <div key={index}>
                                <img src={item} alt={item}/>
                            </div>
                        ))
                    }
                    </ReactSwipe>
                   ):null
               }
            </div>
        )
    }
}