// src/components/InboxScreen.js

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TaskList from "./TaskList";

const Page = styled.div`
  min-height: 100vh;
  background: white;
`;


const Nav = styled.nav`
  background: #d3edf4;
  padding: 1.5rem 1.25rem;
  text-align: center;
`;

const TitlePage = styled.h1`
  font-size: 20px;
  line-height: 24px;
  line-height: 2rem;
  cursor: pointer;
  white-space: nowrap;
`;

const TitleWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 800;
  color: #1c3f53;
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
`;
export function PureInboxScreen({ error }) {
  if (error) {
    return (
      // <div className="page lists-show">
      //   <div className="wrapper-message">
      //     <span className="icon-face-sad" />
      //     <div className="title-message">Oh no!</div>
      //     <div className="subtitle-message">Something went wrong</div>
      //   </div>
      // </div>

      <Page>
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
          </div>
      </Page>
    );
  }

  return (
    // <div className="page lists-show">
    //   <nav>
    //     <h1 className="title-page">
    //       <span className="title-wrapper">Taskbox</span>
    //     </h1>
    //   </nav>
    //   <TaskList />
    // </div>
    <Page>
      <Nav>
        <TitlePage>
          <TitleWrapper>Taskbox</TitleWrapper>
        </TitlePage>
      </Nav>
      <TaskList />
    </Page>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);
