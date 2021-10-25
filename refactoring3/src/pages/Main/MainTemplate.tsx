import React from "react";

import Title from '../../components/atoms/Title';
import SelectInputForm from '../../components/organisms/SelectInputForm';
import UsersInfo from '../../components/organisms/UsersInfo';
import ValueInfo from '../../components/organisms/ValueInfo';


export default function MainTemplate() {
    return (
        // 여기는 깔끔하게 딱 component이름만 있어야 됨.
        <div style={{ margin: '0px 16px' }}>
            <Title text="오늘 먹은 점심 값은???" />
            <SelectInputForm />
            <div style={{ display: 'flex', height: '90%' }}>
                <UsersInfo />
                <ValueInfo />
            </div>
        </div>
    );
}