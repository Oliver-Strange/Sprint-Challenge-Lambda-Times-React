import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <button
      className={value}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
      </button>
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired
};

export default Tab;
