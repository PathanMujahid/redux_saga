const INCREMENT = 'INCREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
const DECREMENT = 'DECREMENT';
const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

const increment = () => ({ type: INCREMENT });

const increment_Async = () => {
    console.log("Action Called")
    return { type: INCREMENT_ASYNC }
};

const decrement = () => ({ type: DECREMENT });

const decrement_Async = () => ({ type: DECREMENT_ASYNC });

export {

    INCREMENT,
    DECREMENT,
    INCREMENT_ASYNC,
    DECREMENT_ASYNC,
    increment,
    increment_Async,
    decrement_Async,
    decrement,




}