import PropTypes from 'prop-types';

const Cast = ({ moviesIdCast }) => {
  return (
    <>
      <h3>Cast</h3>
      {moviesIdCast &&
        moviesIdCast.cast.map(cast => (
          <div key={cast.id}>
            {cast.profile_path === null ? (
              <img
                src={`https://demofree.sirv.com/nope-not-here.jpg?w=150`}
                alt={cast.name}
                width="150"
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                width="150"
              />
            )}
            {/* <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              width="150"
            /> */}
            <p>{cast.name}</p>
            <p>Character: {cast.character}</p>
          </div>
        ))}
    </>
  );
};

Cast.propTypes = {
  moviesIdCast: PropTypes.object.isRequired,
};

export default Cast;
