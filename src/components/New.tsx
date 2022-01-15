import React from 'react';
import Markdown from 'markdown-to-jsx';
import { New as NewAPI, INew } from '../api/new';
import PersonLabel from './PersonLabel';

const MonthNames = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

interface Props {
  match: {
    params: {
      path: string;
    };
  };
}

interface State {
  data: INew | null;
  isLoaded: boolean;
  error: Error | null;
}

export default class New extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { match } = this.props;

    new NewAPI(match.params.path)
      .get()
      .then((res) => {
        this.setState({
          isLoaded: true,
          data: res,
        });
      })
      .catch((err) =>
        this.setState({
          error: err,
          isLoaded: true,
        })
      );
  }

  render() {
    const { data, isLoaded, error } = this.state;
    if (error) {
      return <h1>Oh no</h1>;
    }

    if (data && isLoaded) {
      return (
        <div
          itemScope
          itemType="https://schema.org/NewsArticle"
          className="md:grid md:grid-cols-8"
        >
          <div className="p-2 space-y-2 md:col-span-6 md:col-start-2 md:col-end-8">
            <h1 className="text-6xl font-bold tracking-wide">{data.title}</h1>
            <p className="text-xl font-light">{data.desc}</p>
            <PersonLabel
              profilePhoto={data.author.details.profilePhotoUrl}
              firstName={data.author.firstName}
              familyName={data.author.familyName}
              desc={`${
                MonthNames[data.date.getUTCMonth()]
              } ${data.date.getUTCDate()}, ${data.date.getUTCFullYear()}`}
              username={data.author.username}
            />
            <img
              className="h-auto w-full"
              src={data.metadata.thumbnailUrl}
              alt="Thumbnail"
            />
            <Markdown>{data.content!}</Markdown>
          </div>
        </div>
      );
    }

    return <h1>loading</h1>;
  }
}
