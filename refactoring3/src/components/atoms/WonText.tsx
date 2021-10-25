import React from 'react';
import styled from 'styled-components';


type wonTextProps = {
    text: string;
}

const StyledWonText = styled.span`
    fontSize: 20;
    marginRight: 16;
`;

const WonText = ({ text }: wonTextProps) => {
    return (
        < StyledWonText >
            {text}
        </ StyledWonText >
    );
};
export default WonText;