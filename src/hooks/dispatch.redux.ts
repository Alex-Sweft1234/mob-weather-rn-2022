import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

export const useReduxDispatch: () => AppDispatch = useDispatch;
// export const useReduxDispatch = () => {};
