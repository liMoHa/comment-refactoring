import {atom} from 'recoil';
import { defaultValueList } from '../data';

export default atom<any | undefined>({
    key: 'valueList',
    default: defaultValueList,
});