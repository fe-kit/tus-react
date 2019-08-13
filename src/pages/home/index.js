import React from 'react';
import PropTypes from 'prop-types';
import connect from '../../common/connect';
import * as Actions from './action';
import globalActions from '../../action';
import Header from '../../components/Header';
import logo from '../../../static/logo.png';
import './style.scss';

const propTypes = {
  location: PropTypes.object.isRequired,
  syncAdd: PropTypes.func.isRequired,
  asyncAdd: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};
@connect(
  (state) => ({
    ...state,
  }),
  {
    ...Actions,
    ...globalActions,
  },
)
class Home extends React.Component {
  render() {
    const {
      syncAdd, asyncAdd, reset, home: { counter }, location,
    } = this.props;
    return (
      <div className="home">
        <Header {...location} />
        <img className="logo" alt="logo" src={logo} />
        <h1>Welcome to tus-cli app!</h1>
        <button type="button" onClick={() => syncAdd()}> sync </button>
        {counter}
        <br />
        <button type="button" onClick={() => asyncAdd()}> async </button>
        {counter}
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          reset
        </button>
      </div>
    );
  }
}

export default Home;
Home.propTypes = propTypes;
