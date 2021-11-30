import React from 'react';
import PropTypes from 'prop-types';

export default function NewLabel(props) {
  const {
    path,
    title,
    desc,
    thumbnailUrl,
    className,
  } = props;
  return (
    <div className={`${className} p-2`}>
      {thumbnailUrl
        && <img className="w-full rounded-md" src={thumbnailUrl} alt="Thumbnail" />}
      <div>
        {thumbnailUrl ? (
          <a href={`/new/${path}`}>
            <h1 className="font-bold text-xl">{title}</h1>
          </a>
        ) : (
          <h1 className="font-bold text-xl">{title}</h1>
        )}
        <p className="text-lg font-light">{desc}</p>
      </div>
    </div>
  );
}

NewLabel.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string,
  className: PropTypes.string,
};

NewLabel.defaultProps = {
  className: 'w-auto inline-block',
  thumbnailUrl: null,
  path: null,
};
