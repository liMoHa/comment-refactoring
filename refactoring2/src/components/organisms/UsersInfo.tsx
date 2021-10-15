import React from "react";
import { useEffect } from "react";
import UserInfo from "../molecules/UserInfo";
import { useRecoilState } from "recoil";

import { query as q } from 'faunadb';
import db from '../../db';
import { COLLECTION_REF } from '../../constant';

import selectNameState from "../../state/SelectName";
import loadingState from "../../state/loading";
import valueListState from "../../state/valueList";

import { nameList } from "../../data/nameList";

const UsersInfo = () => {

    const ref = q.Ref(q.Collection('prices'), COLLECTION_REF); // ref역할?

    const [loading, setLoading] = useRecoilState(loadingState);
    const [selectedName, setSelectedName] = useRecoilState(selectNameState);
    const [valueList, setValueList] = useRecoilState<any>(valueListState);

    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));

        console.log('data from DB', data);
        setValueList(data);

        setLoading(false);
    };

    // 얘가 2번 사용되는데 그게 맞나..?
    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        console.log(defaultSelectedName);
        setSelectedName(defaultSelectedName || nameList[0]);

        setValueListFromDB();
    }, []);

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