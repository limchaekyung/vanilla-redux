import React, { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import {add} from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
    
  }
  return (
    <>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id}/>)}</ul>
    </>
  );
}

function mapStateProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch){
  return {
    // addToDo: (text) => dispatch(actionCreators.addToDo(text))
    addToDo: (text) => dispatch(add(text))
  };
}
export default connect(mapStateProps, mapDispatchToProps)(Home);
