import React, { PropTypes } from 'react';

import styles from './RecentlyReviewedCategories.css';

export function RecentlyReviewedCategories(props) {
  const { items, reviews } = props.recentlyReviewedCategories;

  return (
    <div className={styles.recently_reviewed_categories}>
      <div className={styles.recently_reviewed_categories_title}>Recently Reviewed Categories</div>
      <div className={styles.reviews}>Based on {reviews} reviews</div>
      <div style={{ clear: 'both' }}></div>
      <div className={styles.recently_reviewed_category_wrapper}>
        {items.map((item) => {
          return (
            <div className={styles.recently_reviewed_category} key={item.id}>
              <img src={item.image} role="presentation" />
              <p className={styles.title}>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
}

RecentlyReviewedCategories.propTypes = {
  recentlyReviewedCategories: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
    })),
    reviews: PropTypes.number,
  }),
};

export default RecentlyReviewedCategories;
