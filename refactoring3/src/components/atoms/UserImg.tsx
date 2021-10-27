import React from 'react';

type UserImgProps = {
    isSelected: any;
    url: string;
}

const UserImg = ({ isSelected, url }: UserImgProps) => {
    const styleObject = {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        width: 40,
        border: isSelected ? '2px solid grey' : undefined,
        borderRadius: 8,
    }
    return (

        <img
            style={styleObject}
            src={url}
        />

    );
}

export default UserImg;