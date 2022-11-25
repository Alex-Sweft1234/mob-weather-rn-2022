import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { locationActions } from '../store/location/location.slice';

const actions = {
  ...locationActions,
};

export const useReduxActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
