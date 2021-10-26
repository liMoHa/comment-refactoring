import React from 'react';

type UserImgProps = {
    isSelected: any;
    url: string;
}

const UserImg = ({ isSelected, url }: UserImgProps) => {

    return (

        <img
            style={{
                display: 'flex',
                alignItems: 'center',
                height: 40,
                width: 40,
                border: isSelected ? '2px solid grey' : undefined,
                borderRadius: 8,
            }}
            src={url}
        />

    );
}

export default UserImg;