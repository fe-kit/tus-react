import React from 'react'
import connect from '../../common/connect'
import Header from '../../components/Header'
import './about.scss'

export default class About extends React.Component {

    render(h) {
        return (
            <div className="about">
                <Header />              
                <a href="#/home">Abouts</a>
                <button onClick={() => {ssss
                    this.props.history.push('/')
                }}>通过函数跳转go to Home</button>
            </div>
        )
    }
}