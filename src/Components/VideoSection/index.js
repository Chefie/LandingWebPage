import React from "react";
import styled from 'styled-components'
import {StyledTitle} from "../Title";

export const VideoSection = ({url, title, type}) => {

    return <React.Fragment>
        <StyledVideoContainer loop muted data-autoplay>
            <source src={url}
                    type={`video/${type}`}>
            </source>
        </StyledVideoContainer>

        <StyledTitle>
            {title}
        </StyledTitle>
    </React.Fragment>
};

export const StyledVideoContainer = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    background-position: center center;
    background-size: contain;
    object-fit: cover;
    z-index: 3;
`;


