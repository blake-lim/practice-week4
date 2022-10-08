import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import todos from "../redux/modules/todos";

const List = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  console.log("투드즈 언디파인", todos);

  return (
    <STList>
      <STListLeft>
        <div style={{ backgroundColor: "gray" }}>
          <strong>In Progress</strong>
        </div>
        <STTodoItemContainer>
          <STTodoItem key={todos.id}>
            {todos.map((item) => {
              if (item.isDone === false) {
                return (
                  <div>
                    <h2>{item.title}</h2>
                    <h3>{item.content}</h3>
                  </div>
                );
              }
            })}
          </STTodoItem>
        </STTodoItemContainer>
      </STListLeft>
      <STListRight>
        <div style={{ backgroundColor: "red" }}>
          <strong>Done</strong>
        </div>
      </STListRight>
    </STList>
  );
};

const STTodoItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const STTodoItem = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;

const STList = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #003458;
`;

const STListLeft = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  background: white;
  text-align: center;
  border-right: 2px solid black;
`;

const STListRight = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
  background: white;
  text-align: center;
`;

export default List;
