import React, { Component } from 'react'
import { multiplyNumbers } from '../redux/actions/counterActions';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'

class MultiplyNumber extends Component {

    render() {




        return (
            <div>
                <br />
                <br />
                <label for="sayi"></label>
                <input onChange={(e) => this.props.dispatch(multiplyNumbers(Number(document.getElementById("sayi").value)))} type="number" id='sayi' placeholder='sayi giriniz' />
                <br />

                <Button
                    color="success"
                >
                    Multiply
                </Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(multiplyNumbers, dispatch) };
}

export default connect(mapDispatchToProps)(MultiplyNumber)