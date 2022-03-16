import React from "react";
import Layout from "../../components/layout/Layout";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const PoetryTitle = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 144px;
  line-height: 169px;
  color: #181818;
  letter-spacing: 0.205em;
  text-transform: uppercase;
  -webkit-text-stroke: 1px #c4c4c470;
  width: 100%;
  //position: absolute;
  z-index: 1;
  white-space: nowrap;
`;

const PoetryText = styled.div`
  width: 500px;
  min-height: 100px;
  background-color: #363636;
  z-index: 10;
  padding: 20px;
  text-align: center;
  font-family: "Gilroy Light", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.13em;
  white-space: pre-wrap;
  color: #efefef;
`;

const text =
  "Ты рос порядочным ребенком\n" +
  "Добропорядочной семьи,\n" +
  "Но мнил себя гадким утенком\n" +
  "Со школьной парты и скамьи.\n" +
  "Всю жизнь верил в перемены,\n" +
  "Что ожидают тебя дальше,\n" +
  "Являясь винтиком системы\n" +
  "Ты погружался в море фальши.\n" +
  "\n" +
  "Но вот, ты зрелый представитель\n" +
  "И пред тобою дверь открыта,\n" +
  "Покинуть детскую обитель\n" +
  "Тропой, что тайною покрыта.\n" +
  "Шагнув, уверенно иль робко,\n" +
  "Навстречу новой в жизни строчке\n" +
  "Увидел впереди лишь пробку,\n" +
  "Таких как ты шурупов прочных.\n" +
  "Поставив цель забраться выше\n" +
  "И стать отверткой в этой схеме,\n" +
  "Прильнул ты к этой жалкой нише\n" +
  "И оказался в томном плене.\n" +
  "\n" +
  "Бегут года, текут декады,\n" +
  "Уже смирился с приговором,\n" +
  "Что вовсе тут тебе не рады\n" +
  "И, что свобода - за забором.\n" +
  "Забор за клеткой, в клетке цепи,\n" +
  "Ты весь обмотан - обездвижен,\n" +
  "Замок тугой к цепям прицеплен\n" +
  "Лежишь на белый свет обижен.\n" +
  "Ты опустил со вздохом руки\n" +
  "\n" +
  "...";

const Wrapper = styled.div`
  margin-bottom: 50px;
  position: relative;
  z-index: 5;

  & span {
    font-family: "Roboto Condensed", sans-serif;
    color: #181818;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 0.215em;
    text-transform: uppercase;
    -webkit-text-stroke: 1px #4b4b4b;
    display: flex;
  }

  & .title {
    position: absolute;
    top: 20%;
    z-index: -1;
  }

  & .text {
    display: flex;
  }

  &:nth-child(odd) {
    & span {
      justify-content: flex-start;
    }
  }
  & .title {
    &.right {
      left: 0;
      transform: translateX(550px);
    }

    &.left {
      left: 0;
      transform: translateX(-50%);
      & span {
        display: none;
      }
    }
  }

  &:nth-child(even) {
    margin-right: 50px;
    & .text {
      justify-content: flex-end;
    }

    & .title {
      &.right {
        right: 0;
        transform: translateX(101%);
        //
        //& span {
        //  display: none;
        //}
      }

      &.left {
        left: 0;
        transform: translateX(-40%);

        & span {
          justify-content: flex-end;
          margin-right: 10%;
        }
      }
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const PoetryTest = ({ title = "", text = "" }) => {
  const doAppend = () => {
    if (title.length <= 5) {
      return title;
    }
  };

  return (
    <Wrapper>
      <div className="title left">
        <div>
          <PoetryTitle>
            {title}
            {doAppend()}
          </PoetryTitle>
          <span>01.01.2020</span>
        </div>
      </div>
      <div className="text">
        <h2>{title}</h2>
        <PoetryText>{text}</PoetryText>
      </div>
      <div className="title right">
        <div>
          <PoetryTitle>
            {title}
            {doAppend()}
          </PoetryTitle>
          <span>01.01.2020</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Poetry = () => {
  return (
    <Layout>
      <div>poetry page</div>
      <List>
        <PoetryTest title="дом" text={text} />
        <PoetryTest title="шалав" text={text} />
        <PoetryTest title="из2 слов" text={text} />
        <PoetryTest title="ахуенный тайтл" text={text} />
      </List>
    </Layout>
  );
};

export default Poetry;
