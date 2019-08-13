import { connect } from 'react-redux';

const decorator = (mapStateToProps, mapDispatchToProps) => connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default decorator;
