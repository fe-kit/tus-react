import React from 'react';
import connect from '../../common/connect';
import * as Actions from './action';
import { rootReset } from '../../action';
import Header from '../../components/Header';
import logo from '../../../static/logo.png';
import './style.scss';

@connect(
  (state) => ({
    ...state
  }),
  {
    ...Actions,
    rootReset
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
        <button
          onClick={() => {
            console.info(this);
            this.props.rootReset();
          }}
        >
          reset
        </button>
      </div>
    );
  }
}
