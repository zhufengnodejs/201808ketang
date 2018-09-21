import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSwipe extends Component {
    render() {
        let swipeOptions = {
            continuous:true //启用无缝轮播
        }
        return (
            <div>
                <ReactSwipe swipeOptions = {swipeOptions}>
                    <div>Panel1</div>
                    <div>Panel2</div>
                    <div>Panel3</div>
                </ReactSwipe>
            </div>
        )
    }
}