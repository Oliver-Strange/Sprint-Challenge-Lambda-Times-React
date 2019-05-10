import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";
// import Carousel from '../Carousel/Carousel';
import styled from 'styled-components';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
    console.log(props);
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({ selected: tab });
  }

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter((card) => {
        if (card.tab === this.state.selected) {
          return true
        } else {
          return false
        }
      })
    }
  };

  render() {
    return (
      <StyledContentContainer>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        {/* <Carousel /> */}
        <Cards cards={this.filterCards()} />
      </StyledContentContainer>
    );
  }
}

const StyledContentContainer = styled.div`
display: flex; 
  flex-direction: column; 
  align-items: center;
`;