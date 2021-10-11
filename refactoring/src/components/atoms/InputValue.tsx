import React from 'react';

type inputValueProps = {
    type: any;
    value: any;
    setValue: any;
}

const InputValue = ({ type, value, setValue }: inputValueProps) => {

    const handleChangeValue = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <input
            style={{
                width: 80,
                border: 'none',
                borderBottom: '1px solid grey',
                fontSize: 20
            }}
            type={type} value={value} onChange={handleChangeValue}
        />
    );
};


export default InputValue;