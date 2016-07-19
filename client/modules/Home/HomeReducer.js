import { ADD_HOME_DATA } from './HomeActions';

const initialState = { data: { } };

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOME_DATA :
      return {
        data: action.data,
      };

    default:
      return state;
  }
};

export const getMostPopularCategories = state => state.home.data.mostPopularCategories;
export const getTrendingItems = state => state.home.data.trendingItems;
export const getRecentlyReviewedCategories = state => state.home.data.recentlyReviewedCategories;

export default HomeReducer;
