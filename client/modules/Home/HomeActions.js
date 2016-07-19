export const ADD_HOME_DATA = 'ADD_HOME_DATA';

export function addHomeData(homeData) {
  return {
    type: ADD_HOME_DATA,
    data: homeData,
  };
}

export function fetchHomeData() {
  return (dispatch) => {
    const _fakeFetch = () => {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              mostPopularCategories: {
                items: [
                  { id: 'popular1', image: 'http://i.imgbox.com/s27sYTrf.jpg', title: 'Top 10 Standard Strollers' },
                  { id: 'popular2', image: 'http://i.imgbox.com/UfnQ1Xw0.jpg', title: 'Top 10 Smart TVs' },
                  { id: 'popular3', image: 'http://i.imgbox.com/sI3JFG1n.jpg', title: 'Top 10 Standard Mixers' },
                  { id: 'popular4', image: 'http://i.imgbox.com/iQ0hhrOL.jpg', title: 'Top 10 Digital Cameras' },
                ],
                reviews: 34207,
              },
              trendingItems: {
                items: [
                  { id: 'trending1', image: 'http://i.imgbox.com/InI7wEBF.jpg', score: 7.3, title: 'GB Pockit Stroller', reviews: 347, reviewsScore: 3.5, topTitle: 'top 10 Lightweight Strollers' },
                  { id: 'trending2', image: 'http://i.imgbox.com/O1eaCUS4.jpg', score: 8.6, title: 'Comotomo Natural Feel', reviews: 347, reviewsScore: 3.5, topTitle: 'top 10 Baby Bottles' },
                ],
              },
              recentlyReviewedCategories: {
                items: [
                  { id: 'recently1', image: 'http://i.imgbox.com/r1Wu884U.jpg', title: 'Top 10 Convertible Car Seats' },
                  { id: 'recently2', image: 'http://i.imgbox.com/vydkEd4g.jpg', title: 'Top 10 Jogging Strollers' },
                  { id: 'recently3', image: 'http://i.imgbox.com/aTc1JdDL.jpg', title: 'Top 10 Diaper Bags' },
                ],
                reviews: 24570,
              },
            },
          });
        }, 1000);
      });
      return promise;
    };

    return _fakeFetch().then(res => {
      dispatch(addHomeData(res.data));
    });
  };
}
