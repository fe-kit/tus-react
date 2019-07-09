import React from 'react';
import connect from '../../common/connect';
import * as Actions from './action';
import './home.scss';
import Header from '../../components/Header';

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
        <Header />
        <a href="#/about"> Home </a>
        {this.props.home.counter}{' '}
        <button onClick={() => this.props.onAddButton()}> add </button>{' '}
      </div>
    );
  }
}
