import React from 'react';
import { NavigationRoot } from './navigation';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationRoot />
    </Provider>
  );
};
