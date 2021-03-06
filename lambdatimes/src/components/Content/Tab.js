import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      let value = 'tab';
      if (props.tab === props.selectedTab) {
        value='tab active-tab';
      } else {
        value = 'tab'
      }

      console.log(props);
  return (
    <StyledTab>
      <button
      className={value}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
      </button>
    </StyledTab>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

const StyledTab = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

}
`

export default Tab;
