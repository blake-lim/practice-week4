import React from "react";
import { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import todos from "../redux/modules/todos";
import { addTodo } from "../redux/modules/todos";

const Form = () => {
  const [todo, setTodo] = useState({
    // id: 3,
    // title: "",
    // content: "",
    // isDone: false,
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      id: Date.now(),
      isDone: false,
      [name]: value,
      // [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   console.log(todo);
  // }, [todo]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // 양식 미작성 시, alert 표시
    console.log(todo.content);
    if (todo.title || todo.content === "") {
      alert("양식을 작성하여 제출하십시오.");
      return;
    }

    dispatch(addTodo(todo));
    // submit후 빈칸 유지를 위해 공객체 생성
    setTodo({
      id: "",
      title: "",
      content: "",
      isDone: false,
    });
  };

  return (
    <STForm>
      <STInputContainer>
        <STInputLabel>제목</STInputLabel>
        <STInput
          type='text'
          name='title'
          value={todo.title}
          onChange={onChangeHandler}
        ></STInput>
        <STInputLabel>내용</STInputLabel>
        <STInput
          value={todo.content}
          type='text'
          name='content'
          onChange={onChangeHandler}
        ></STInput>
      </STInputContainer>
      <STButton onClick={onSubmitHandler}>추가</STButton>
    </STForm>
  );
};

const STForm = styled.form`
  background-color: rgb(238, 238, 238);
  border-radius: 12px;
  margin: 0px auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const STInputContainer = styled.label`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 20px;
`;

const STInputLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const STInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0px 12px;
`;

const STButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: rgb(255, 255, 255);
  font-weight: 700;
`;

export default Form;
