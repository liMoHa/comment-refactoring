import React from 'react';
import styled from 'styled-components';

type titleProps = {
    text: string;
}

const StyledTitle = styled.h1`
    padding-top: 16px;
    margin-bottom: 16px;
    color: black;
    font-size: 28px;
    font-weight: bold;
`;

const Title = ({ text }: titleProps) => {
    return (
        <StyledTitle>
            {text}
        </StyledTitle>
    );
};

export default Title;