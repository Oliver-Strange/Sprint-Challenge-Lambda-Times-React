import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tabs = props => {
  console.log(props);
  return (
    <StyledTabs>
      <StyledTopics>
        <StyledTitle>TRENDING TOPICS:</StyledTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map((tab, index) => (
          <Tab
            key={index}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
          />
        ))}
      </StyledTopics>
    </StyledTabs>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.oneOf([
      "all",
      "javascript",
      "technology",
      "node",
      "React.js",
      "bootstrap"
    ])
  )
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

const StyledTabs = styled.div`
border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    .tabs {
      width: 1280px;
    }
`;

const StyledTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

  .active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
`;

const StyledTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export default Tabs;
