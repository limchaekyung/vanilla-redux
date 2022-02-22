// import {createStore} from "redux";
import {configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit"

/* const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return{
        type: ADD,
        text
    }
}
const deleteToDo = (id) => {
    return{
        type: DELETE,
        id: parseInt(id)
    }
} */

/* const reducer = (state = [], action) => {
    switch(action.type){
        // case ADD: 
        case addToDo.type:
            // return[{text: action.text, id: Date.now()}, ...state];
            return[{text: action.payload, id: Date.now()}, ...state];

        // case DELETE:
        case deleteToDo.type:
            // return state.filter(toDo => toDo.id !== action.id);
            return state.filter(toDo => toDo.id !== action.payload);

        default:
            return state;
    }
} */

/* const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
// addToDo: function, addToDO.type: text, addToDo(): object
// action.payload: action에게 보내고 싶어하는 정보(더이상 text, id를 가지고 있지 않음)

const reducer = createReducer([], {
    // 1. switch를 사용하지 않음
    // 2. state를 mutate(새로운 state를 만드는 대신 직접 변형) - addToDo
    //      redux toolkit이 immer 아래에서 돌아가기 때문
    //      push는 아무것도 return하지 않음
    // 3. return하기 위해서는 새로운 state object 사용 - deleteToDo
    [addToDo]: (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    },
    [deleteToDo]: (state, action) => {
        return state.filter(toDo => toDo.id !== action.payload)
    }

}) */

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({text: action.payload, id: Date.now()});
        },
        remove: (state, action) => {
            return state.filter(toDo => toDo.id !== action.payload)
        }
    }
});

// const store = createStore(reducer);
// const store = configureStore({reducer});
// const store = configureStore({reducer: toDos.reducer});

/* export const actionCreators = {
    addToDo,
    deleteToDo
} */

export const {
    add, remove
} = toDos.actions;

// export default store;
export default configureStore({reducer: toDos.reducer});