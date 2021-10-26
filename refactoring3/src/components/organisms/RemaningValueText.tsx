import React from 'react';
import { useRecoilState } from 'recoil';
import { getTotalValue } from '../../util';

import { nameList } from "../../data/nameList";
import valueListState from "../../state/valueList";

const RemaningValueText = () => {
    const defaultTotalValue = nameList.length * 150000;
    const valueList = useRecoilState<any>(valueListState)[0];
    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) * 100
    );

    return (

        <div
            style={{
                display: 'flex',
                flexDirection: 'column-reverse',
                height: 'calc(100% - 36px)',
                width: '100%',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: `${percentLeftTotalvalue}%`,
                    width: '100%',
                    background: `hsl(${percentLeftTotalvalue}, 60%, 51%)`,
                    color: 'white',
                }}
            >
                <div>{`${defaultTotalValue - getTotalValue(valueList)
                    }원 남음`}</div>
            </div>
        </div>

    );
};


export default RemaningValueText;