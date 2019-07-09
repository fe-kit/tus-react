import React from 'react';
import connect from '../../common/connect';
import * as Actions from './action';
import Header from '../../components/Header';
import './style.scss';
import logo from '../../../static/logo.png';

@connect(
  (state) => ({
    ...state
  }),
  {
    ...Actions
  }
)
export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header {...this.props.location} />
        <img className="logo" alt="logo" src={logo} />
        <h1>Welcome to tus-cli app!</h1>
        <button onClick={() => this.props.syncAdd()}> sync </button>：{' '}
        {this.props.home.counter}
        <br />
        <button onClick={() => this.props.asyncAdd()}> async </button>：
        {this.props.home.counter}
      </div>
    );
  }
}
