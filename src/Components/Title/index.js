import styled from "styled-components";

export const StyledTitle = styled.h1`
  width: 100%;
  z-index: 500;
  position: absolute;
  font-size: 5em;
  font-family: arial,helvetica,serif;
  color: #fff;
  margin: 0;
  top: ${props => props.top ? props.top : -1};
  padding: 0;
`;


export const StyledPrivacyContainer = styled.div` 

display: inline-block;
  position: absolute;  
    background: #ffffff;
   width: 50%;
    max-width: 50%;
    max-height: 78%;
      border-radius: 0.5em;
margin: auto;
    top: 3%;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
   box-shadow: 3px 10px 5px 0px rgba(0,0,0,0.18);
`;

export const StyledPrivacyText = styled.h1`
  //width: 50%;
  z-index: 500;
  position: relative;
  font-size: 1em;
  font-family: arial,helvetica,serif;
   color: #646464;
   text-align: justify-all;
   padding: 10%;
`;
