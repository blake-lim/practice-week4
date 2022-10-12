import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../redux/modules/todos";

const StDetailWrapDiv = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const StDetailBorderDiv = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const StDetailTitleDiv = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;
const StBackButton = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const StDetailH1 = styled.h1`
  padding: 0px 24px;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const StDetailMain = styled.main`
  padding: 0px 24px;
  display: block;
`;

const Detail = () => {
  const [selTodo] = useSelector((state) => state.todos.todos);
  console.log(selTodo);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(Number(id)));
  }, [dispatch, id]);

  return (
    <StDetailWrapDiv>
      <StDetailBorderDiv>
        <div>
          <StDetailTitleDiv>
            <div>ID : {selTodo.id}</div>
            <Link to='/'>
              <StBackButton>이전으로</StBackButton>
            </Link>
          </StDetailTitleDiv>
          <StDetailH1>{selTodo.title}</StDetailH1>
          <StDetailMain>{selTodo.content}</StDetailMain>
        </div>
      </StDetailBorderDiv>
    </StDetailWrapDiv>
  );
};

export default Detail;
