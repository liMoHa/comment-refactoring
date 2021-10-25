import React from "react";

import InputValue from "../atoms/InputValue";
import WonText from "../atoms/WonText";


type InputPaymentProps = {
    value: any;
    setValue: any;
}

const InputPayment = ({ value, setValue }: InputPaymentProps) => {

    return (
        <span>
            < InputValue
                type='number'
                value={value}
                setValue={setValue}
            />
            <WonText text="원" />
        </span>
    );
};

export default InputPayment;