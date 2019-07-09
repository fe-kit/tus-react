import { createAction } from 'redux-actions';

export const getAction = createAction('detail/get');
export const addAction = createAction('detail/add');


export const onAddButton = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addAction({
                amount: 10
            }));
        }, 1000)
        
    }
}