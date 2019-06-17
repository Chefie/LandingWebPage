import React from "react";
import styled from 'styled-components'

export const StyledImage = styled.img`
  display: inline-block;

height: 80%;
   position: relative;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const StyledAboutImage = styled.img`
  display: inline-block;
 width: 60%;
 height: 80%;
   position: absolute;
    margin: auto;
    top: 5%;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.5em;
 
      box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.18);
`;
export const SliderChild = ({url}) => {

    return <React.Fragment>
            <StyledImage src={url} alt={url}/>
    </React.Fragment>
};
