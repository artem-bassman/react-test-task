import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import MostPopularCategories from '../../components/MostPopularCategories/MostPopularCategories';
import TrendingItems from '../../components/TrendingItems/TrendingItems';
import RecentlyReviewedCategories from '../../components/RecentlyReviewedCategories/RecentlyReviewedCategories';

import { fetchHomeData } from '../../HomeActions';
import { getMostPopularCategories, getTrendingItems, getRecentlyReviewedCategories } from '../../HomeReducer';

export function HomePage(props) {
  return (
    <div>
      <Helmet title="Home" />
      <MostPopularCategories mostPopularCategories={props.mostPopularCategories} />
      <TrendingItems trendingItems={props.trendingItems} />
      <RecentlyReviewedCategories recentlyReviewedCategories={props.recentlyReviewedCategories} />
    </div>
  );
}

HomePage.need = [() => { return fetchHomeData(); }];

function mapStateToProps(state) {
  return {
    mostPopularCategories: getMostPopularCategories(state),
    trendingItems: getTrendingItems(state),
    recentlyReviewedCategories: getRecentlyReviewedCategories(state),
  };
}

HomePage.propTypes = {
  mostPopularCategories: PropTypes.object,
  trendingItems: PropTypes.object,
  recentlyReviewedCategories: PropTypes.object,
};

export default connect(mapStateToProps)(HomePage);
