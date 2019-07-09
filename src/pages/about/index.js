import React from 'react';
import connect from '../../common/connect';
import * as Actions from './action';
import Header from '../../components/Header';
@connect(
  (state) => ({ ...state }),
  { ...Actions }
)
export default class About extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props.location} />
        <button onClick={() => this.props.onAddButton()}> sync </button>：
        {this.props.about.counter} <br />
      </div>
    );
  }
}
