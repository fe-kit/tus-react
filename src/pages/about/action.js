import { createAction } from 'redux-actions';

export const addAction = createAction('about/add');

export const onAddButton = () =>
  addAction({
    amount: 10
  });
