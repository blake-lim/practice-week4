import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import todos from "../redux/modules/todos";
import { deleteTodo } from "../redux/modules/todos";
import { changeTodo } from "../redux/modules/todos";
import { eDiT } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const [edit, setEdit] = useState({
    title: "",
    content: "",
  });

  const [editValue, setEditValue] = useState("none");

  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);

  const onChangeHandler = (id) => {
    dispatch(changeTodo(Number(id)));
  };

  const onEditHandler = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };

  const openEdit = (id) => {
    if (editValue == "none") {
      setEditValue("block");
    }
    const [newTodoList] = todos.filter((item, i, arr) => {
      // if (item.id == id) {
      //   arr[i].title = edit.title;
      //   arr[i].content = edit.content;
      // }
      return item.id == id;
    });
    const restTodo = todos.filter((item, i, arr) => {
      // if (item.id == id) {
      //   arr[i].title = edit.title;
      //   arr[i].content = edit.content;
      // }
      return item.id !== id;
    });
    console.log(restTodo, "ssssss");
    newTodoList.isEdit = true;
    restTodo.map((item, i, arr) => {
      arr[i].isEdit = false;
    });
  };

  const submitEdit = (id) => {
    //none을 block으로 바꾸어줌
    if (editValue == "none") {
      setEditValue("block");
    }
    const [newTodoList] = todos.filter((item, i, arr) => {
      // if (item.id == id) {
      //   arr[i].title = edit.title;
      //   arr[i].content = edit.content;
      // }
      return item.id == id;
    });

    //수정버튼을 닫았으니, 뉴튜두리스트 방금 찍은 아이디에 투두리스트니까
    //여기다가 추가를 해줘야한다 newTodoList.isEdit값을 추가해줘야함
    newTodoList.isEdit = false;
    newTodoList.title = edit.title;
    newTodoList.content = edit.content;
    console.log("이거", newTodoList);

    dispatch(eDiT(newTodoList));
    // if (editValue == "block") {
    //   setEditValue("none");
    // }
  };

  return (
    <STList>
      <STListLeft>
        <div style={{ backgroundColor: "gray" }}>
          <strong>In Progress</strong>
        </div>
        {todos.map((item) => {
          if (item.isDone === false) {
            return (
              <STTodoItemContainer backgroundColor='white'>
                <STTodoItem key={item.id}>
                  <div>
                    <StDetail href={"/detail/"}>상세보기</StDetail>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                  <STFooter>
                    <STButton
                      borderColor='red'
                      onClick={() => onDeleteHandler(item.id)}
                    >
                      삭제
                    </STButton>
                    <STButton
                      borderColor='green'
                      onClick={() => onChangeHandler(item.id)}
                    >
                      완료
                    </STButton>
                  </STFooter>
                  <button
                    onClick={() => {
                      openEdit(item.id);
                    }}
                  >
                    수정버튼
                  </button>
                  {/* ⭐️요부분 굉장히 많이 씀, 어떤 버튼을 토글할때 이렇게 씀 */}
                  {item.isEdit === true ? (
                    <STModifyContainer>
                      <button onClick={() => submitEdit(item.id)}>
                        수정완료
                      </button>
                      <STModifyitem
                        name='title'
                        placeholder='제목을 입력하세요'
                        onChange={onEditHandler}
                      ></STModifyitem>
                      <STModifyitem
                        name='content'
                        placeholder='내용을 입력하세요'
                        onChange={onEditHandler}
                      ></STModifyitem>
                    </STModifyContainer>
                  ) : (
                    <div>ㅋㅋ</div>
                  )}
                  {item.isEdit === false && <div></div>}
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
              <STTodoItemContainer backgroundColor='beige'>
                <STTodoItem key={todos.id}>
                  <div>
                    <StDetail href={"/detail/"}>상세보기</StDetail>
                    {/* a링크 바꿔  -> nav로*/}
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                  <STFooter>
                    <STButton
                      borderColor='red'
                      onClick={() => onDeleteHandler(item.id)}
                    >
                      삭제
                    </STButton>
                    <STButton
                      borderColor='blue'
                      onClick={() => onChangeHandler(item.id)}
                    >
                      취소
                    </STButton>
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

const STModifyContainer = styled.div`
  padding: 32px 0 32px 30px;
  /* display: ${(props) => props.display}; */
`;

const STModifyitem = styled.input`
  line-height: 27px;
  float: left;
  height: 27px;
  padding: 0 0 0 7px;
  vertical-align: top;
  color: #333;
  border: 1px solid #ccc;
  opacity: 1;
`;

const StDetail = styled.a`
  text-decoration: none;
`;

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
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-wrap: wrap;
  gap: 12px; ;
`;

const STTodoItem = styled.div`
  width: 220px;
  border: 4px solid teal;
  min-height: 100px;
  border-radius: 12px;
  padding: 12px 24px 24px;
  margin: auto;
  margin-top: 15px;
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
