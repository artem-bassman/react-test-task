import React, { PropTypes } from 'react';

import styles from './MostPopularCategories.css';

export function MostPopularCategories(props) {
  const { items, reviews } = props.mostPopularCategories;

  return (
    <div className={styles.most_popular_categories}>
      <div className={styles.most_popular_categories_title}>Most Popular Categories</div>
      <div className={styles.reviews}>Based on {reviews} reviews</div>
      <div style={{ clear: 'both' }}></div>
      <div className={styles.most_popular_item_wrapper}>
        {items.map((item) => {
          return (
            <div className={styles.most_popular_item} key={item.id}>
              <img src={item.image} role="presentation" />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
}

MostPopularCategories.propTypes = {
  mostPopularCategories: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    })),
    reviews: PropTypes.number,
  }),
};

export default MostPopularCategories;
