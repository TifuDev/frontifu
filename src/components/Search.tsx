import React from 'react';
import { New, INew } from '../api/new';
import NewLabel from './NewLabel';

interface Props {
  className: string;
}

interface State {
  catalog: INew[];
  resHidden: boolean;
}

export default class Search extends React.Component<Props, State> {
  static defaultProps: { className: string };

  constructor(props: Props) {
    super(props);
    this.state = {
      catalog: [],
      resHidden: true,
    };

    this.requestSearch = this.requestSearch.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {
    this.requestCatalog();
  }

  onFocus(ev: any) {
    const { catalog } = this.state;
    const parent = ev.target.parentElement;

    parent.classList.remove('rounded-md');
    parent.classList.add('rounded-t-md');

    this.setState({
      resHidden: false,
      catalog,
    });
  }

  onBlur(ev: any) {
    const { catalog } = this.state;
    const parent = ev.target.parentElement;

    parent.classList.remove('rounded-t-md');
    parent.classList.add('rounded-md');

    this.setState({
      resHidden: true,
      catalog,
    });
  }

  requestCatalog() {
    New.catalog().then((res) =>
      this.setState({
        catalog: res,
      })
    );
  }

  requestSearch(ev: any) {
    New.catalog(ev.target.value).then((res) =>
      this.setState({
        catalog: res,
      })
    );
  }

  render() {
    const { catalog, resHidden } = this.state;
    const { className } = this.props;

    return (
      <div className={`relative inline-block ${className}`}>
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            onInput={this.requestSearch}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className="placeholder-black bg-gray-100 dark:bg-gray-800 dark:placeholder-white focus:outline-none"
            placeholder="Pesquisar..."
          />
        </div>
        <div
          className={`${
            resHidden ? 'hidden' : ''
          } w-full rounded-b-md absolute bg-gray-100 dark:bg-gray-800`}
        >
          {catalog.length > 0 ? (
            catalog.map((obj) => (
              <NewLabel
                path={obj.path}
                title={obj.title}
                desc={obj.desc}
                thumbnailUrl={obj.metadata.thumbnailUrl}
                key={obj.path}
                className="p-2"
              />
            ))
          ) : (
            <NewLabel path="/" title="Sem resultados" desc="Refine sua busca" />
          )}
        </div>
      </div>
    );
  }
}

Search.defaultProps = {
  className: '',
};
