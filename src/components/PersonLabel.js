import PropTypes from 'prop-types';

export default function PersonLabel(props) {
  const {
    profilePhoto,
    firstName,
    familyName,
    desc,
  } = props;

  return (
    <div className="flex items-center py-1">
      <img className="w-12 h-12 rounded-full mr-2" src={profilePhoto} alt="Profile" />
      <div>
        <h1 className="text-lg">{`${firstName} ${familyName}`}</h1>
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
};

PersonLabel.defaultProps = {
  desc: null,
};
