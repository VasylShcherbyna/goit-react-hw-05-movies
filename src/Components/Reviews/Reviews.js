import PropTypes from 'prop-types';

const Reviews = ({ moviesIdReview }) => {
  return (
    <>
      {moviesIdReview.length === 0 ? (
        <p>No reviews</p>
      ) : (
        moviesIdReview &&
        moviesIdReview.map(review => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </>
  );
};

Reviews.propTypes = {
  moviesIdReview: PropTypes.array.isRequired,
};

export default Reviews;
