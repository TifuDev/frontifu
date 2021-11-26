import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import NewAPI from '../api/new';

export default class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { match } = this.props;
    new NewAPI(match.params.path).get()
      .then((res) => {
        this.setState({
          isLoaded: true,
          data: res,
        });
      })
      .catch((err) => this.setState({
        error: err,
        isLoaded: true,
      }));
  }

  render() {
    const { data, isLoaded, error } = this.state;
    if (error) {
      return <h1>Oh no</h1>;
    }

    if (data && isLoaded) {
      return (
        <div className="p-2">
          <h1 className="text-6xl text-semibold">{data.title}</h1>
          <p>{data.desc}</p>
          <div>
            <Markdown>{data.content}</Markdown>
          </div>
        </div>
      );
    }

    return <h1>loading</h1>;
  }
}

New.propTypes = {
  match: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};
