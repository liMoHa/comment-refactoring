import React from "react";
import { useEffect } from "react";
import { useRecoilState } from 'recoil';


import { query as q } from 'faunadb';
import db from '../../db';
import { COLLECTION_REF } from '../../constant';


import selectNameState from "../../state/SelectName";
import loadingState from "../../state/loading";
import valueState from "../../state/value";
import valueListState from "../../state/valueList";

import { nameList } from "../../data/nameList";
import Button from "../atoms/Button";
import SelectUser from "../atoms/SelectUser";
import InputPayment from "../molecules/InputPayment";


const SelectInputForm = () => {
    const ref = q.Ref(q.Collection('prices'), COLLECTION_REF);

    const [loading, setLoading] = useRecoilState(loadingState);
    const [selectedName, setSelectedName] = useRecoilState(selectNameState);
    const [value, setValue] = useRecoilState<any>(valueState);
    const [valueList, setValueList] = useRecoilState<any>(valueListState);

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

    return (
        <div style={{ marginBottom: 8, height: 36 }}>
            <SelectUser
                value={selectedName}
                onChange={handleChangeName}
            >
                {nameList.map((name: string) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </SelectUser>
            < InputPayment
                value={value}
                setValue={setValue}
            />
            <Button
                disabled={loading}
                onClick={handleClick}
            >
                {"??????"}
            </Button>
        </div>
    );
};

export default SelectInputForm;