import React from "react";
import styled from 'styled-components'

const Rotate = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const StyledImage = styled.img`
  display: inline-block;
`;

export const SliderChild = ({url}) => {

    return <React.Fragment>
        <Rotate>
            <StyledImage src={url} alt={url}/>
        </Rotate>
    </React.Fragment>
};
