import { createAction } from 'redux-actions';
export const addAction = createAction('home/add');

export const asyncAdd = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(
        addAction({
          amount: 1
        })
      );
    }, 1000);
  };
};

export const syncAdd = () =>
  addAction({
    amount: 1
  });
