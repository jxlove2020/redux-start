import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import TodoForm from "../components/TodoForm";

export default connect(
	(state) => ({}),
	(dispatch) => ({
		add: (text) => {
			dispatch(addTodo(text));
		},
	})
)(TodoForm);
