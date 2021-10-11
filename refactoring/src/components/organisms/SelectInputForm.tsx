import React from "react";

import Button from "../atoms/Button";
import SelectUser from "../atoms/SelectUser";
import InputPayment from "../molecules/InputPayment";


type SelectInputFormProps = {
    selectedName: any;
    handleChangeName: any;
    nameList: any;
    value: any;
    setValue: any;
    loading: any;
    handleClick: any;
}


const SelectInputForm = ({ selectedName, handleChangeName, nameList, value, setValue, loading, handleClick }: SelectInputFormProps) => {

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
                {"입력"}
            </Button>
        </div>
    );
};


export default SelectInputForm;