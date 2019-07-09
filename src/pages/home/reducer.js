import { handleActions } from 'redux-actions';
import { addAction } from './action';

const initialState = {
  counter: 0,
  list: [
    {
      changed_by_name: '',
      changed_on: '2019-07-01T10:54:56',
      creator: '',
      dashboard_link: '<a href="/superset/dashboard/births/">Births</a>',
      dashboard_title: 'Births_1',
      id: 2,
      modified: '7 days ago',
      url: '/superset/dashboard/births/'
    },
    {
      changed_by_name: '',
      changed_on: '2019-07-01T11:54:56',
      creator: '',
      dashboard_link:
        '<a href="/superset/dashboard/misc_charts/">Misc Charts</a>',
      dashboard_title: 'Misc Charts_2',
      id: 3,
      modified: '7 days ago',
      url: '/superset/dashboard/misc_charts/'
    },
    {
      changed_by_name: '',
      changed_on: '2019-07-01T12:54:56',
      creator: '',
      dashboard_link: '<a href="/superset/dashboard/deck/">deck.gl Demo</a>',
      dashboard_title: 'deck.gl Demo_3',
      id: 4,
      modified: '7 days ago',
      url: '/superset/dashboard/deck/'
    },
    {
      changed_by_name: '',
      changed_on: '2019-07-02T13:54:52',
      creator: '',
      dashboard_link:
        '<a href="/superset/dashboard/world_health/">World&#39;s Bank Data</a>',
      dashboard_title: "World's Bank Data_4",
      id: 1,
      modified: '7 days ago',
      url: '/superset/dashboard/world_health/'
    }
  ]
};

export default handleActions(
  {
    [addAction]: (state, { payload: { amount } }) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  initialState
);
