import React from "react";
import { useEffect, useState } from 'react';

import { query as q } from 'faunadb';
import db from '../../db';
import { defaultValueList } from '../../data';
import { COLLECTION_REF } from '../../constant';

import Title from '../../components/atoms/Title';
import SelectInputForm from '../../components/organisms/SelectInputForm';
import UsersInfo from '../../components/organisms/UsersInfo';
import ValueInfo from '../../components/organisms/valueInfo';


export default function MainTemplate() {
    const ref = q.Ref(q.Collection('prices'), COLLECTION_REF);
    const nameList: any = Object.keys(defaultValueList);

    const [loading, setLoading] = useState(false);
    const [selectedName, setSelectedName] = useState(nameList[0]);
    const [valueList, setValueList] = useState<any>(defaultValueList);
    const [value, setValue] = useState<any>();

    const handleChangeName = (e: any) => {
        setSelectedName(e.target.value);
        localStorage.setItem('defaultSelectedName', e.target.value);
    };
    const handleClick = async () => {
        setLoading(true);

        const { data } = await db.query<any>(
            q.Update(ref, {
                data: {
                    ...valueList,
                    [selectedName]: valueList[selectedName] + Number(value),
                },
            })
        );
        setValueList(data);
        setValue('');
        setLoading(false);
    };
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

    const defaultTotalValue = nameList.length * 150000;

    return (

        <div style={{ margin: '0px 16px' }}>
            <Title text="오늘 먹은 점심 값은???" />
            <SelectInputForm selectedName={selectedName} handleChangeName={handleChangeName} nameList={nameList} value={value} setValue={setValue} loading={loading} handleClick={handleClick} />
            <div style={{ display: 'flex', height: '90%' }}>
                {/* usersInfo organisms */}
                <UsersInfo nameList={nameList} selectedName={selectedName} valueList={valueList} setValueList={setValueList} loading={loading} setLoading={setLoading} />
                {/* ValueInfo organisms */}
                <ValueInfo defaultTotalValue={defaultTotalValue} valueList={valueList} />
            </div>
        </div>
    );
}