import {atom} from 'recoil';
import { defaultValueList } from '../data';

const nameList: any = Object.keys(defaultValueList);

export default atom({
    key: 'selectName',
    default: nameList[0],
});