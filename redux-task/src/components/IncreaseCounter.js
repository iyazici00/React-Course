import React, { Component } from 'react'

import { increaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'


class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <Button
                    color="success"
                    onClick={(e) => this.props.dispatch(increaseCounter())}
                >
                    Increase
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter)