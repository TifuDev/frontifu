interface Props {
  path: string;
  title: string;
  desc: string;
  thumbnailUrl: string;
  className: string;
}

export default function NewLabel(props: Props) {
  const { path, title, desc, thumbnailUrl, className } = props;
  return (
    <div className={className}>
      {thumbnailUrl && (
        <img className="w-full rounded-md" src={thumbnailUrl} alt="Thumbnail" />
      )}
      {thumbnailUrl ? (
        <a href={`/new/${path}`}>
          <h1 className="font-bold text-xl">{title}</h1>
        </a>
      ) : (
        <h1 className="font-bold text-xl">{title}</h1>
      )}
      <p className="text-lg font-light">{desc}</p>
    </div>
  );
}

NewLabel.defaultProps = {
  className: 'w-auto inline-block p-2',
  thumbnailUrl: null,
  path: null,
};
