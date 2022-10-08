import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import todos from "../redux/modules/todos";
import { deleteTodo } from "../redux/modules/todos";

const List = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);
  return (
    <STList>
      <STListLeft>
        <div style={{ backgroundColor: "gray" }}>
          <strong>In Progress</strong>
        </div>
        {todos.map((item) => {
          if (item.isDone === false) {
            return (
              <STTodoItemContainer>
                <STTodoItem key={todos.id}>
                  <div>
                    <h2>{item.title}</h2>
                    <h3>{item.content}</h3>
                  </div>
                  <STFooter>
                    <STButton borderColor='red' onClick={onDeleteHandler}>
                      삭제하기
                    </STButton>
                    <STButton borderColor='green'>완료</STButton>
                  </STFooter>
                </STTodoItem>
              </STTodoItemContainer>
            );
          }
        })}
      </STListLeft>
      <STListRight>
        <div style={{ backgroundColor: "red" }}>
          <strong>Done</strong>
        </div>
        {todos.map((item) => {
          if (item.isDone === true) {
            return (
              <STTodoItemContainer>
                <STTodoItem key={todos.id}>
                  <div>
                    <h2>{item.title}</h2>
                    <h3>{item.content}</h3>
                  </div>
                  <STFooter>
                    <STButton borderColor='red'>삭제하기</STButton>
                    <STButton borderColor='green'>완료</STButton>
                  </STFooter>
                </STTodoItem>
              </STTodoItemContainer>
            );
          }
        })}
      </STListRight>
    </STList>
  );
};

const STButton = styled.button`
  border: 1px solid ${(props) => props.borderColor};
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const STFooter = styled.footer`
  display: flex;
  -webkit-box-pack: end;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const STTodoItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const STTodoItem = styled.div`
  width: 220px;
  border: 4px solid teal;
  min-height: 100px;
  border-radius: 12px;
  padding: 12px 24px 24px;
  margin: auto;
`;

const STList = styled.div`
  width: 100%;
  height: 1000px;
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
