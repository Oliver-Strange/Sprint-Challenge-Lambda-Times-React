import React, { Component } from 'react';
import { carouselData } from '../../data';
// import { Carousel } from 'reactstrap';


// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      items: [] 
    } 
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);

  }
  
 

  componentDidMount(){
    this.setState({
      items: carouselData
    })
  }

  leftClick = () => {
    const nextIndex = this.state.items === 0 ? this.state.length - 1 : this.state.items - 1;
    this.setState({ activeIndex: nextIndex });
  }

  rightClick = () => {
    const nextIndex = this.state.items === this.state.length - 1 ? 0 : this.state.items + 1;
    this.setState({ activeIndex: nextIndex });
  }

  selectedImage = () => {
    return <img src={this.state.items[0]} style={{display: 'block'}} />
  }
  
  render(){
    
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.items[0]} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

