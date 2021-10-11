import React from 'react';
import { getTotalValue } from '../../util';


type TotalPaymentTextProps = {
    valueList: any;
}

const TotalPaymentText = ({ valueList }: TotalPaymentTextProps) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 4,
                height: 36,
                fontWeight: 'bold',
            }}
        >{`${new Date().getMonth() + 1}월 : ${getTotalValue(
            valueList
        )}원`}</div>
    );
}

export default TotalPaymentText;