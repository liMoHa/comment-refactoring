import React from "react";
import { useRecoilState } from 'recoil';

import RemaningValueText from "../atoms/RemaningValueText";
import TotalPaymentText from "../atoms/TotalPaymentText";


import valueListState from "../../state/valueList";

import { nameList } from "../../data/nameList";

const ValueInfo = () => {
    const defaultTotalValue = nameList.length * 150000;
    const [valueList, setValueList] = useRecoilState<any>(valueListState);
    return (
        <div style={{ flex: 1 }}>
            <RemaningValueText defaultTotalValue={defaultTotalValue} valueList={valueList} />
            <TotalPaymentText valueList={valueList} />
        </div>
    );
}

export default ValueInfo;