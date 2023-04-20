import React, { Component } from 'react'
import { connect } from 'react-redux';
import { decrement_Async, increment_Async } from '../Store/Counter/Counter.action';
import { bindActionCreators } from 'redux';



class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { Counter, increment, decrement } = this.props;
        return (
            <>
                <div>
                    <h1>Counter:{Counter}</h1>
                </div>

                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    console.log({ state })
    return {
        Counter: state.counterReducer.count,
    };
};

const mapDispatchToprops = (dispatch) =>
    bindActionCreators(
        {
            increment: increment_Async,
            decrement: decrement_Async,
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToprops)(Counter);