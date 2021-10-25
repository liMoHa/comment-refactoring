import React from 'react';
import styled from 'styled-components';

type selectUserProps = {
    value: any;
    onChange: (e: any) => void;
    children: React.ReactNode;
}

const StyledSelectUser = styled.select`
    margin-right: 16px;
    height: 36px;
    width: 72px;
    border: '1px solid grey';
    border-radius: 8px;
    font-size: 20px;
`;

const SelectUser = ({ value, onChange, children }: selectUserProps) => {

    return (
        <StyledSelectUser value={value} onChange={onChange}>
            {children}
        </StyledSelectUser>
    );
};

export default SelectUser;