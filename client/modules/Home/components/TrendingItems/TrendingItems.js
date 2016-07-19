import React, { PropTypes } from 'react';

import styles from './TrendingItems.css';

export function TrendingItems(props) {
  const { items } = props.trendingItems;

  return (
    <div className={styles.trending_items}>
      <div className={styles.trending_items_title}>Trending Items</div>
      <div className={styles.trending_item_wrapper}>
        {items.map((item) => {
          return (
            <div className={styles.trending_item} key={item.id}>
              <div className={styles.score}>{item.score}</div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.stars}>{item.reviewsScore} rating ({item.reviews})</div>
              <img src={item.image} role="presentation" />
              <div className={styles.topTitle}>See {item.topTitle} ></div>
            </div>
          );
        })}
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
}

TrendingItems.propTypes = {
  trendingItems: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      reviews: PropTypes.number,
      reviewsScore: PropTypes.number,
      score: PropTypes.number,
      title: PropTypes.string,
      topTitle: PropTypes.string,
    })),
  }),
};

export default TrendingItems;
