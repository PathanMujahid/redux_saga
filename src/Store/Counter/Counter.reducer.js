const initailstate = {
    count: 0

}
const CounterReducer = (state = initailstate, action) => {
    switch (action.type) {
        case "INCREMENT":

            return { ...state, count: state.count + 1 };

        case "DECREMENT":

            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export default CounterReducer;