import React from "react";

import RemaningValueText from "../atoms/RemaningValueText";
import TotalPaymentText from "../atoms/TotalPaymentText";


type ValueInfoProps = {
    defaultTotalValue: any;
    valueList: any;
}

const ValueInfo = ({ defaultTotalValue, valueList }: ValueInfoProps) => {
    return (
        <div style={{ flex: 1 }}>
            {/* 여기는 그 초록색 긴 바탕도 같이 있는 곳 */}
            <RemaningValueText defaultTotalValue={defaultTotalValue} valueList={valueList} />
            <TotalPaymentText valueList={valueList} />
        </div>
    );
}

export default ValueInfo;