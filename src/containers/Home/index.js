import React, { Component } from 'react';
import HomeHeader from './components/HomeHeader';
export default class Home extends Component{
    render(){
        return (
            <div className="home">
                <HomeHeader/>
            </div>
        )
    }
}