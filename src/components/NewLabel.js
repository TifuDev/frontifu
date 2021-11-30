import React from 'react';
import PropTypes from 'prop-types';

export default function NewLabel(props) {
  const {
    path,
    title,
    desc,
    thumbnailUrl,
  } = props;
  return (
    <div className="w-auto inline-block p-2">
      <img className="w-full rounded-md" src={thumbnailUrl} alt="Thumbnail" />
      <div>
        <a href={`/new/${path}`}>
          <h1 className="font-bold text-xl">{title}</h1>
        </a>
        <p className="text-lg font-light">{desc}</p>
      </div>
    </div>
  );
}

NewLabel.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
};
