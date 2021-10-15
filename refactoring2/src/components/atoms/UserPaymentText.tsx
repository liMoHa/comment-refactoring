import React from 'react';


type UserPaymentTextProps = {
    isSelected: any;
    loading: any;
    value: any;
}

const UserPaymentText = ({ isSelected, loading, value }: UserPaymentTextProps) => {

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 8,
                height: 48,
                borderBottom: isSelected ? '1px solid grey' : undefined,
            }}
        >
            {loading ? '...' : value}원
        </div>
    );
}

export default UserPaymentText;