import React from "react";
import { useEffect } from "react";
import { useRecoilState } from 'recoil';

import { query as q } from 'faunadb';
import db from '../../db';
import { COLLECTION_REF } from '../../constant';
import { nameList } from "../../data/nameList";

import selectNameState from "../../state/SelectName";
import loadingState from "../../state/loading";
import valueListState from "../../state/valueList";

import Title from '../../components/atoms/Title';
import SelectInputForm from '../../components/organisms/SelectInputForm';
import UsersInfo from '../../components/organisms/UsersInfo';
import RemaningValueText from "../../components/molecules/RemaningValueText";
import TotalPaymentText from "../../components/molecules/TotalPaymentText";

export default function MainTemplate() {
    const setLoading = useRecoilState(loadingState)[1];
    const setSelectedName = useRecoilState(selectNameState)[1];
    const setValueList = useRecoilState<any>(valueListState)[1];
    const ref = q.Ref(q.Collection('prices'), COLLECTION_REF);
    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));

        console.log('data from DB', data);
        setValueList(data);

        setLoading(false);
    };

    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        console.log(defaultSelectedName);
        setSelectedName(defaultSelectedName || nameList[0]);

        setValueListFromDB();
    }, []);

    return (
        <div style={{ margin: '0px 16px' }}>
            <Title text="오늘 먹은 점심 값은???" />
            <SelectInputForm />
            <div style={{ display: 'flex', height: '90%' }}>
                <UsersInfo />
                <div style={{ flex: 1 }}>
                    <RemaningValueText />
                    <TotalPaymentText />
                </div>
            </div>
        </div>
    );
}