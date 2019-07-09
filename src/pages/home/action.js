import { createAction } from 'redux-actions';

export const getAction = createAction('home/get');
export const addAction = createAction('home/add');


export const onAddButton = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addAction({
                amount: 10
            }));
        }, 1000)
        
    }
}