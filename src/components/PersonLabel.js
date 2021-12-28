import PropTypes from 'prop-types';

export default function PersonLabel(props) {
  const {
    profilePhoto,
    firstName,
    familyName,
    desc,
    username,
    thumbnailClassName,
  } = props;

  return (
    <div className="flex items-center py-1">
      <img className={thumbnailClassName} src={profilePhoto} alt="Profile" />
      <div>
        { username ? (
          <a href={`/person/${username}`}>
            <h1 className="text-lg">{`${firstName} ${familyName}`}</h1>
          </a>
        ) : <h1 className="text-lg">{`${firstName} ${familyName}`}</h1>}
        {desc && (
          <p className="text-sm font-light">{desc}</p>
        )}
      </div>
    </div>
  );
}

PersonLabel.propTypes = {
  profilePhoto: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
  desc: PropTypes.string,
  username: PropTypes.string,
  thumbnailClassName: PropTypes.string,
};

PersonLabel.defaultProps = {
  thumbnailClassName: 'w-12 rounded-full mr-2',
  desc: null,
  username: null,
};
