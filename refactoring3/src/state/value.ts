import {atom} from 'recoil';

export default atom<any | undefined>({
    key: 'value',
    default: undefined,
});