const initialState = {
  todos: [
    {
      id: Date.now(),
      title: "react를 공부합시다.",
      content: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: Date.now(),
      title: "redux를 공부합시다.",
      content: "챕터 5부터 챕터 10까지 학습",
      isDone: false,
    },
  ],
};
export const addTodo = (payload) => {
  return { type: ADD_TODOLIST, payload };
};

const ADD_TODOLIST = "ADD_TODOLIST";

function todos(state = initialState, action) {
  console.log("들어왔니?", state);
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default: // need this for default case
      return state;
  }
}

export default todos;
