import { connect } from 'react-redux'

const decorator = (mapStateToProps, mapDispatchToProps) => {
    return connect(mapStateToProps, mapDispatchToProps)
}

export default decorator