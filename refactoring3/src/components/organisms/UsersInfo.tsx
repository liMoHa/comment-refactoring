import React from "react";
import UserInfo from "../molecules/UserInfo";
import { useRecoilState } from "recoil";

import selectNameState from "../../state/SelectName";
import loadingState from "../../state/loading";
import valueListState from "../../state/valueList";

import { nameList } from "../../data/nameList";

const UsersInfo = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const selectedName = useRecoilState(selectNameState)[0];
    const [valueList, setValueList] = useRecoilState<any>(valueListState);
    return (
        <div style={{ flex: 1 }}>
            {nameList.map((name: string, i: number) => (
                <UserInfo
                    key={i}
                    name={name}
                    isSelected={selectedName == name}
                    value={valueList[name]}
                    valueList={valueList}
                    setValueList={setValueList}
                    loading={loading}
                    setLoading={setLoading}
                />
            ))}
        </div>
    );
};

export default UsersInfo;