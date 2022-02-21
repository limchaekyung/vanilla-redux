import { connect } from "react-redux";
import React from "react";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
}
export default connect(mapStateToProps)(Detail);
