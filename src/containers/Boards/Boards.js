import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Header } from '../../components';

import { FaUser } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: auto;
  height: calc(100% - 40px);
`;

const BoardSection = styled.div`
  width: 100%;
  max-width: 800px;
`;

const BoardGroup = styled.div`
  margin-bottom: 20px;
`;

const BoardGroupHead = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 32px;
`;

const GroupIcon = styled.span`
  line-height: 1;
  display: inline-block;
  padding: 6px;
`;

const GroupTitle = styled.span`
  line-height: 32px;
`;

const BoardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Board = styled.a`
  flex-basis: 23.5%;
  height: 100px;
  background-color: #0079bf;
  margin: 0 10px 10px 0;
  border-radius: 5px;
  &:hover {
    background-color: #0079a9;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
`;

export const BoardsPage = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <BoardSection className="BoardSection">
          {[1, 2].map((_e, key) => (
            <BoardGroup className="BoardGroup" key={key}>
              <BoardGroupHead className="BoardGroupHead">
                <GroupIcon>
                  <FaUser />
                </GroupIcon>
                <GroupTitle>Personal Board</GroupTitle>
              </BoardGroupHead>
              <BoardsContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_e, key) => (
                  <Board key={key} href="/" />
                ))}
              </BoardsContent>
            </BoardGroup>
          ))}
        </BoardSection>
      </Container>
    </Fragment>
  );
};
