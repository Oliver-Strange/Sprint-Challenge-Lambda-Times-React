import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Card = props => {
  console.log(props);
  return (
    <StyledCard>
      <StyledHeadline>{props.card.headline}</StyledHeadline>
      <StyledAuthor>
        <StyledImgContainer>
          <img src={props.card.img} alt={props.card.author} />
        </StyledImgContainer>
        <span>By {props.card.author}</span>
      </StyledAuthor>
    </StyledCard>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  card: PropTypes.shape({
      author: PropTypes.string,
      headline: PropTypes.string,
      img: PropTypes.string,
      tab: PropTypes.string
    }
  )
}

const StyledCard = styled.div`  
border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const StyledHeadline = styled.div`
font-size: 25px;
  font-family: Didot, serif;
`;

const StyledAuthor = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const StyledImgContainer = styled.div`
padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`

export default Card;
