// reducer przyjmuje 2 rzeczy:

// 1. ACTION - czyli co sie stało
// 2. kopie "current state"

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;