import React from 'react';
import { getTotalValue } from '../../util';
import { useRecoilState } from 'recoil';

import valueListState from "../../state/valueList";

const TotalPaymentText = () => {
    const valueList = useRecoilState<any>(valueListState)[0];

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