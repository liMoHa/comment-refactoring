import React from 'react';
import styled from 'styled-components';


type buttonProps = {
    disabled: boolean;
    onClick: () => Promise<void>;
    children: React.ReactNode;
}

const StyledButton = styled.button`
    height: 36px;
    width: 64px;
    border: '1px solid grey';
    border-radius: 8px;
    background: 'white';
    font-size: 20px;
`;

const Button = ({ disabled, onClick, children }: buttonProps) => {
    return (
        <StyledButton disabled={disabled} onClick={onClick}>
            {children}
        </StyledButton>
    );
};


export default Button;