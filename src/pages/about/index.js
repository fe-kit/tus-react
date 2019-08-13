import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from './action';
import connect from '../../common/connect';
import Header from '../../components/Header';
import './style.scss';

const propTypes = {
  location: PropTypes.object.isRequired,
  onAddButton: PropTypes.func.isRequired,
  about: PropTypes.object.isRequired,
};
@connect(
  (state) => ({ ...state }),
  { ...Actions },
)
class About extends React.Component {
  render() {
    const { location, onAddButton, about: { counter } } = this.props;
    return (
      <div>
        <Header {...location} />
        <button type="button" onClick={() => onAddButton()}> sync </button>
        {counter}
        <br />
      </div>
    );
  }
}
export default About;
About.propTypes = propTypes;
