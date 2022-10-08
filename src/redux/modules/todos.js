const initialState = {
  todos: [
    {
      id: 0,
      title: "React",
      content: "히히하하호호",
      isDone: false,
    },
    {
      id: 1,
      title: "Redux",
      content: "후후히히허허",
      isDone: true,
    },
  ],
};

export const addTodo = (payload) => {
  console.log("페이로드", payload);
  return { type: ADD_TODOLIST, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODOLIST, payload };
};

const ADD_TODOLIST = "ADD_TODOLIST";
const DELETE_TODOLIST = "DELETE_TODOLIST";

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    case DELETE_TODOLIST:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default: // need this for default case
      return state;
  }
}

export default todos;
