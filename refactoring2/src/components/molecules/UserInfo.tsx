import { query as q } from 'faunadb';
import { COLLECTION_REF } from '../../constant';
import { imgURLObj } from '../../data';
import db from '../../db';

import UserImg from '../atoms/UserImg';
import UserPaymentText from '../atoms/UserPaymentText';

type UsersInfoProps = {
    name: string;
    isSelected: boolean;
    value?: string;
    valueList?: any;
    setValueList?: any;
    loading?: boolean;
    setLoading?: any;
};
const UsersInfo = ({
    name,
    isSelected,
    value,
    valueList,
    setValueList,
    loading,
    setLoading,
}: UsersInfoProps) => {
    const ref = q.Ref(q.Collection('prices'), COLLECTION_REF);
    const handleClickToResetValue = async () => {
        if (isSelected) {
            setLoading(true);

            const { data } = await db.query<any>(
                q.Update(ref, {
                    data: {
                        ...valueList,
                        [name]: 0,
                    },
                })
            );
            setValueList(data);

            setLoading(false);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: 44,
                margin: '6px 0px',
            }}
        >
            <div onClick={handleClickToResetValue}>
                <UserImg isSelected={isSelected} url={imgURLObj[name]} />
            </div>

            <UserPaymentText isSelected={isSelected} loading={loading} value={value} />
        </div>
    );
};

export default UsersInfo;
