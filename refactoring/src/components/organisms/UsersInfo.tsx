import React from "react";
import UserInfo from "../molecules/UserInfo";

type UsersInfoProps = {
    nameList: Array<any>;
    selectedName: any;
    valueList: any;
    setValueList: any;
    loading: any;
    setLoading: any;
}

const UsersInfo = ({ nameList, selectedName, valueList, setValueList, loading, setLoading }: UsersInfoProps) => {

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