import react from "react-dom/test-utils";

const initialState = {
  todos: [
    {
      id: 0,
      title: "React",
      content: "리액트는 어려워",
      isDone: false,
    },
    {
      id: 1,
      title: "Redux",
      content: "리덕스는 더 어려워",
      isDone: true,
    },
  ],
  todo: {
    id: 1,
    title: "Redux",
    content: "리덕스는 더 어려워",
    isDone: true,
  },
};

export const addTodo = (payload) => {
  // console.log("페이로드add", payload);
  return { type: ADD_TODOLIST, payload };
};

export const deleteTodo = (payload) => {
  // console.log("페이로드delete", payload);
  return { type: DELETE_TODOLIST, id: payload };
};

export const changeTodo = (payload) => {
  return { type: CHANGE_TODOLIST, id: payload };
};

export const getDetail = (id) => {
  return {
    type: GET_DETAIL,
    id: id,
  };
};

export const eDiT = (payload) => {
  console.log("페이로드임", payload);
  return {
    type: EDIT,
    id: payload.id,
    title: payload.title,
    content: payload.content,
    isDone: payload.isDone,
  };
};

const ADD_TODOLIST = "ADD_TODOLIST";
const DELETE_TODOLIST = "DELETE_TODOLIST";
const CHANGE_TODOLIST = "CHANGE_TODOLIST";
const GET_DETAIL = "GET_DETAIL";
const EDIT = "EDIT";

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
        todos: state.todos.filter((todos) => todos.id !== parseInt(action.id)),
      };
    case CHANGE_TODOLIST:
      state.todos.map((item, i, arr) => {
        if (item.id === action.id) {
          // item.isDone ? (item.isDone = false) : (item.isDone = true);
          arr[i].isDone ? (arr[i].isDone = false) : (arr[i].isDone = true);
        }
      });
      return {
        ...state,
        todos: [...state.todos],
      };
    case GET_DETAIL:
      // return {
      //   ...state,
      //   todo: state.todos.find((todo) => {
      //     return todo.id === action.payload;
      //   }),
      // };
      console.log("겟디테일");
      const [selTodo] = state.todos.filter((item) => {
        return item.id === action.id;
      });
      console.log("겟디테일", selTodo);
      return { ...state, todo: selTodo };

    case EDIT:
      state.todos.map((item, i, arr) => {
        if (item.id == action.id) {
          arr[i].title = action.title;
          arr[i].content = action.content;
        }
      });
      return {
        ...state,
        todos: [...state.todos],
      };

    default: // need this for default case
      return state;
  }
}

export default todos;
